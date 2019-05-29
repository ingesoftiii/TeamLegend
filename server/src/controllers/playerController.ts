import {Request,Response} from 'express';

import pool from '../database';

class PlayerController {

   public async list (req:Request,res:Response) {
   const players = await pool.query('SELECT * FROM jugadores');  
         res.json(players);
    }

   public async getOne(req:Request,res:Response): Promise<any>{
       const { id } = req.params;
       const players = await pool.query('SELECT * FROM jugadores WHERE id = ?',[id]);
       if(players.length > 0){
         return res.json(players[0]);
       }
      
       res.status(404).json({text:'The player doesnt exists'});
    }

    public async create (req:Request,res:Response): Promise<void>{

    await pool.query('INSERT INTO jugadores set ?', [req.body]);
    res.json({message:'Player Saved'});
    }

    public async update(req:Request,res:Response): Promise<void>{
        const { id } = req.params;
       await pool.query('UPDATE jugadores set ? WHERE id = ?',[req.body, id])
        res.json({message:'The player was updated'});
    }

    public async delete (req:Request,res:Response): Promise<void> {
        const { id } = req.params;
       await pool.query('DELETE FROM jugadores WHERE id = ?',[id]);
       res.json({message:'The player was deleted'})
        
    }

}
  



const playerController = new PlayerController(); 
export default playerController;