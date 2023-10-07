import * as Home from './theme/home';
import * as Articles from './theme/articles';
import * as Article from './theme/article';
import * as Forbiden from './theme/forbiden';
import * as Close from './theme/close';
import * as NotFound from './theme/notfound';
import * as ServerError from './theme/error';
type Termiante = () => unknown | Promise<unknown>;
export abstract class Theme {
  public abstract home(state: Home.Props): unknown | Promise<unknown>;
  public abstract articles(state: Articles.Props): unknown | Promise<unknown>;
  public abstract article(state: Article.Props): unknown | Promise<unknown>;
  public abstract forbiden(state: Forbiden.Props): unknown | Promise<unknown>;
  public abstract close(state: Close.Props): unknown | Promise<unknown>;
  public abstract notfound(state: NotFound.Props): unknown | Promise<unknown>;
  public abstract error(state: ServerError.Props): unknown | Promise<unknown>;
  public abstract initialize(): Termiante | Promise<Termiante>;
}