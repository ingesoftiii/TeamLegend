import {Request,Response} from 'express';

import pool from '../database';

class EquipoController {

   public async list (req:Request,res:Response) {
   const equipos = await pool.query('SELECT * FROM equipos');  
         res.json(equipos);
    }

    public async getOne(req:Request,res:Response): Promise<any>{
        const { id } = req.params;
        const equipos = await pool.query('SELECT * FROM equipos WHERE id_equipo = ?',[id]);
        if(equipos.length > 0){
          return res.json(equipos[0]);
        }
       
        res.status(404).json({text:'The equiposs doesnt exists'});
     }
 

    public async create (req:Request,res:Response): Promise<void>{
       await pool.query('INSERT INTO equipos set ?',[req.body]);
       res.json({message:'equipo Saved'});

    
    }

    public async update(req:Request,res:Response): Promise<void>{
        const {id } = req.params;
       await pool.query('UPDATE equipos set ? WHERE id_equipo = ?',[req.body, id])
        res.json({message:'The equipo was updated'});
    }

    public async delete (req:Request,res:Response): Promise<void> {
       
        const {id} = req.params;
       await pool.query('DELETE FROM equipos WHERE id_equipo = ?',[id]);
       res.json({message:'The equipos was deleted'})
    }


}

const equipoController = new EquipoController(); 
export default equipoController;