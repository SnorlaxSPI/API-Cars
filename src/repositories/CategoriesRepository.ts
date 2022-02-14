import { Category } from '../model/Category'

// DTO => Data transfer object

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {

  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    // Faremos outro método mais simples
    //category.name = name;
    //category.description = description;
    //category.created_at = new Date();
  
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })
  
    this.categories.push(category);
  }
}

export { CategoriesRepository };