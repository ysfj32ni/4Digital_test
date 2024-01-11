import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StudentsService {
  prisma = new PrismaClient();

  async create(data: CreateStudentDto) {
    try {
      const newStudent = await this.prisma.student.create({
        data: {
          fullName: data.fullName,
          age: data.age,
          email: data.email,
        },
      });
      console.log(newStudent, 'created successfully');
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const students = await this.prisma.student.findMany();
      if (!students) {
        return 'No students found';
      }
      return students;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      const student = await this.prisma.student.findUnique({
        where: {
          id: id,
        },
      });
      if (!student) {
        return 'No student found';
      }
      console.log(student);
      return student;
    } catch (error) {
      console.log(error);
    }
  }

  update(id: string, data: UpdateStudentDto) {
    try {
      if (!data) return `Cannot update`;
      const studentUpdated = this.prisma.student.update({
        where: {
          id: id,
        },
        data: {
          fullName: data.fullName,
          age: data.age,
          email: data.email,
        },
      });
      console.log('Student updated successfully');
      return studentUpdated;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      const studentToDeleted = await this.prisma.student.findUnique({
        where: {
          id: id,
        },
      });
      if (!studentToDeleted) {
        return 'student Does not exist';
      }
      const studentDeleted = await this.prisma.student.delete({
        where: {
          id: id,
        },
      });
      console.log(studentDeleted, 'deleted successfully');
    } catch (error) {
      console.log(error);
    }
  }
}
