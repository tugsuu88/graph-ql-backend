import express from 'express';
import multer from './multer';
import { createFile, getFile, delFile } from './file.controller';
const router = express.Router();

router
  .route('/file')
  .get(getFile)
  .post(multer.single('image'), createFile)
  .delete(delFile);

export default router;
