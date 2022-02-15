import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategotyServices';

const categoriesRoutes = Router();
const catetoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(catetoriesRepository);

  createCategoryService.execute({ name, description });
  
  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = catetoriesRepository.list();

  return response.json(all);
})

export { categoriesRoutes };