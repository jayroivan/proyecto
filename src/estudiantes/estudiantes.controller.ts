import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('estudiantes')
export class EstudiantesController {

    @Get()
    // http://localhost:3000/estudiantes
    ObtenerTodos(){
        return('obtener todos los estudiantes')
    }

    @Get(':id')
    //http://localhost:3000/estudiantes/1
    ObtenerUno(){
        return('obtener un estudiante por su id')
    }

    @Post()
    //http://localhost:3000/estudiantes
    Crear(){
        return ('crear un registro')
    }

    @Put(':id')
    //http://localhost:3000/estudiantes/1
    ActualizarUno(){
        return ('se actualizó 1 registro')
    }

    @Delete(':id')
    //http://localhost:3000/estudiantes/1
    EliminarUno(){
        return ('Se eliminó un registro')
    }

}
