import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EstudiantesModule,MongooseModule.forRoot("mongodb+srv://admin:0TF9Ajg6xI7u0UBi@cluster0.k8svanf.mongodb.net/?retryWrites=true&w=majority")], //colocar la url de la base de datos en mongo enlinea
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
