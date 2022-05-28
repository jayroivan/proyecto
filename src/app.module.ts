import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EstudiantesModule,MongooseModule.forRoot("")], //colocar la url de la base de datos en mongo enlinea
  controllers: [AppController, EstudiantesController],
  providers: [AppService, EstudiantesService],
})
export class AppModule {}
