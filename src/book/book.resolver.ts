import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookDto') createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Query(() => [Book], { name: 'books' })
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findOne(id);
  }

  @Query(() => [Book], { name: 'availableBooks' })
  findAvailableBooks() {
    return this.bookService.findAvailableBooks();
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookDto') updateBookDto: UpdateBookDto) {
    return this.bookService.update(updateBookDto);
  }

  @Mutation(() => Boolean)
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}
