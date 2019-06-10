import {Request,Response} from 'express';

import pool from '../database';

class PostController {

   public async list (req:Request,res:Response) {
   const post = await pool.query('SELECT * FROM post');  
         res.json(post);
    }

    public async getOne(req:Request,res:Response): Promise<any>{
        const { id } = req.params;
        const post = await pool.query('SELECT * FROM post WHERE id_post = ?',[id]);
        if(post.length > 0){
          return res.json(post[0]);
        }
       
        res.status(404).json({text:'The post doesnt exists'});
     }
 

    public async create (req:Request,res:Response): Promise<void>{
       await pool.query('INSERT INTO post set ?',[req.body]);
       res.json({message:'equipo Saved'});

    
    }

    public async update(req:Request,res:Response): Promise<void>{
        const {id } = req.params;
       await pool.query('UPDATE post set ? WHERE id_post = ?',[req.body, id])
        res.json({message:'The post was updated'});
    }

    public async delete (req:Request,res:Response): Promise<void> {
       
        const {id} = req.params;
       await pool.query('DELETE FROM post WHERE id_post = ?',[id]);
       res.json({message:'The post was deleted'})
    }


}

const postController = new PostController();
export default postController;
