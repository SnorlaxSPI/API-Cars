import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

// DTO => Data transfer object

// Singleton

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository;

    private constructor() {
      this.repository = getRepository(Category);
    }
  

  public static getInstance(): CategoriesRepository {

    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
   
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string):Promise<Category> {
    // select * from categories where name = 'name' limit 1
    const category : any = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };