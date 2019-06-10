import {Request,Response} from 'express';

import pool from '../database';

class AdminController {

   public async list (req:Request,res:Response) {
   const admin = await pool.query('SELECT * FROM administrador');  
         res.json(admin);
    }

    public async getOne(req:Request,res:Response): Promise<any>{
        const { id } = req.params;
        const admin = await pool.query('SELECT * FROM administrador WHERE id_admin = ?',[id]);
        if(admin.length > 0){
          return res.json(admin[0]);
        }
       
        res.status(404).json({text:'The admin doesnt exists'});
     }
 

    public async create (req:Request,res:Response): Promise<void>{
       await pool.query('INSERT INTO administrador set ?',[req.body]);
       res.json({message:'Admin Saved'});

    
    }

    public async update(req:Request,res:Response): Promise<void>{
        const {id } = req.params;
       await pool.query('UPDATE administrador set ? WHERE id_admin = ?',[req.body, id])
        res.json({message:'The admin was updated'});
    }

    public async delete (req:Request,res:Response): Promise<void> {
       
        const {id} = req.params;
       await pool.query('DELETE FROM administrador WHERE id_admin = ?',[id]);
       res.json({message:'The admin was deleted'})
    }


}

const adminController = new AdminController();
export default adminController;
