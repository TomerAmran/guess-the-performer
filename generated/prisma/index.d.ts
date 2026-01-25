
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Composer
 * 
 */
export type Composer = $Result.DefaultSelection<Prisma.$ComposerPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Instrument
 * 
 */
export type Instrument = $Result.DefaultSelection<Prisma.$InstrumentPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizSlice
 * 
 */
export type QuizSlice = $Result.DefaultSelection<Prisma.$QuizSlicePayload>
/**
 * Model QuizLike
 * 
 */
export type QuizLike = $Result.DefaultSelection<Prisma.$QuizLikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.composer`: Exposes CRUD operations for the **Composer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Composers
    * const composers = await prisma.composer.findMany()
    * ```
    */
  get composer(): Prisma.ComposerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instrument`: Exposes CRUD operations for the **Instrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instruments
    * const instruments = await prisma.instrument.findMany()
    * ```
    */
  get instrument(): Prisma.InstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSlice`: Exposes CRUD operations for the **QuizSlice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSlices
    * const quizSlices = await prisma.quizSlice.findMany()
    * ```
    */
  get quizSlice(): Prisma.QuizSliceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizLike`: Exposes CRUD operations for the **QuizLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizLikes
    * const quizLikes = await prisma.quizLike.findMany()
    * ```
    */
  get quizLike(): Prisma.QuizLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Composer: 'Composer',
    Artist: 'Artist',
    Instrument: 'Instrument',
    Quiz: 'Quiz',
    QuizSlice: 'QuizSlice',
    QuizLike: 'QuizLike',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "composer" | "artist" | "instrument" | "quiz" | "quizSlice" | "quizLike" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Composer: {
        payload: Prisma.$ComposerPayload<ExtArgs>
        fields: Prisma.ComposerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComposerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComposerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>
          }
          findFirst: {
            args: Prisma.ComposerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComposerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>
          }
          findMany: {
            args: Prisma.ComposerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>[]
          }
          create: {
            args: Prisma.ComposerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>
          }
          createMany: {
            args: Prisma.ComposerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComposerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>[]
          }
          delete: {
            args: Prisma.ComposerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>
          }
          update: {
            args: Prisma.ComposerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>
          }
          deleteMany: {
            args: Prisma.ComposerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComposerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComposerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>[]
          }
          upsert: {
            args: Prisma.ComposerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComposerPayload>
          }
          aggregate: {
            args: Prisma.ComposerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComposer>
          }
          groupBy: {
            args: Prisma.ComposerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComposerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComposerCountArgs<ExtArgs>
            result: $Utils.Optional<ComposerCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Instrument: {
        payload: Prisma.$InstrumentPayload<ExtArgs>
        fields: Prisma.InstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findFirst: {
            args: Prisma.InstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          findMany: {
            args: Prisma.InstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          create: {
            args: Prisma.InstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          createMany: {
            args: Prisma.InstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstrumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          delete: {
            args: Prisma.InstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          update: {
            args: Prisma.InstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          deleteMany: {
            args: Prisma.InstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstrumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>[]
          }
          upsert: {
            args: Prisma.InstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstrumentPayload>
          }
          aggregate: {
            args: Prisma.InstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstrument>
          }
          groupBy: {
            args: Prisma.InstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<InstrumentCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizSlice: {
        payload: Prisma.$QuizSlicePayload<ExtArgs>
        fields: Prisma.QuizSliceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSliceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSliceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>
          }
          findFirst: {
            args: Prisma.QuizSliceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSliceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>
          }
          findMany: {
            args: Prisma.QuizSliceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>[]
          }
          create: {
            args: Prisma.QuizSliceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>
          }
          createMany: {
            args: Prisma.QuizSliceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSliceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>[]
          }
          delete: {
            args: Prisma.QuizSliceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>
          }
          update: {
            args: Prisma.QuizSliceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>
          }
          deleteMany: {
            args: Prisma.QuizSliceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSliceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSliceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>[]
          }
          upsert: {
            args: Prisma.QuizSliceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSlicePayload>
          }
          aggregate: {
            args: Prisma.QuizSliceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSlice>
          }
          groupBy: {
            args: Prisma.QuizSliceGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSliceGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSliceCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSliceCountAggregateOutputType> | number
          }
        }
      }
      QuizLike: {
        payload: Prisma.$QuizLikePayload<ExtArgs>
        fields: Prisma.QuizLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>
          }
          findFirst: {
            args: Prisma.QuizLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>
          }
          findMany: {
            args: Prisma.QuizLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>[]
          }
          create: {
            args: Prisma.QuizLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>
          }
          createMany: {
            args: Prisma.QuizLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>[]
          }
          delete: {
            args: Prisma.QuizLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>
          }
          update: {
            args: Prisma.QuizLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>
          }
          deleteMany: {
            args: Prisma.QuizLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>[]
          }
          upsert: {
            args: Prisma.QuizLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizLikePayload>
          }
          aggregate: {
            args: Prisma.QuizLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizLike>
          }
          groupBy: {
            args: Prisma.QuizLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizLikeCountArgs<ExtArgs>
            result: $Utils.Optional<QuizLikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    composer?: ComposerOmit
    artist?: ArtistOmit
    instrument?: InstrumentOmit
    quiz?: QuizOmit
    quizSlice?: QuizSliceOmit
    quizLike?: QuizLikeOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    quizzes: number
    likedQuizzes: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    quizzes?: boolean | UserCountOutputTypeCountQuizzesArgs
    likedQuizzes?: boolean | UserCountOutputTypeCountLikedQuizzesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type ComposerCountOutputType
   */

  export type ComposerCountOutputType = {
    quizzes: number
  }

  export type ComposerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | ComposerCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * ComposerCountOutputType without action
   */
  export type ComposerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComposerCountOutputType
     */
    select?: ComposerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComposerCountOutputType without action
   */
  export type ComposerCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    quizSlices: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSlices?: boolean | ArtistCountOutputTypeCountQuizSlicesArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountQuizSlicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSliceWhereInput
  }


  /**
   * Count Type InstrumentCountOutputType
   */

  export type InstrumentCountOutputType = {
    quizzes: number
  }

  export type InstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | InstrumentCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentCountOutputType
     */
    select?: InstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstrumentCountOutputType without action
   */
  export type InstrumentCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    slices: number
    likedBy: number
    comments: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slices?: boolean | QuizCountOutputTypeCountSlicesArgs
    likedBy?: boolean | QuizCountOutputTypeCountLikedByArgs
    comments?: boolean | QuizCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountSlicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSliceWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizLikeWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    quizzes?: boolean | User$quizzesArgs<ExtArgs>
    likedQuizzes?: boolean | User$likedQuizzesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    quizzes?: boolean | User$quizzesArgs<ExtArgs>
    likedQuizzes?: boolean | User$likedQuizzesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      likedQuizzes: Prisma.$QuizLikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends User$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedQuizzes<T extends User$likedQuizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$likedQuizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.quizzes
   */
  export type User$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * User.likedQuizzes
   */
  export type User$likedQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    where?: QuizLikeWhereInput
    orderBy?: QuizLikeOrderByWithRelationInput | QuizLikeOrderByWithRelationInput[]
    cursor?: QuizLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizLikeScalarFieldEnum | QuizLikeScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Composer
   */

  export type AggregateComposer = {
    _count: ComposerCountAggregateOutputType | null
    _min: ComposerMinAggregateOutputType | null
    _max: ComposerMaxAggregateOutputType | null
  }

  export type ComposerMinAggregateOutputType = {
    id: string | null
    name: string | null
    photoUrl: string | null
  }

  export type ComposerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    photoUrl: string | null
  }

  export type ComposerCountAggregateOutputType = {
    id: number
    name: number
    photoUrl: number
    _all: number
  }


  export type ComposerMinAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
  }

  export type ComposerMaxAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
  }

  export type ComposerCountAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
    _all?: true
  }

  export type ComposerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Composer to aggregate.
     */
    where?: ComposerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Composers to fetch.
     */
    orderBy?: ComposerOrderByWithRelationInput | ComposerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComposerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Composers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Composers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Composers
    **/
    _count?: true | ComposerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComposerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComposerMaxAggregateInputType
  }

  export type GetComposerAggregateType<T extends ComposerAggregateArgs> = {
        [P in keyof T & keyof AggregateComposer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComposer[P]>
      : GetScalarType<T[P], AggregateComposer[P]>
  }




  export type ComposerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComposerWhereInput
    orderBy?: ComposerOrderByWithAggregationInput | ComposerOrderByWithAggregationInput[]
    by: ComposerScalarFieldEnum[] | ComposerScalarFieldEnum
    having?: ComposerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComposerCountAggregateInputType | true
    _min?: ComposerMinAggregateInputType
    _max?: ComposerMaxAggregateInputType
  }

  export type ComposerGroupByOutputType = {
    id: string
    name: string
    photoUrl: string | null
    _count: ComposerCountAggregateOutputType | null
    _min: ComposerMinAggregateOutputType | null
    _max: ComposerMaxAggregateOutputType | null
  }

  type GetComposerGroupByPayload<T extends ComposerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComposerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComposerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComposerGroupByOutputType[P]>
            : GetScalarType<T[P], ComposerGroupByOutputType[P]>
        }
      >
    >


  export type ComposerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoUrl?: boolean
    quizzes?: boolean | Composer$quizzesArgs<ExtArgs>
    _count?: boolean | ComposerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["composer"]>

  export type ComposerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["composer"]>

  export type ComposerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["composer"]>

  export type ComposerSelectScalar = {
    id?: boolean
    name?: boolean
    photoUrl?: boolean
  }

  export type ComposerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photoUrl", ExtArgs["result"]["composer"]>
  export type ComposerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | Composer$quizzesArgs<ExtArgs>
    _count?: boolean | ComposerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComposerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComposerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ComposerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Composer"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      photoUrl: string | null
    }, ExtArgs["result"]["composer"]>
    composites: {}
  }

  type ComposerGetPayload<S extends boolean | null | undefined | ComposerDefaultArgs> = $Result.GetResult<Prisma.$ComposerPayload, S>

  type ComposerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComposerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComposerCountAggregateInputType | true
    }

  export interface ComposerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Composer'], meta: { name: 'Composer' } }
    /**
     * Find zero or one Composer that matches the filter.
     * @param {ComposerFindUniqueArgs} args - Arguments to find a Composer
     * @example
     * // Get one Composer
     * const composer = await prisma.composer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComposerFindUniqueArgs>(args: SelectSubset<T, ComposerFindUniqueArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Composer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComposerFindUniqueOrThrowArgs} args - Arguments to find a Composer
     * @example
     * // Get one Composer
     * const composer = await prisma.composer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComposerFindUniqueOrThrowArgs>(args: SelectSubset<T, ComposerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Composer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerFindFirstArgs} args - Arguments to find a Composer
     * @example
     * // Get one Composer
     * const composer = await prisma.composer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComposerFindFirstArgs>(args?: SelectSubset<T, ComposerFindFirstArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Composer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerFindFirstOrThrowArgs} args - Arguments to find a Composer
     * @example
     * // Get one Composer
     * const composer = await prisma.composer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComposerFindFirstOrThrowArgs>(args?: SelectSubset<T, ComposerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Composers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Composers
     * const composers = await prisma.composer.findMany()
     * 
     * // Get first 10 Composers
     * const composers = await prisma.composer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const composerWithIdOnly = await prisma.composer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComposerFindManyArgs>(args?: SelectSubset<T, ComposerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Composer.
     * @param {ComposerCreateArgs} args - Arguments to create a Composer.
     * @example
     * // Create one Composer
     * const Composer = await prisma.composer.create({
     *   data: {
     *     // ... data to create a Composer
     *   }
     * })
     * 
     */
    create<T extends ComposerCreateArgs>(args: SelectSubset<T, ComposerCreateArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Composers.
     * @param {ComposerCreateManyArgs} args - Arguments to create many Composers.
     * @example
     * // Create many Composers
     * const composer = await prisma.composer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComposerCreateManyArgs>(args?: SelectSubset<T, ComposerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Composers and returns the data saved in the database.
     * @param {ComposerCreateManyAndReturnArgs} args - Arguments to create many Composers.
     * @example
     * // Create many Composers
     * const composer = await prisma.composer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Composers and only return the `id`
     * const composerWithIdOnly = await prisma.composer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComposerCreateManyAndReturnArgs>(args?: SelectSubset<T, ComposerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Composer.
     * @param {ComposerDeleteArgs} args - Arguments to delete one Composer.
     * @example
     * // Delete one Composer
     * const Composer = await prisma.composer.delete({
     *   where: {
     *     // ... filter to delete one Composer
     *   }
     * })
     * 
     */
    delete<T extends ComposerDeleteArgs>(args: SelectSubset<T, ComposerDeleteArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Composer.
     * @param {ComposerUpdateArgs} args - Arguments to update one Composer.
     * @example
     * // Update one Composer
     * const composer = await prisma.composer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComposerUpdateArgs>(args: SelectSubset<T, ComposerUpdateArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Composers.
     * @param {ComposerDeleteManyArgs} args - Arguments to filter Composers to delete.
     * @example
     * // Delete a few Composers
     * const { count } = await prisma.composer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComposerDeleteManyArgs>(args?: SelectSubset<T, ComposerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Composers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Composers
     * const composer = await prisma.composer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComposerUpdateManyArgs>(args: SelectSubset<T, ComposerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Composers and returns the data updated in the database.
     * @param {ComposerUpdateManyAndReturnArgs} args - Arguments to update many Composers.
     * @example
     * // Update many Composers
     * const composer = await prisma.composer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Composers and only return the `id`
     * const composerWithIdOnly = await prisma.composer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComposerUpdateManyAndReturnArgs>(args: SelectSubset<T, ComposerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Composer.
     * @param {ComposerUpsertArgs} args - Arguments to update or create a Composer.
     * @example
     * // Update or create a Composer
     * const composer = await prisma.composer.upsert({
     *   create: {
     *     // ... data to create a Composer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Composer we want to update
     *   }
     * })
     */
    upsert<T extends ComposerUpsertArgs>(args: SelectSubset<T, ComposerUpsertArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Composers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerCountArgs} args - Arguments to filter Composers to count.
     * @example
     * // Count the number of Composers
     * const count = await prisma.composer.count({
     *   where: {
     *     // ... the filter for the Composers we want to count
     *   }
     * })
    **/
    count<T extends ComposerCountArgs>(
      args?: Subset<T, ComposerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComposerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Composer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComposerAggregateArgs>(args: Subset<T, ComposerAggregateArgs>): Prisma.PrismaPromise<GetComposerAggregateType<T>>

    /**
     * Group by Composer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComposerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComposerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComposerGroupByArgs['orderBy'] }
        : { orderBy?: ComposerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComposerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComposerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Composer model
   */
  readonly fields: ComposerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Composer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComposerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends Composer$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Composer$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Composer model
   */
  interface ComposerFieldRefs {
    readonly id: FieldRef<"Composer", 'String'>
    readonly name: FieldRef<"Composer", 'String'>
    readonly photoUrl: FieldRef<"Composer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Composer findUnique
   */
  export type ComposerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * Filter, which Composer to fetch.
     */
    where: ComposerWhereUniqueInput
  }

  /**
   * Composer findUniqueOrThrow
   */
  export type ComposerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * Filter, which Composer to fetch.
     */
    where: ComposerWhereUniqueInput
  }

  /**
   * Composer findFirst
   */
  export type ComposerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * Filter, which Composer to fetch.
     */
    where?: ComposerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Composers to fetch.
     */
    orderBy?: ComposerOrderByWithRelationInput | ComposerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Composers.
     */
    cursor?: ComposerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Composers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Composers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Composers.
     */
    distinct?: ComposerScalarFieldEnum | ComposerScalarFieldEnum[]
  }

  /**
   * Composer findFirstOrThrow
   */
  export type ComposerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * Filter, which Composer to fetch.
     */
    where?: ComposerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Composers to fetch.
     */
    orderBy?: ComposerOrderByWithRelationInput | ComposerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Composers.
     */
    cursor?: ComposerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Composers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Composers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Composers.
     */
    distinct?: ComposerScalarFieldEnum | ComposerScalarFieldEnum[]
  }

  /**
   * Composer findMany
   */
  export type ComposerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * Filter, which Composers to fetch.
     */
    where?: ComposerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Composers to fetch.
     */
    orderBy?: ComposerOrderByWithRelationInput | ComposerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Composers.
     */
    cursor?: ComposerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Composers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Composers.
     */
    skip?: number
    distinct?: ComposerScalarFieldEnum | ComposerScalarFieldEnum[]
  }

  /**
   * Composer create
   */
  export type ComposerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * The data needed to create a Composer.
     */
    data: XOR<ComposerCreateInput, ComposerUncheckedCreateInput>
  }

  /**
   * Composer createMany
   */
  export type ComposerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Composers.
     */
    data: ComposerCreateManyInput | ComposerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Composer createManyAndReturn
   */
  export type ComposerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * The data used to create many Composers.
     */
    data: ComposerCreateManyInput | ComposerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Composer update
   */
  export type ComposerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * The data needed to update a Composer.
     */
    data: XOR<ComposerUpdateInput, ComposerUncheckedUpdateInput>
    /**
     * Choose, which Composer to update.
     */
    where: ComposerWhereUniqueInput
  }

  /**
   * Composer updateMany
   */
  export type ComposerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Composers.
     */
    data: XOR<ComposerUpdateManyMutationInput, ComposerUncheckedUpdateManyInput>
    /**
     * Filter which Composers to update
     */
    where?: ComposerWhereInput
    /**
     * Limit how many Composers to update.
     */
    limit?: number
  }

  /**
   * Composer updateManyAndReturn
   */
  export type ComposerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * The data used to update Composers.
     */
    data: XOR<ComposerUpdateManyMutationInput, ComposerUncheckedUpdateManyInput>
    /**
     * Filter which Composers to update
     */
    where?: ComposerWhereInput
    /**
     * Limit how many Composers to update.
     */
    limit?: number
  }

  /**
   * Composer upsert
   */
  export type ComposerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * The filter to search for the Composer to update in case it exists.
     */
    where: ComposerWhereUniqueInput
    /**
     * In case the Composer found by the `where` argument doesn't exist, create a new Composer with this data.
     */
    create: XOR<ComposerCreateInput, ComposerUncheckedCreateInput>
    /**
     * In case the Composer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComposerUpdateInput, ComposerUncheckedUpdateInput>
  }

  /**
   * Composer delete
   */
  export type ComposerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
    /**
     * Filter which Composer to delete.
     */
    where: ComposerWhereUniqueInput
  }

  /**
   * Composer deleteMany
   */
  export type ComposerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Composers to delete
     */
    where?: ComposerWhereInput
    /**
     * Limit how many Composers to delete.
     */
    limit?: number
  }

  /**
   * Composer.quizzes
   */
  export type Composer$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Composer without action
   */
  export type ComposerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Composer
     */
    select?: ComposerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Composer
     */
    omit?: ComposerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComposerInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    photoUrl: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    photoUrl: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    photoUrl: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    photoUrl: string | null
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoUrl?: boolean
    quizSlices?: boolean | Artist$quizSlicesArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    photoUrl?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photoUrl", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSlices?: boolean | Artist$quizSlicesArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      quizSlices: Prisma.$QuizSlicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      photoUrl: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizSlices<T extends Artist$quizSlicesArgs<ExtArgs> = {}>(args?: Subset<T, Artist$quizSlicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly photoUrl: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.quizSlices
   */
  export type Artist$quizSlicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    where?: QuizSliceWhereInput
    orderBy?: QuizSliceOrderByWithRelationInput | QuizSliceOrderByWithRelationInput[]
    cursor?: QuizSliceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSliceScalarFieldEnum | QuizSliceScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Instrument
   */

  export type AggregateInstrument = {
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  export type InstrumentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type InstrumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type InstrumentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InstrumentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstrumentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstrumentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instrument to aggregate.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instruments
    **/
    _count?: true | InstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentMaxAggregateInputType
  }

  export type GetInstrumentAggregateType<T extends InstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstrument[P]>
      : GetScalarType<T[P], AggregateInstrument[P]>
  }




  export type InstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstrumentWhereInput
    orderBy?: InstrumentOrderByWithAggregationInput | InstrumentOrderByWithAggregationInput[]
    by: InstrumentScalarFieldEnum[] | InstrumentScalarFieldEnum
    having?: InstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstrumentCountAggregateInputType | true
    _min?: InstrumentMinAggregateInputType
    _max?: InstrumentMaxAggregateInputType
  }

  export type InstrumentGroupByOutputType = {
    id: string
    name: string
    _count: InstrumentCountAggregateOutputType | null
    _min: InstrumentMinAggregateOutputType | null
    _max: InstrumentMaxAggregateOutputType | null
  }

  type GetInstrumentGroupByPayload<T extends InstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], InstrumentGroupByOutputType[P]>
        }
      >
    >


  export type InstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quizzes?: boolean | Instrument$quizzesArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["instrument"]>

  export type InstrumentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["instrument"]>
  export type InstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | Instrument$quizzesArgs<ExtArgs>
    _count?: boolean | InstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstrumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstrumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instrument"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["instrument"]>
    composites: {}
  }

  type InstrumentGetPayload<S extends boolean | null | undefined | InstrumentDefaultArgs> = $Result.GetResult<Prisma.$InstrumentPayload, S>

  type InstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstrumentCountAggregateInputType | true
    }

  export interface InstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instrument'], meta: { name: 'Instrument' } }
    /**
     * Find zero or one Instrument that matches the filter.
     * @param {InstrumentFindUniqueArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstrumentFindUniqueArgs>(args: SelectSubset<T, InstrumentFindUniqueArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstrumentFindUniqueOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstrumentFindFirstArgs>(args?: SelectSubset<T, InstrumentFindFirstArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindFirstOrThrowArgs} args - Arguments to find a Instrument
     * @example
     * // Get one Instrument
     * const instrument = await prisma.instrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instruments
     * const instruments = await prisma.instrument.findMany()
     * 
     * // Get first 10 Instruments
     * const instruments = await prisma.instrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instrumentWithIdOnly = await prisma.instrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstrumentFindManyArgs>(args?: SelectSubset<T, InstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instrument.
     * @param {InstrumentCreateArgs} args - Arguments to create a Instrument.
     * @example
     * // Create one Instrument
     * const Instrument = await prisma.instrument.create({
     *   data: {
     *     // ... data to create a Instrument
     *   }
     * })
     * 
     */
    create<T extends InstrumentCreateArgs>(args: SelectSubset<T, InstrumentCreateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instruments.
     * @param {InstrumentCreateManyArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstrumentCreateManyArgs>(args?: SelectSubset<T, InstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instruments and returns the data saved in the database.
     * @param {InstrumentCreateManyAndReturnArgs} args - Arguments to create many Instruments.
     * @example
     * // Create many Instruments
     * const instrument = await prisma.instrument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstrumentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstrumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instrument.
     * @param {InstrumentDeleteArgs} args - Arguments to delete one Instrument.
     * @example
     * // Delete one Instrument
     * const Instrument = await prisma.instrument.delete({
     *   where: {
     *     // ... filter to delete one Instrument
     *   }
     * })
     * 
     */
    delete<T extends InstrumentDeleteArgs>(args: SelectSubset<T, InstrumentDeleteArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instrument.
     * @param {InstrumentUpdateArgs} args - Arguments to update one Instrument.
     * @example
     * // Update one Instrument
     * const instrument = await prisma.instrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstrumentUpdateArgs>(args: SelectSubset<T, InstrumentUpdateArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instruments.
     * @param {InstrumentDeleteManyArgs} args - Arguments to filter Instruments to delete.
     * @example
     * // Delete a few Instruments
     * const { count } = await prisma.instrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstrumentDeleteManyArgs>(args?: SelectSubset<T, InstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstrumentUpdateManyArgs>(args: SelectSubset<T, InstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instruments and returns the data updated in the database.
     * @param {InstrumentUpdateManyAndReturnArgs} args - Arguments to update many Instruments.
     * @example
     * // Update many Instruments
     * const instrument = await prisma.instrument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instruments and only return the `id`
     * const instrumentWithIdOnly = await prisma.instrument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstrumentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstrumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instrument.
     * @param {InstrumentUpsertArgs} args - Arguments to update or create a Instrument.
     * @example
     * // Update or create a Instrument
     * const instrument = await prisma.instrument.upsert({
     *   create: {
     *     // ... data to create a Instrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instrument we want to update
     *   }
     * })
     */
    upsert<T extends InstrumentUpsertArgs>(args: SelectSubset<T, InstrumentUpsertArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentCountArgs} args - Arguments to filter Instruments to count.
     * @example
     * // Count the number of Instruments
     * const count = await prisma.instrument.count({
     *   where: {
     *     // ... the filter for the Instruments we want to count
     *   }
     * })
    **/
    count<T extends InstrumentCountArgs>(
      args?: Subset<T, InstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstrumentAggregateArgs>(args: Subset<T, InstrumentAggregateArgs>): Prisma.PrismaPromise<GetInstrumentAggregateType<T>>

    /**
     * Group by Instrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstrumentGroupByArgs['orderBy'] }
        : { orderBy?: InstrumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instrument model
   */
  readonly fields: InstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends Instrument$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Instrument$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instrument model
   */
  interface InstrumentFieldRefs {
    readonly id: FieldRef<"Instrument", 'String'>
    readonly name: FieldRef<"Instrument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instrument findUnique
   */
  export type InstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findUniqueOrThrow
   */
  export type InstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument findFirst
   */
  export type InstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findFirstOrThrow
   */
  export type InstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instrument to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instruments.
     */
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument findMany
   */
  export type InstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter, which Instruments to fetch.
     */
    where?: InstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instruments to fetch.
     */
    orderBy?: InstrumentOrderByWithRelationInput | InstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instruments.
     */
    cursor?: InstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instruments.
     */
    skip?: number
    distinct?: InstrumentScalarFieldEnum | InstrumentScalarFieldEnum[]
  }

  /**
   * Instrument create
   */
  export type InstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Instrument.
     */
    data: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
  }

  /**
   * Instrument createMany
   */
  export type InstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument createManyAndReturn
   */
  export type InstrumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to create many Instruments.
     */
    data: InstrumentCreateManyInput | InstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instrument update
   */
  export type InstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Instrument.
     */
    data: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
    /**
     * Choose, which Instrument to update.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument updateMany
   */
  export type InstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument updateManyAndReturn
   */
  export type InstrumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * The data used to update Instruments.
     */
    data: XOR<InstrumentUpdateManyMutationInput, InstrumentUncheckedUpdateManyInput>
    /**
     * Filter which Instruments to update
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to update.
     */
    limit?: number
  }

  /**
   * Instrument upsert
   */
  export type InstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Instrument to update in case it exists.
     */
    where: InstrumentWhereUniqueInput
    /**
     * In case the Instrument found by the `where` argument doesn't exist, create a new Instrument with this data.
     */
    create: XOR<InstrumentCreateInput, InstrumentUncheckedCreateInput>
    /**
     * In case the Instrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstrumentUpdateInput, InstrumentUncheckedUpdateInput>
  }

  /**
   * Instrument delete
   */
  export type InstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
    /**
     * Filter which Instrument to delete.
     */
    where: InstrumentWhereUniqueInput
  }

  /**
   * Instrument deleteMany
   */
  export type InstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruments to delete
     */
    where?: InstrumentWhereInput
    /**
     * Limit how many Instruments to delete.
     */
    limit?: number
  }

  /**
   * Instrument.quizzes
   */
  export type Instrument$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Instrument without action
   */
  export type InstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instrument
     */
    select?: InstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instrument
     */
    omit?: InstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstrumentInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    duration: number | null
    likes: number | null
  }

  export type QuizSumAggregateOutputType = {
    duration: number | null
    likes: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    pieceName: string | null
    duration: number | null
    likes: number | null
    createdAt: Date | null
    composerId: string | null
    instrumentId: string | null
    createdById: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    pieceName: string | null
    duration: number | null
    likes: number | null
    createdAt: Date | null
    composerId: string | null
    instrumentId: string | null
    createdById: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    pieceName: number
    duration: number
    likes: number
    createdAt: number
    composerId: number
    instrumentId: number
    createdById: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    duration?: true
    likes?: true
  }

  export type QuizSumAggregateInputType = {
    duration?: true
    likes?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    pieceName?: true
    duration?: true
    likes?: true
    createdAt?: true
    composerId?: true
    instrumentId?: true
    createdById?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    pieceName?: true
    duration?: true
    likes?: true
    createdAt?: true
    composerId?: true
    instrumentId?: true
    createdById?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    pieceName?: true
    duration?: true
    likes?: true
    createdAt?: true
    composerId?: true
    instrumentId?: true
    createdById?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    pieceName: string
    duration: number
    likes: number
    createdAt: Date
    composerId: string
    instrumentId: string
    createdById: string
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieceName?: boolean
    duration?: boolean
    likes?: boolean
    createdAt?: boolean
    composerId?: boolean
    instrumentId?: boolean
    createdById?: boolean
    composer?: boolean | ComposerDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slices?: boolean | Quiz$slicesArgs<ExtArgs>
    likedBy?: boolean | Quiz$likedByArgs<ExtArgs>
    comments?: boolean | Quiz$commentsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieceName?: boolean
    duration?: boolean
    likes?: boolean
    createdAt?: boolean
    composerId?: boolean
    instrumentId?: boolean
    createdById?: boolean
    composer?: boolean | ComposerDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pieceName?: boolean
    duration?: boolean
    likes?: boolean
    createdAt?: boolean
    composerId?: boolean
    instrumentId?: boolean
    createdById?: boolean
    composer?: boolean | ComposerDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    pieceName?: boolean
    duration?: boolean
    likes?: boolean
    createdAt?: boolean
    composerId?: boolean
    instrumentId?: boolean
    createdById?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pieceName" | "duration" | "likes" | "createdAt" | "composerId" | "instrumentId" | "createdById", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    composer?: boolean | ComposerDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    slices?: boolean | Quiz$slicesArgs<ExtArgs>
    likedBy?: boolean | Quiz$likedByArgs<ExtArgs>
    comments?: boolean | Quiz$commentsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    composer?: boolean | ComposerDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    composer?: boolean | ComposerDefaultArgs<ExtArgs>
    instrument?: boolean | InstrumentDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      composer: Prisma.$ComposerPayload<ExtArgs>
      instrument: Prisma.$InstrumentPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      slices: Prisma.$QuizSlicePayload<ExtArgs>[]
      likedBy: Prisma.$QuizLikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pieceName: string
      duration: number
      likes: number
      createdAt: Date
      composerId: string
      instrumentId: string
      createdById: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    composer<T extends ComposerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComposerDefaultArgs<ExtArgs>>): Prisma__ComposerClient<$Result.GetResult<Prisma.$ComposerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instrument<T extends InstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstrumentDefaultArgs<ExtArgs>>): Prisma__InstrumentClient<$Result.GetResult<Prisma.$InstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slices<T extends Quiz$slicesArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$slicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends Quiz$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Quiz$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly pieceName: FieldRef<"Quiz", 'String'>
    readonly duration: FieldRef<"Quiz", 'Int'>
    readonly likes: FieldRef<"Quiz", 'Int'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly composerId: FieldRef<"Quiz", 'String'>
    readonly instrumentId: FieldRef<"Quiz", 'String'>
    readonly createdById: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.slices
   */
  export type Quiz$slicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    where?: QuizSliceWhereInput
    orderBy?: QuizSliceOrderByWithRelationInput | QuizSliceOrderByWithRelationInput[]
    cursor?: QuizSliceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSliceScalarFieldEnum | QuizSliceScalarFieldEnum[]
  }

  /**
   * Quiz.likedBy
   */
  export type Quiz$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    where?: QuizLikeWhereInput
    orderBy?: QuizLikeOrderByWithRelationInput | QuizLikeOrderByWithRelationInput[]
    cursor?: QuizLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizLikeScalarFieldEnum | QuizLikeScalarFieldEnum[]
  }

  /**
   * Quiz.comments
   */
  export type Quiz$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizSlice
   */

  export type AggregateQuizSlice = {
    _count: QuizSliceCountAggregateOutputType | null
    _avg: QuizSliceAvgAggregateOutputType | null
    _sum: QuizSliceSumAggregateOutputType | null
    _min: QuizSliceMinAggregateOutputType | null
    _max: QuizSliceMaxAggregateOutputType | null
  }

  export type QuizSliceAvgAggregateOutputType = {
    startTime: number | null
  }

  export type QuizSliceSumAggregateOutputType = {
    startTime: number | null
  }

  export type QuizSliceMinAggregateOutputType = {
    id: string | null
    startTime: number | null
    youtubeUrl: string | null
    quizId: string | null
    artistId: string | null
  }

  export type QuizSliceMaxAggregateOutputType = {
    id: string | null
    startTime: number | null
    youtubeUrl: string | null
    quizId: string | null
    artistId: string | null
  }

  export type QuizSliceCountAggregateOutputType = {
    id: number
    startTime: number
    youtubeUrl: number
    quizId: number
    artistId: number
    _all: number
  }


  export type QuizSliceAvgAggregateInputType = {
    startTime?: true
  }

  export type QuizSliceSumAggregateInputType = {
    startTime?: true
  }

  export type QuizSliceMinAggregateInputType = {
    id?: true
    startTime?: true
    youtubeUrl?: true
    quizId?: true
    artistId?: true
  }

  export type QuizSliceMaxAggregateInputType = {
    id?: true
    startTime?: true
    youtubeUrl?: true
    quizId?: true
    artistId?: true
  }

  export type QuizSliceCountAggregateInputType = {
    id?: true
    startTime?: true
    youtubeUrl?: true
    quizId?: true
    artistId?: true
    _all?: true
  }

  export type QuizSliceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSlice to aggregate.
     */
    where?: QuizSliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSlices to fetch.
     */
    orderBy?: QuizSliceOrderByWithRelationInput | QuizSliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSlices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSlices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSlices
    **/
    _count?: true | QuizSliceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizSliceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSliceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSliceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSliceMaxAggregateInputType
  }

  export type GetQuizSliceAggregateType<T extends QuizSliceAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSlice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSlice[P]>
      : GetScalarType<T[P], AggregateQuizSlice[P]>
  }




  export type QuizSliceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSliceWhereInput
    orderBy?: QuizSliceOrderByWithAggregationInput | QuizSliceOrderByWithAggregationInput[]
    by: QuizSliceScalarFieldEnum[] | QuizSliceScalarFieldEnum
    having?: QuizSliceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSliceCountAggregateInputType | true
    _avg?: QuizSliceAvgAggregateInputType
    _sum?: QuizSliceSumAggregateInputType
    _min?: QuizSliceMinAggregateInputType
    _max?: QuizSliceMaxAggregateInputType
  }

  export type QuizSliceGroupByOutputType = {
    id: string
    startTime: number
    youtubeUrl: string
    quizId: string
    artistId: string
    _count: QuizSliceCountAggregateOutputType | null
    _avg: QuizSliceAvgAggregateOutputType | null
    _sum: QuizSliceSumAggregateOutputType | null
    _min: QuizSliceMinAggregateOutputType | null
    _max: QuizSliceMaxAggregateOutputType | null
  }

  type GetQuizSliceGroupByPayload<T extends QuizSliceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSliceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSliceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSliceGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSliceGroupByOutputType[P]>
        }
      >
    >


  export type QuizSliceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    youtubeUrl?: boolean
    quizId?: boolean
    artistId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSlice"]>

  export type QuizSliceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    youtubeUrl?: boolean
    quizId?: boolean
    artistId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSlice"]>

  export type QuizSliceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    youtubeUrl?: boolean
    quizId?: boolean
    artistId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSlice"]>

  export type QuizSliceSelectScalar = {
    id?: boolean
    startTime?: boolean
    youtubeUrl?: boolean
    quizId?: boolean
    artistId?: boolean
  }

  export type QuizSliceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "youtubeUrl" | "quizId" | "artistId", ExtArgs["result"]["quizSlice"]>
  export type QuizSliceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type QuizSliceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type QuizSliceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $QuizSlicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSlice"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: number
      youtubeUrl: string
      quizId: string
      artistId: string
    }, ExtArgs["result"]["quizSlice"]>
    composites: {}
  }

  type QuizSliceGetPayload<S extends boolean | null | undefined | QuizSliceDefaultArgs> = $Result.GetResult<Prisma.$QuizSlicePayload, S>

  type QuizSliceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSliceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSliceCountAggregateInputType | true
    }

  export interface QuizSliceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSlice'], meta: { name: 'QuizSlice' } }
    /**
     * Find zero or one QuizSlice that matches the filter.
     * @param {QuizSliceFindUniqueArgs} args - Arguments to find a QuizSlice
     * @example
     * // Get one QuizSlice
     * const quizSlice = await prisma.quizSlice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSliceFindUniqueArgs>(args: SelectSubset<T, QuizSliceFindUniqueArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSlice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSliceFindUniqueOrThrowArgs} args - Arguments to find a QuizSlice
     * @example
     * // Get one QuizSlice
     * const quizSlice = await prisma.quizSlice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSliceFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSliceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSlice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceFindFirstArgs} args - Arguments to find a QuizSlice
     * @example
     * // Get one QuizSlice
     * const quizSlice = await prisma.quizSlice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSliceFindFirstArgs>(args?: SelectSubset<T, QuizSliceFindFirstArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSlice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceFindFirstOrThrowArgs} args - Arguments to find a QuizSlice
     * @example
     * // Get one QuizSlice
     * const quizSlice = await prisma.quizSlice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSliceFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSliceFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSlices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSlices
     * const quizSlices = await prisma.quizSlice.findMany()
     * 
     * // Get first 10 QuizSlices
     * const quizSlices = await prisma.quizSlice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSliceWithIdOnly = await prisma.quizSlice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSliceFindManyArgs>(args?: SelectSubset<T, QuizSliceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSlice.
     * @param {QuizSliceCreateArgs} args - Arguments to create a QuizSlice.
     * @example
     * // Create one QuizSlice
     * const QuizSlice = await prisma.quizSlice.create({
     *   data: {
     *     // ... data to create a QuizSlice
     *   }
     * })
     * 
     */
    create<T extends QuizSliceCreateArgs>(args: SelectSubset<T, QuizSliceCreateArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSlices.
     * @param {QuizSliceCreateManyArgs} args - Arguments to create many QuizSlices.
     * @example
     * // Create many QuizSlices
     * const quizSlice = await prisma.quizSlice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSliceCreateManyArgs>(args?: SelectSubset<T, QuizSliceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSlices and returns the data saved in the database.
     * @param {QuizSliceCreateManyAndReturnArgs} args - Arguments to create many QuizSlices.
     * @example
     * // Create many QuizSlices
     * const quizSlice = await prisma.quizSlice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSlices and only return the `id`
     * const quizSliceWithIdOnly = await prisma.quizSlice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSliceCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSliceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSlice.
     * @param {QuizSliceDeleteArgs} args - Arguments to delete one QuizSlice.
     * @example
     * // Delete one QuizSlice
     * const QuizSlice = await prisma.quizSlice.delete({
     *   where: {
     *     // ... filter to delete one QuizSlice
     *   }
     * })
     * 
     */
    delete<T extends QuizSliceDeleteArgs>(args: SelectSubset<T, QuizSliceDeleteArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSlice.
     * @param {QuizSliceUpdateArgs} args - Arguments to update one QuizSlice.
     * @example
     * // Update one QuizSlice
     * const quizSlice = await prisma.quizSlice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSliceUpdateArgs>(args: SelectSubset<T, QuizSliceUpdateArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSlices.
     * @param {QuizSliceDeleteManyArgs} args - Arguments to filter QuizSlices to delete.
     * @example
     * // Delete a few QuizSlices
     * const { count } = await prisma.quizSlice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSliceDeleteManyArgs>(args?: SelectSubset<T, QuizSliceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSlices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSlices
     * const quizSlice = await prisma.quizSlice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSliceUpdateManyArgs>(args: SelectSubset<T, QuizSliceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSlices and returns the data updated in the database.
     * @param {QuizSliceUpdateManyAndReturnArgs} args - Arguments to update many QuizSlices.
     * @example
     * // Update many QuizSlices
     * const quizSlice = await prisma.quizSlice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSlices and only return the `id`
     * const quizSliceWithIdOnly = await prisma.quizSlice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizSliceUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSliceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSlice.
     * @param {QuizSliceUpsertArgs} args - Arguments to update or create a QuizSlice.
     * @example
     * // Update or create a QuizSlice
     * const quizSlice = await prisma.quizSlice.upsert({
     *   create: {
     *     // ... data to create a QuizSlice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSlice we want to update
     *   }
     * })
     */
    upsert<T extends QuizSliceUpsertArgs>(args: SelectSubset<T, QuizSliceUpsertArgs<ExtArgs>>): Prisma__QuizSliceClient<$Result.GetResult<Prisma.$QuizSlicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSlices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceCountArgs} args - Arguments to filter QuizSlices to count.
     * @example
     * // Count the number of QuizSlices
     * const count = await prisma.quizSlice.count({
     *   where: {
     *     // ... the filter for the QuizSlices we want to count
     *   }
     * })
    **/
    count<T extends QuizSliceCountArgs>(
      args?: Subset<T, QuizSliceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSliceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSlice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizSliceAggregateArgs>(args: Subset<T, QuizSliceAggregateArgs>): Prisma.PrismaPromise<GetQuizSliceAggregateType<T>>

    /**
     * Group by QuizSlice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSliceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizSliceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSliceGroupByArgs['orderBy'] }
        : { orderBy?: QuizSliceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizSliceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSliceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSlice model
   */
  readonly fields: QuizSliceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSlice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSliceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizSlice model
   */
  interface QuizSliceFieldRefs {
    readonly id: FieldRef<"QuizSlice", 'String'>
    readonly startTime: FieldRef<"QuizSlice", 'Int'>
    readonly youtubeUrl: FieldRef<"QuizSlice", 'String'>
    readonly quizId: FieldRef<"QuizSlice", 'String'>
    readonly artistId: FieldRef<"QuizSlice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizSlice findUnique
   */
  export type QuizSliceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * Filter, which QuizSlice to fetch.
     */
    where: QuizSliceWhereUniqueInput
  }

  /**
   * QuizSlice findUniqueOrThrow
   */
  export type QuizSliceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * Filter, which QuizSlice to fetch.
     */
    where: QuizSliceWhereUniqueInput
  }

  /**
   * QuizSlice findFirst
   */
  export type QuizSliceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * Filter, which QuizSlice to fetch.
     */
    where?: QuizSliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSlices to fetch.
     */
    orderBy?: QuizSliceOrderByWithRelationInput | QuizSliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSlices.
     */
    cursor?: QuizSliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSlices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSlices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSlices.
     */
    distinct?: QuizSliceScalarFieldEnum | QuizSliceScalarFieldEnum[]
  }

  /**
   * QuizSlice findFirstOrThrow
   */
  export type QuizSliceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * Filter, which QuizSlice to fetch.
     */
    where?: QuizSliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSlices to fetch.
     */
    orderBy?: QuizSliceOrderByWithRelationInput | QuizSliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSlices.
     */
    cursor?: QuizSliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSlices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSlices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSlices.
     */
    distinct?: QuizSliceScalarFieldEnum | QuizSliceScalarFieldEnum[]
  }

  /**
   * QuizSlice findMany
   */
  export type QuizSliceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * Filter, which QuizSlices to fetch.
     */
    where?: QuizSliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSlices to fetch.
     */
    orderBy?: QuizSliceOrderByWithRelationInput | QuizSliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSlices.
     */
    cursor?: QuizSliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSlices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSlices.
     */
    skip?: number
    distinct?: QuizSliceScalarFieldEnum | QuizSliceScalarFieldEnum[]
  }

  /**
   * QuizSlice create
   */
  export type QuizSliceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSlice.
     */
    data: XOR<QuizSliceCreateInput, QuizSliceUncheckedCreateInput>
  }

  /**
   * QuizSlice createMany
   */
  export type QuizSliceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSlices.
     */
    data: QuizSliceCreateManyInput | QuizSliceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSlice createManyAndReturn
   */
  export type QuizSliceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSlices.
     */
    data: QuizSliceCreateManyInput | QuizSliceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSlice update
   */
  export type QuizSliceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSlice.
     */
    data: XOR<QuizSliceUpdateInput, QuizSliceUncheckedUpdateInput>
    /**
     * Choose, which QuizSlice to update.
     */
    where: QuizSliceWhereUniqueInput
  }

  /**
   * QuizSlice updateMany
   */
  export type QuizSliceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSlices.
     */
    data: XOR<QuizSliceUpdateManyMutationInput, QuizSliceUncheckedUpdateManyInput>
    /**
     * Filter which QuizSlices to update
     */
    where?: QuizSliceWhereInput
    /**
     * Limit how many QuizSlices to update.
     */
    limit?: number
  }

  /**
   * QuizSlice updateManyAndReturn
   */
  export type QuizSliceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * The data used to update QuizSlices.
     */
    data: XOR<QuizSliceUpdateManyMutationInput, QuizSliceUncheckedUpdateManyInput>
    /**
     * Filter which QuizSlices to update
     */
    where?: QuizSliceWhereInput
    /**
     * Limit how many QuizSlices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSlice upsert
   */
  export type QuizSliceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSlice to update in case it exists.
     */
    where: QuizSliceWhereUniqueInput
    /**
     * In case the QuizSlice found by the `where` argument doesn't exist, create a new QuizSlice with this data.
     */
    create: XOR<QuizSliceCreateInput, QuizSliceUncheckedCreateInput>
    /**
     * In case the QuizSlice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSliceUpdateInput, QuizSliceUncheckedUpdateInput>
  }

  /**
   * QuizSlice delete
   */
  export type QuizSliceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
    /**
     * Filter which QuizSlice to delete.
     */
    where: QuizSliceWhereUniqueInput
  }

  /**
   * QuizSlice deleteMany
   */
  export type QuizSliceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSlices to delete
     */
    where?: QuizSliceWhereInput
    /**
     * Limit how many QuizSlices to delete.
     */
    limit?: number
  }

  /**
   * QuizSlice without action
   */
  export type QuizSliceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSlice
     */
    select?: QuizSliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSlice
     */
    omit?: QuizSliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSliceInclude<ExtArgs> | null
  }


  /**
   * Model QuizLike
   */

  export type AggregateQuizLike = {
    _count: QuizLikeCountAggregateOutputType | null
    _min: QuizLikeMinAggregateOutputType | null
    _max: QuizLikeMaxAggregateOutputType | null
  }

  export type QuizLikeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    quizId: string | null
  }

  export type QuizLikeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    quizId: string | null
  }

  export type QuizLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    quizId: number
    _all: number
  }


  export type QuizLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    quizId?: true
  }

  export type QuizLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    quizId?: true
  }

  export type QuizLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    quizId?: true
    _all?: true
  }

  export type QuizLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizLike to aggregate.
     */
    where?: QuizLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLikes to fetch.
     */
    orderBy?: QuizLikeOrderByWithRelationInput | QuizLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizLikes
    **/
    _count?: true | QuizLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizLikeMaxAggregateInputType
  }

  export type GetQuizLikeAggregateType<T extends QuizLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizLike[P]>
      : GetScalarType<T[P], AggregateQuizLike[P]>
  }




  export type QuizLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizLikeWhereInput
    orderBy?: QuizLikeOrderByWithAggregationInput | QuizLikeOrderByWithAggregationInput[]
    by: QuizLikeScalarFieldEnum[] | QuizLikeScalarFieldEnum
    having?: QuizLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizLikeCountAggregateInputType | true
    _min?: QuizLikeMinAggregateInputType
    _max?: QuizLikeMaxAggregateInputType
  }

  export type QuizLikeGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    quizId: string
    _count: QuizLikeCountAggregateOutputType | null
    _min: QuizLikeMinAggregateOutputType | null
    _max: QuizLikeMaxAggregateOutputType | null
  }

  type GetQuizLikeGroupByPayload<T extends QuizLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizLikeGroupByOutputType[P]>
            : GetScalarType<T[P], QuizLikeGroupByOutputType[P]>
        }
      >
    >


  export type QuizLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    quizId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizLike"]>

  export type QuizLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    quizId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizLike"]>

  export type QuizLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    quizId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizLike"]>

  export type QuizLikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    quizId?: boolean
  }

  export type QuizLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "quizId", ExtArgs["result"]["quizLike"]>
  export type QuizLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      quizId: string
    }, ExtArgs["result"]["quizLike"]>
    composites: {}
  }

  type QuizLikeGetPayload<S extends boolean | null | undefined | QuizLikeDefaultArgs> = $Result.GetResult<Prisma.$QuizLikePayload, S>

  type QuizLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizLikeCountAggregateInputType | true
    }

  export interface QuizLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizLike'], meta: { name: 'QuizLike' } }
    /**
     * Find zero or one QuizLike that matches the filter.
     * @param {QuizLikeFindUniqueArgs} args - Arguments to find a QuizLike
     * @example
     * // Get one QuizLike
     * const quizLike = await prisma.quizLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizLikeFindUniqueArgs>(args: SelectSubset<T, QuizLikeFindUniqueArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizLikeFindUniqueOrThrowArgs} args - Arguments to find a QuizLike
     * @example
     * // Get one QuizLike
     * const quizLike = await prisma.quizLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeFindFirstArgs} args - Arguments to find a QuizLike
     * @example
     * // Get one QuizLike
     * const quizLike = await prisma.quizLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizLikeFindFirstArgs>(args?: SelectSubset<T, QuizLikeFindFirstArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeFindFirstOrThrowArgs} args - Arguments to find a QuizLike
     * @example
     * // Get one QuizLike
     * const quizLike = await prisma.quizLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizLikes
     * const quizLikes = await prisma.quizLike.findMany()
     * 
     * // Get first 10 QuizLikes
     * const quizLikes = await prisma.quizLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizLikeWithIdOnly = await prisma.quizLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizLikeFindManyArgs>(args?: SelectSubset<T, QuizLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizLike.
     * @param {QuizLikeCreateArgs} args - Arguments to create a QuizLike.
     * @example
     * // Create one QuizLike
     * const QuizLike = await prisma.quizLike.create({
     *   data: {
     *     // ... data to create a QuizLike
     *   }
     * })
     * 
     */
    create<T extends QuizLikeCreateArgs>(args: SelectSubset<T, QuizLikeCreateArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizLikes.
     * @param {QuizLikeCreateManyArgs} args - Arguments to create many QuizLikes.
     * @example
     * // Create many QuizLikes
     * const quizLike = await prisma.quizLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizLikeCreateManyArgs>(args?: SelectSubset<T, QuizLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizLikes and returns the data saved in the database.
     * @param {QuizLikeCreateManyAndReturnArgs} args - Arguments to create many QuizLikes.
     * @example
     * // Create many QuizLikes
     * const quizLike = await prisma.quizLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizLikes and only return the `id`
     * const quizLikeWithIdOnly = await prisma.quizLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizLike.
     * @param {QuizLikeDeleteArgs} args - Arguments to delete one QuizLike.
     * @example
     * // Delete one QuizLike
     * const QuizLike = await prisma.quizLike.delete({
     *   where: {
     *     // ... filter to delete one QuizLike
     *   }
     * })
     * 
     */
    delete<T extends QuizLikeDeleteArgs>(args: SelectSubset<T, QuizLikeDeleteArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizLike.
     * @param {QuizLikeUpdateArgs} args - Arguments to update one QuizLike.
     * @example
     * // Update one QuizLike
     * const quizLike = await prisma.quizLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizLikeUpdateArgs>(args: SelectSubset<T, QuizLikeUpdateArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizLikes.
     * @param {QuizLikeDeleteManyArgs} args - Arguments to filter QuizLikes to delete.
     * @example
     * // Delete a few QuizLikes
     * const { count } = await prisma.quizLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizLikeDeleteManyArgs>(args?: SelectSubset<T, QuizLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizLikes
     * const quizLike = await prisma.quizLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizLikeUpdateManyArgs>(args: SelectSubset<T, QuizLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizLikes and returns the data updated in the database.
     * @param {QuizLikeUpdateManyAndReturnArgs} args - Arguments to update many QuizLikes.
     * @example
     * // Update many QuizLikes
     * const quizLike = await prisma.quizLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizLikes and only return the `id`
     * const quizLikeWithIdOnly = await prisma.quizLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizLike.
     * @param {QuizLikeUpsertArgs} args - Arguments to update or create a QuizLike.
     * @example
     * // Update or create a QuizLike
     * const quizLike = await prisma.quizLike.upsert({
     *   create: {
     *     // ... data to create a QuizLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizLike we want to update
     *   }
     * })
     */
    upsert<T extends QuizLikeUpsertArgs>(args: SelectSubset<T, QuizLikeUpsertArgs<ExtArgs>>): Prisma__QuizLikeClient<$Result.GetResult<Prisma.$QuizLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeCountArgs} args - Arguments to filter QuizLikes to count.
     * @example
     * // Count the number of QuizLikes
     * const count = await prisma.quizLike.count({
     *   where: {
     *     // ... the filter for the QuizLikes we want to count
     *   }
     * })
    **/
    count<T extends QuizLikeCountArgs>(
      args?: Subset<T, QuizLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizLikeAggregateArgs>(args: Subset<T, QuizLikeAggregateArgs>): Prisma.PrismaPromise<GetQuizLikeAggregateType<T>>

    /**
     * Group by QuizLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizLikeGroupByArgs['orderBy'] }
        : { orderBy?: QuizLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizLike model
   */
  readonly fields: QuizLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizLike model
   */
  interface QuizLikeFieldRefs {
    readonly id: FieldRef<"QuizLike", 'String'>
    readonly createdAt: FieldRef<"QuizLike", 'DateTime'>
    readonly userId: FieldRef<"QuizLike", 'String'>
    readonly quizId: FieldRef<"QuizLike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizLike findUnique
   */
  export type QuizLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuizLike to fetch.
     */
    where: QuizLikeWhereUniqueInput
  }

  /**
   * QuizLike findUniqueOrThrow
   */
  export type QuizLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuizLike to fetch.
     */
    where: QuizLikeWhereUniqueInput
  }

  /**
   * QuizLike findFirst
   */
  export type QuizLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuizLike to fetch.
     */
    where?: QuizLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLikes to fetch.
     */
    orderBy?: QuizLikeOrderByWithRelationInput | QuizLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizLikes.
     */
    cursor?: QuizLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizLikes.
     */
    distinct?: QuizLikeScalarFieldEnum | QuizLikeScalarFieldEnum[]
  }

  /**
   * QuizLike findFirstOrThrow
   */
  export type QuizLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuizLike to fetch.
     */
    where?: QuizLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLikes to fetch.
     */
    orderBy?: QuizLikeOrderByWithRelationInput | QuizLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizLikes.
     */
    cursor?: QuizLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizLikes.
     */
    distinct?: QuizLikeScalarFieldEnum | QuizLikeScalarFieldEnum[]
  }

  /**
   * QuizLike findMany
   */
  export type QuizLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * Filter, which QuizLikes to fetch.
     */
    where?: QuizLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizLikes to fetch.
     */
    orderBy?: QuizLikeOrderByWithRelationInput | QuizLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizLikes.
     */
    cursor?: QuizLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizLikes.
     */
    skip?: number
    distinct?: QuizLikeScalarFieldEnum | QuizLikeScalarFieldEnum[]
  }

  /**
   * QuizLike create
   */
  export type QuizLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizLike.
     */
    data: XOR<QuizLikeCreateInput, QuizLikeUncheckedCreateInput>
  }

  /**
   * QuizLike createMany
   */
  export type QuizLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizLikes.
     */
    data: QuizLikeCreateManyInput | QuizLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizLike createManyAndReturn
   */
  export type QuizLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * The data used to create many QuizLikes.
     */
    data: QuizLikeCreateManyInput | QuizLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizLike update
   */
  export type QuizLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizLike.
     */
    data: XOR<QuizLikeUpdateInput, QuizLikeUncheckedUpdateInput>
    /**
     * Choose, which QuizLike to update.
     */
    where: QuizLikeWhereUniqueInput
  }

  /**
   * QuizLike updateMany
   */
  export type QuizLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizLikes.
     */
    data: XOR<QuizLikeUpdateManyMutationInput, QuizLikeUncheckedUpdateManyInput>
    /**
     * Filter which QuizLikes to update
     */
    where?: QuizLikeWhereInput
    /**
     * Limit how many QuizLikes to update.
     */
    limit?: number
  }

  /**
   * QuizLike updateManyAndReturn
   */
  export type QuizLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * The data used to update QuizLikes.
     */
    data: XOR<QuizLikeUpdateManyMutationInput, QuizLikeUncheckedUpdateManyInput>
    /**
     * Filter which QuizLikes to update
     */
    where?: QuizLikeWhereInput
    /**
     * Limit how many QuizLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizLike upsert
   */
  export type QuizLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizLike to update in case it exists.
     */
    where: QuizLikeWhereUniqueInput
    /**
     * In case the QuizLike found by the `where` argument doesn't exist, create a new QuizLike with this data.
     */
    create: XOR<QuizLikeCreateInput, QuizLikeUncheckedCreateInput>
    /**
     * In case the QuizLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizLikeUpdateInput, QuizLikeUncheckedUpdateInput>
  }

  /**
   * QuizLike delete
   */
  export type QuizLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
    /**
     * Filter which QuizLike to delete.
     */
    where: QuizLikeWhereUniqueInput
  }

  /**
   * QuizLike deleteMany
   */
  export type QuizLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizLikes to delete
     */
    where?: QuizLikeWhereInput
    /**
     * Limit how many QuizLikes to delete.
     */
    limit?: number
  }

  /**
   * QuizLike without action
   */
  export type QuizLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizLike
     */
    select?: QuizLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizLike
     */
    omit?: QuizLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizLikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hidden: boolean | null
    userId: string | null
    quizId: string | null
    parentId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hidden: boolean | null
    userId: string | null
    quizId: string | null
    parentId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    hidden: number
    userId: number
    quizId: number
    parentId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    hidden?: true
    userId?: true
    quizId?: true
    parentId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    hidden?: true
    userId?: true
    quizId?: true
    parentId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    hidden?: true
    userId?: true
    quizId?: true
    parentId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    hidden: boolean
    userId: string
    quizId: string
    parentId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hidden?: boolean
    userId?: boolean
    quizId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hidden?: boolean
    userId?: boolean
    quizId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hidden?: boolean
    userId?: boolean
    quizId?: boolean
    parentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hidden?: boolean
    userId?: boolean
    quizId?: boolean
    parentId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "hidden" | "userId" | "quizId" | "parentId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      hidden: boolean
      userId: string
      quizId: string
      parentId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly hidden: FieldRef<"Comment", 'Boolean'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly quizId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ComposerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photoUrl: 'photoUrl'
  };

  export type ComposerScalarFieldEnum = (typeof ComposerScalarFieldEnum)[keyof typeof ComposerScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photoUrl: 'photoUrl'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const InstrumentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InstrumentScalarFieldEnum = (typeof InstrumentScalarFieldEnum)[keyof typeof InstrumentScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    pieceName: 'pieceName',
    duration: 'duration',
    likes: 'likes',
    createdAt: 'createdAt',
    composerId: 'composerId',
    instrumentId: 'instrumentId',
    createdById: 'createdById'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizSliceScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    youtubeUrl: 'youtubeUrl',
    quizId: 'quizId',
    artistId: 'artistId'
  };

  export type QuizSliceScalarFieldEnum = (typeof QuizSliceScalarFieldEnum)[keyof typeof QuizSliceScalarFieldEnum]


  export const QuizLikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    quizId: 'quizId'
  };

  export type QuizLikeScalarFieldEnum = (typeof QuizLikeScalarFieldEnum)[keyof typeof QuizLikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hidden: 'hidden',
    userId: 'userId',
    quizId: 'quizId',
    parentId: 'parentId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    quizzes?: QuizListRelationFilter
    likedQuizzes?: QuizLikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
    likedQuizzes?: QuizLikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    quizzes?: QuizListRelationFilter
    likedQuizzes?: QuizLikeListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ComposerWhereInput = {
    AND?: ComposerWhereInput | ComposerWhereInput[]
    OR?: ComposerWhereInput[]
    NOT?: ComposerWhereInput | ComposerWhereInput[]
    id?: StringFilter<"Composer"> | string
    name?: StringFilter<"Composer"> | string
    photoUrl?: StringNullableFilter<"Composer"> | string | null
    quizzes?: QuizListRelationFilter
  }

  export type ComposerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type ComposerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComposerWhereInput | ComposerWhereInput[]
    OR?: ComposerWhereInput[]
    NOT?: ComposerWhereInput | ComposerWhereInput[]
    name?: StringFilter<"Composer"> | string
    photoUrl?: StringNullableFilter<"Composer"> | string | null
    quizzes?: QuizListRelationFilter
  }, "id">

  export type ComposerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: ComposerCountOrderByAggregateInput
    _max?: ComposerMaxOrderByAggregateInput
    _min?: ComposerMinOrderByAggregateInput
  }

  export type ComposerScalarWhereWithAggregatesInput = {
    AND?: ComposerScalarWhereWithAggregatesInput | ComposerScalarWhereWithAggregatesInput[]
    OR?: ComposerScalarWhereWithAggregatesInput[]
    NOT?: ComposerScalarWhereWithAggregatesInput | ComposerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Composer"> | string
    name?: StringWithAggregatesFilter<"Composer"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"Composer"> | string | null
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    photoUrl?: StringNullableFilter<"Artist"> | string | null
    quizSlices?: QuizSliceListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    quizSlices?: QuizSliceOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    photoUrl?: StringNullableFilter<"Artist"> | string | null
    quizSlices?: QuizSliceListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type InstrumentWhereInput = {
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    id?: StringFilter<"Instrument"> | string
    name?: StringFilter<"Instrument"> | string
    quizzes?: QuizListRelationFilter
  }

  export type InstrumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type InstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstrumentWhereInput | InstrumentWhereInput[]
    OR?: InstrumentWhereInput[]
    NOT?: InstrumentWhereInput | InstrumentWhereInput[]
    name?: StringFilter<"Instrument"> | string
    quizzes?: QuizListRelationFilter
  }, "id">

  export type InstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InstrumentCountOrderByAggregateInput
    _max?: InstrumentMaxOrderByAggregateInput
    _min?: InstrumentMinOrderByAggregateInput
  }

  export type InstrumentScalarWhereWithAggregatesInput = {
    AND?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    OR?: InstrumentScalarWhereWithAggregatesInput[]
    NOT?: InstrumentScalarWhereWithAggregatesInput | InstrumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instrument"> | string
    name?: StringWithAggregatesFilter<"Instrument"> | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    pieceName?: StringFilter<"Quiz"> | string
    duration?: IntFilter<"Quiz"> | number
    likes?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    composerId?: StringFilter<"Quiz"> | string
    instrumentId?: StringFilter<"Quiz"> | string
    createdById?: StringFilter<"Quiz"> | string
    composer?: XOR<ComposerScalarRelationFilter, ComposerWhereInput>
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    slices?: QuizSliceListRelationFilter
    likedBy?: QuizLikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    pieceName?: SortOrder
    duration?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    composerId?: SortOrder
    instrumentId?: SortOrder
    createdById?: SortOrder
    composer?: ComposerOrderByWithRelationInput
    instrument?: InstrumentOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    slices?: QuizSliceOrderByRelationAggregateInput
    likedBy?: QuizLikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    pieceName?: StringFilter<"Quiz"> | string
    duration?: IntFilter<"Quiz"> | number
    likes?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    composerId?: StringFilter<"Quiz"> | string
    instrumentId?: StringFilter<"Quiz"> | string
    createdById?: StringFilter<"Quiz"> | string
    composer?: XOR<ComposerScalarRelationFilter, ComposerWhereInput>
    instrument?: XOR<InstrumentScalarRelationFilter, InstrumentWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    slices?: QuizSliceListRelationFilter
    likedBy?: QuizLikeListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    pieceName?: SortOrder
    duration?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    composerId?: SortOrder
    instrumentId?: SortOrder
    createdById?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    pieceName?: StringWithAggregatesFilter<"Quiz"> | string
    duration?: IntWithAggregatesFilter<"Quiz"> | number
    likes?: IntWithAggregatesFilter<"Quiz"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    composerId?: StringWithAggregatesFilter<"Quiz"> | string
    instrumentId?: StringWithAggregatesFilter<"Quiz"> | string
    createdById?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type QuizSliceWhereInput = {
    AND?: QuizSliceWhereInput | QuizSliceWhereInput[]
    OR?: QuizSliceWhereInput[]
    NOT?: QuizSliceWhereInput | QuizSliceWhereInput[]
    id?: StringFilter<"QuizSlice"> | string
    startTime?: IntFilter<"QuizSlice"> | number
    youtubeUrl?: StringFilter<"QuizSlice"> | string
    quizId?: StringFilter<"QuizSlice"> | string
    artistId?: StringFilter<"QuizSlice"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }

  export type QuizSliceOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    youtubeUrl?: SortOrder
    quizId?: SortOrder
    artistId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type QuizSliceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizSliceWhereInput | QuizSliceWhereInput[]
    OR?: QuizSliceWhereInput[]
    NOT?: QuizSliceWhereInput | QuizSliceWhereInput[]
    startTime?: IntFilter<"QuizSlice"> | number
    youtubeUrl?: StringFilter<"QuizSlice"> | string
    quizId?: StringFilter<"QuizSlice"> | string
    artistId?: StringFilter<"QuizSlice"> | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }, "id">

  export type QuizSliceOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    youtubeUrl?: SortOrder
    quizId?: SortOrder
    artistId?: SortOrder
    _count?: QuizSliceCountOrderByAggregateInput
    _avg?: QuizSliceAvgOrderByAggregateInput
    _max?: QuizSliceMaxOrderByAggregateInput
    _min?: QuizSliceMinOrderByAggregateInput
    _sum?: QuizSliceSumOrderByAggregateInput
  }

  export type QuizSliceScalarWhereWithAggregatesInput = {
    AND?: QuizSliceScalarWhereWithAggregatesInput | QuizSliceScalarWhereWithAggregatesInput[]
    OR?: QuizSliceScalarWhereWithAggregatesInput[]
    NOT?: QuizSliceScalarWhereWithAggregatesInput | QuizSliceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizSlice"> | string
    startTime?: IntWithAggregatesFilter<"QuizSlice"> | number
    youtubeUrl?: StringWithAggregatesFilter<"QuizSlice"> | string
    quizId?: StringWithAggregatesFilter<"QuizSlice"> | string
    artistId?: StringWithAggregatesFilter<"QuizSlice"> | string
  }

  export type QuizLikeWhereInput = {
    AND?: QuizLikeWhereInput | QuizLikeWhereInput[]
    OR?: QuizLikeWhereInput[]
    NOT?: QuizLikeWhereInput | QuizLikeWhereInput[]
    id?: StringFilter<"QuizLike"> | string
    createdAt?: DateTimeFilter<"QuizLike"> | Date | string
    userId?: StringFilter<"QuizLike"> | string
    quizId?: StringFilter<"QuizLike"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuizLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_quizId?: QuizLikeUserIdQuizIdCompoundUniqueInput
    AND?: QuizLikeWhereInput | QuizLikeWhereInput[]
    OR?: QuizLikeWhereInput[]
    NOT?: QuizLikeWhereInput | QuizLikeWhereInput[]
    createdAt?: DateTimeFilter<"QuizLike"> | Date | string
    userId?: StringFilter<"QuizLike"> | string
    quizId?: StringFilter<"QuizLike"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "userId_quizId">

  export type QuizLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    _count?: QuizLikeCountOrderByAggregateInput
    _max?: QuizLikeMaxOrderByAggregateInput
    _min?: QuizLikeMinOrderByAggregateInput
  }

  export type QuizLikeScalarWhereWithAggregatesInput = {
    AND?: QuizLikeScalarWhereWithAggregatesInput | QuizLikeScalarWhereWithAggregatesInput[]
    OR?: QuizLikeScalarWhereWithAggregatesInput[]
    NOT?: QuizLikeScalarWhereWithAggregatesInput | QuizLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuizLike"> | Date | string
    userId?: StringWithAggregatesFilter<"QuizLike"> | string
    quizId?: StringWithAggregatesFilter<"QuizLike"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    hidden?: BoolFilter<"Comment"> | boolean
    userId?: StringFilter<"Comment"> | string
    quizId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hidden?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    hidden?: BoolFilter<"Comment"> | boolean
    userId?: StringFilter<"Comment"> | string
    quizId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hidden?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    hidden?: BoolWithAggregatesFilter<"Comment"> | boolean
    userId?: StringWithAggregatesFilter<"Comment"> | string
    quizId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizzes?: QuizCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComposerCreateInput = {
    id?: string
    name: string
    photoUrl?: string | null
    quizzes?: QuizCreateNestedManyWithoutComposerInput
  }

  export type ComposerUncheckedCreateInput = {
    id?: string
    name: string
    photoUrl?: string | null
    quizzes?: QuizUncheckedCreateNestedManyWithoutComposerInput
  }

  export type ComposerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quizzes?: QuizUpdateManyWithoutComposerNestedInput
  }

  export type ComposerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quizzes?: QuizUncheckedUpdateManyWithoutComposerNestedInput
  }

  export type ComposerCreateManyInput = {
    id?: string
    name: string
    photoUrl?: string | null
  }

  export type ComposerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComposerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    photoUrl?: string | null
    quizSlices?: QuizSliceCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    photoUrl?: string | null
    quizSlices?: QuizSliceUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quizSlices?: QuizSliceUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quizSlices?: QuizSliceUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    photoUrl?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstrumentCreateInput = {
    id?: string
    name: string
    quizzes?: QuizCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUncheckedCreateInput = {
    id?: string
    name: string
    quizzes?: QuizUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type InstrumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type InstrumentCreateManyInput = {
    id?: string
    name: string
  }

  export type InstrumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composer: ComposerCreateNestedOneWithoutQuizzesInput
    instrument: InstrumentCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutQuizzesInput
    slices?: QuizSliceCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeCreateNestedManyWithoutQuizInput
    comments?: CommentCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
    createdById: string
    slices?: QuizSliceUncheckedCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeUncheckedCreateNestedManyWithoutQuizInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composer?: ComposerUpdateOneRequiredWithoutQuizzesNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    slices?: QuizSliceUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUpdateManyWithoutQuizNestedInput
    comments?: CommentUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    slices?: QuizSliceUncheckedUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUncheckedUpdateManyWithoutQuizNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
    createdById: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceCreateInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    quiz: QuizCreateNestedOneWithoutSlicesInput
    artist: ArtistCreateNestedOneWithoutQuizSlicesInput
  }

  export type QuizSliceUncheckedCreateInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    quizId: string
    artistId: string
  }

  export type QuizSliceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutSlicesNestedInput
    artist?: ArtistUpdateOneRequiredWithoutQuizSlicesNestedInput
  }

  export type QuizSliceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceCreateManyInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    quizId: string
    artistId: string
  }

  export type QuizSliceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedQuizzesInput
    quiz: QuizCreateNestedOneWithoutLikedByInput
  }

  export type QuizLikeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    quizId: string
  }

  export type QuizLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedQuizzesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type QuizLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLikeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    quizId: string
  }

  export type QuizLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    user: UserCreateNestedOneWithoutCommentsInput
    quiz: QuizCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    quizId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    quizId: string
    parentId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizLikeListRelationFilter = {
    every?: QuizLikeWhereInput
    some?: QuizLikeWhereInput
    none?: QuizLikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type ComposerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
  }

  export type ComposerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
  }

  export type ComposerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
  }

  export type QuizSliceListRelationFilter = {
    every?: QuizSliceWhereInput
    some?: QuizSliceWhereInput
    none?: QuizSliceWhereInput
  }

  export type QuizSliceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
  }

  export type InstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ComposerScalarRelationFilter = {
    is?: ComposerWhereInput
    isNot?: ComposerWhereInput
  }

  export type InstrumentScalarRelationFilter = {
    is?: InstrumentWhereInput
    isNot?: InstrumentWhereInput
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    pieceName?: SortOrder
    duration?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    composerId?: SortOrder
    instrumentId?: SortOrder
    createdById?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    duration?: SortOrder
    likes?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    pieceName?: SortOrder
    duration?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    composerId?: SortOrder
    instrumentId?: SortOrder
    createdById?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    pieceName?: SortOrder
    duration?: SortOrder
    likes?: SortOrder
    createdAt?: SortOrder
    composerId?: SortOrder
    instrumentId?: SortOrder
    createdById?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    duration?: SortOrder
    likes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type QuizSliceCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    youtubeUrl?: SortOrder
    quizId?: SortOrder
    artistId?: SortOrder
  }

  export type QuizSliceAvgOrderByAggregateInput = {
    startTime?: SortOrder
  }

  export type QuizSliceMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    youtubeUrl?: SortOrder
    quizId?: SortOrder
    artistId?: SortOrder
  }

  export type QuizSliceMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    youtubeUrl?: SortOrder
    quizId?: SortOrder
    artistId?: SortOrder
  }

  export type QuizSliceSumOrderByAggregateInput = {
    startTime?: SortOrder
  }

  export type QuizLikeUserIdQuizIdCompoundUniqueInput = {
    userId: string
    quizId: string
  }

  export type QuizLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
  }

  export type QuizLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
  }

  export type QuizLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hidden?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hidden?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hidden?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    parentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizLikeCreateWithoutUserInput, QuizLikeUncheckedCreateWithoutUserInput> | QuizLikeCreateWithoutUserInput[] | QuizLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutUserInput | QuizLikeCreateOrConnectWithoutUserInput[]
    createMany?: QuizLikeCreateManyUserInputEnvelope
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizLikeCreateWithoutUserInput, QuizLikeUncheckedCreateWithoutUserInput> | QuizLikeCreateWithoutUserInput[] | QuizLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutUserInput | QuizLikeCreateOrConnectWithoutUserInput[]
    createMany?: QuizLikeCreateManyUserInputEnvelope
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCreatedByInput | QuizUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCreatedByInput | QuizUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCreatedByInput | QuizUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizLikeCreateWithoutUserInput, QuizLikeUncheckedCreateWithoutUserInput> | QuizLikeCreateWithoutUserInput[] | QuizLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutUserInput | QuizLikeCreateOrConnectWithoutUserInput[]
    upsert?: QuizLikeUpsertWithWhereUniqueWithoutUserInput | QuizLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizLikeCreateManyUserInputEnvelope
    set?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    disconnect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    delete?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    update?: QuizLikeUpdateWithWhereUniqueWithoutUserInput | QuizLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizLikeUpdateManyWithWhereWithoutUserInput | QuizLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizLikeScalarWhereInput | QuizLikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput> | QuizCreateWithoutCreatedByInput[] | QuizUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCreatedByInput | QuizCreateOrConnectWithoutCreatedByInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCreatedByInput | QuizUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: QuizCreateManyCreatedByInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCreatedByInput | QuizUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCreatedByInput | QuizUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizLikeCreateWithoutUserInput, QuizLikeUncheckedCreateWithoutUserInput> | QuizLikeCreateWithoutUserInput[] | QuizLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutUserInput | QuizLikeCreateOrConnectWithoutUserInput[]
    upsert?: QuizLikeUpsertWithWhereUniqueWithoutUserInput | QuizLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizLikeCreateManyUserInputEnvelope
    set?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    disconnect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    delete?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    update?: QuizLikeUpdateWithWhereUniqueWithoutUserInput | QuizLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizLikeUpdateManyWithWhereWithoutUserInput | QuizLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizLikeScalarWhereInput | QuizLikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type QuizCreateNestedManyWithoutComposerInput = {
    create?: XOR<QuizCreateWithoutComposerInput, QuizUncheckedCreateWithoutComposerInput> | QuizCreateWithoutComposerInput[] | QuizUncheckedCreateWithoutComposerInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutComposerInput | QuizCreateOrConnectWithoutComposerInput[]
    createMany?: QuizCreateManyComposerInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutComposerInput = {
    create?: XOR<QuizCreateWithoutComposerInput, QuizUncheckedCreateWithoutComposerInput> | QuizCreateWithoutComposerInput[] | QuizUncheckedCreateWithoutComposerInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutComposerInput | QuizCreateOrConnectWithoutComposerInput[]
    createMany?: QuizCreateManyComposerInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUpdateManyWithoutComposerNestedInput = {
    create?: XOR<QuizCreateWithoutComposerInput, QuizUncheckedCreateWithoutComposerInput> | QuizCreateWithoutComposerInput[] | QuizUncheckedCreateWithoutComposerInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutComposerInput | QuizCreateOrConnectWithoutComposerInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutComposerInput | QuizUpsertWithWhereUniqueWithoutComposerInput[]
    createMany?: QuizCreateManyComposerInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutComposerInput | QuizUpdateWithWhereUniqueWithoutComposerInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutComposerInput | QuizUpdateManyWithWhereWithoutComposerInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutComposerNestedInput = {
    create?: XOR<QuizCreateWithoutComposerInput, QuizUncheckedCreateWithoutComposerInput> | QuizCreateWithoutComposerInput[] | QuizUncheckedCreateWithoutComposerInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutComposerInput | QuizCreateOrConnectWithoutComposerInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutComposerInput | QuizUpsertWithWhereUniqueWithoutComposerInput[]
    createMany?: QuizCreateManyComposerInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutComposerInput | QuizUpdateWithWhereUniqueWithoutComposerInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutComposerInput | QuizUpdateManyWithWhereWithoutComposerInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizSliceCreateNestedManyWithoutArtistInput = {
    create?: XOR<QuizSliceCreateWithoutArtistInput, QuizSliceUncheckedCreateWithoutArtistInput> | QuizSliceCreateWithoutArtistInput[] | QuizSliceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutArtistInput | QuizSliceCreateOrConnectWithoutArtistInput[]
    createMany?: QuizSliceCreateManyArtistInputEnvelope
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
  }

  export type QuizSliceUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<QuizSliceCreateWithoutArtistInput, QuizSliceUncheckedCreateWithoutArtistInput> | QuizSliceCreateWithoutArtistInput[] | QuizSliceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutArtistInput | QuizSliceCreateOrConnectWithoutArtistInput[]
    createMany?: QuizSliceCreateManyArtistInputEnvelope
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
  }

  export type QuizSliceUpdateManyWithoutArtistNestedInput = {
    create?: XOR<QuizSliceCreateWithoutArtistInput, QuizSliceUncheckedCreateWithoutArtistInput> | QuizSliceCreateWithoutArtistInput[] | QuizSliceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutArtistInput | QuizSliceCreateOrConnectWithoutArtistInput[]
    upsert?: QuizSliceUpsertWithWhereUniqueWithoutArtistInput | QuizSliceUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: QuizSliceCreateManyArtistInputEnvelope
    set?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    disconnect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    delete?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    update?: QuizSliceUpdateWithWhereUniqueWithoutArtistInput | QuizSliceUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: QuizSliceUpdateManyWithWhereWithoutArtistInput | QuizSliceUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: QuizSliceScalarWhereInput | QuizSliceScalarWhereInput[]
  }

  export type QuizSliceUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<QuizSliceCreateWithoutArtistInput, QuizSliceUncheckedCreateWithoutArtistInput> | QuizSliceCreateWithoutArtistInput[] | QuizSliceUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutArtistInput | QuizSliceCreateOrConnectWithoutArtistInput[]
    upsert?: QuizSliceUpsertWithWhereUniqueWithoutArtistInput | QuizSliceUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: QuizSliceCreateManyArtistInputEnvelope
    set?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    disconnect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    delete?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    update?: QuizSliceUpdateWithWhereUniqueWithoutArtistInput | QuizSliceUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: QuizSliceUpdateManyWithWhereWithoutArtistInput | QuizSliceUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: QuizSliceScalarWhereInput | QuizSliceScalarWhereInput[]
  }

  export type QuizCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<QuizCreateWithoutInstrumentInput, QuizUncheckedCreateWithoutInstrumentInput> | QuizCreateWithoutInstrumentInput[] | QuizUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutInstrumentInput | QuizCreateOrConnectWithoutInstrumentInput[]
    createMany?: QuizCreateManyInstrumentInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<QuizCreateWithoutInstrumentInput, QuizUncheckedCreateWithoutInstrumentInput> | QuizCreateWithoutInstrumentInput[] | QuizUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutInstrumentInput | QuizCreateOrConnectWithoutInstrumentInput[]
    createMany?: QuizCreateManyInstrumentInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuizUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<QuizCreateWithoutInstrumentInput, QuizUncheckedCreateWithoutInstrumentInput> | QuizCreateWithoutInstrumentInput[] | QuizUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutInstrumentInput | QuizCreateOrConnectWithoutInstrumentInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutInstrumentInput | QuizUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: QuizCreateManyInstrumentInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutInstrumentInput | QuizUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutInstrumentInput | QuizUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<QuizCreateWithoutInstrumentInput, QuizUncheckedCreateWithoutInstrumentInput> | QuizCreateWithoutInstrumentInput[] | QuizUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutInstrumentInput | QuizCreateOrConnectWithoutInstrumentInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutInstrumentInput | QuizUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: QuizCreateManyInstrumentInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutInstrumentInput | QuizUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutInstrumentInput | QuizUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ComposerCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<ComposerCreateWithoutQuizzesInput, ComposerUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ComposerCreateOrConnectWithoutQuizzesInput
    connect?: ComposerWhereUniqueInput
  }

  export type InstrumentCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<InstrumentCreateWithoutQuizzesInput, InstrumentUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutQuizzesInput
    connect?: InstrumentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuizSliceCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSliceCreateWithoutQuizInput, QuizSliceUncheckedCreateWithoutQuizInput> | QuizSliceCreateWithoutQuizInput[] | QuizSliceUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutQuizInput | QuizSliceCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSliceCreateManyQuizInputEnvelope
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
  }

  export type QuizLikeCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizLikeCreateWithoutQuizInput, QuizLikeUncheckedCreateWithoutQuizInput> | QuizLikeCreateWithoutQuizInput[] | QuizLikeUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutQuizInput | QuizLikeCreateOrConnectWithoutQuizInput[]
    createMany?: QuizLikeCreateManyQuizInputEnvelope
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutQuizInput = {
    create?: XOR<CommentCreateWithoutQuizInput, CommentUncheckedCreateWithoutQuizInput> | CommentCreateWithoutQuizInput[] | CommentUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuizInput | CommentCreateOrConnectWithoutQuizInput[]
    createMany?: CommentCreateManyQuizInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type QuizSliceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizSliceCreateWithoutQuizInput, QuizSliceUncheckedCreateWithoutQuizInput> | QuizSliceCreateWithoutQuizInput[] | QuizSliceUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutQuizInput | QuizSliceCreateOrConnectWithoutQuizInput[]
    createMany?: QuizSliceCreateManyQuizInputEnvelope
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
  }

  export type QuizLikeUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizLikeCreateWithoutQuizInput, QuizLikeUncheckedCreateWithoutQuizInput> | QuizLikeCreateWithoutQuizInput[] | QuizLikeUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutQuizInput | QuizLikeCreateOrConnectWithoutQuizInput[]
    createMany?: QuizLikeCreateManyQuizInputEnvelope
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<CommentCreateWithoutQuizInput, CommentUncheckedCreateWithoutQuizInput> | CommentCreateWithoutQuizInput[] | CommentUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuizInput | CommentCreateOrConnectWithoutQuizInput[]
    createMany?: CommentCreateManyQuizInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComposerUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<ComposerCreateWithoutQuizzesInput, ComposerUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ComposerCreateOrConnectWithoutQuizzesInput
    upsert?: ComposerUpsertWithoutQuizzesInput
    connect?: ComposerWhereUniqueInput
    update?: XOR<XOR<ComposerUpdateToOneWithWhereWithoutQuizzesInput, ComposerUpdateWithoutQuizzesInput>, ComposerUncheckedUpdateWithoutQuizzesInput>
  }

  export type InstrumentUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<InstrumentCreateWithoutQuizzesInput, InstrumentUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: InstrumentCreateOrConnectWithoutQuizzesInput
    upsert?: InstrumentUpsertWithoutQuizzesInput
    connect?: InstrumentWhereUniqueInput
    update?: XOR<XOR<InstrumentUpdateToOneWithWhereWithoutQuizzesInput, InstrumentUpdateWithoutQuizzesInput>, InstrumentUncheckedUpdateWithoutQuizzesInput>
  }

  export type UserUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizzesInput
    upsert?: UserUpsertWithoutQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizzesInput, UserUpdateWithoutQuizzesInput>, UserUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizSliceUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSliceCreateWithoutQuizInput, QuizSliceUncheckedCreateWithoutQuizInput> | QuizSliceCreateWithoutQuizInput[] | QuizSliceUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutQuizInput | QuizSliceCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSliceUpsertWithWhereUniqueWithoutQuizInput | QuizSliceUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSliceCreateManyQuizInputEnvelope
    set?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    disconnect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    delete?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    update?: QuizSliceUpdateWithWhereUniqueWithoutQuizInput | QuizSliceUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSliceUpdateManyWithWhereWithoutQuizInput | QuizSliceUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSliceScalarWhereInput | QuizSliceScalarWhereInput[]
  }

  export type QuizLikeUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizLikeCreateWithoutQuizInput, QuizLikeUncheckedCreateWithoutQuizInput> | QuizLikeCreateWithoutQuizInput[] | QuizLikeUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutQuizInput | QuizLikeCreateOrConnectWithoutQuizInput[]
    upsert?: QuizLikeUpsertWithWhereUniqueWithoutQuizInput | QuizLikeUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizLikeCreateManyQuizInputEnvelope
    set?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    disconnect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    delete?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    update?: QuizLikeUpdateWithWhereUniqueWithoutQuizInput | QuizLikeUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizLikeUpdateManyWithWhereWithoutQuizInput | QuizLikeUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizLikeScalarWhereInput | QuizLikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutQuizNestedInput = {
    create?: XOR<CommentCreateWithoutQuizInput, CommentUncheckedCreateWithoutQuizInput> | CommentCreateWithoutQuizInput[] | CommentUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuizInput | CommentCreateOrConnectWithoutQuizInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutQuizInput | CommentUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: CommentCreateManyQuizInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutQuizInput | CommentUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutQuizInput | CommentUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type QuizSliceUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizSliceCreateWithoutQuizInput, QuizSliceUncheckedCreateWithoutQuizInput> | QuizSliceCreateWithoutQuizInput[] | QuizSliceUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizSliceCreateOrConnectWithoutQuizInput | QuizSliceCreateOrConnectWithoutQuizInput[]
    upsert?: QuizSliceUpsertWithWhereUniqueWithoutQuizInput | QuizSliceUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizSliceCreateManyQuizInputEnvelope
    set?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    disconnect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    delete?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    connect?: QuizSliceWhereUniqueInput | QuizSliceWhereUniqueInput[]
    update?: QuizSliceUpdateWithWhereUniqueWithoutQuizInput | QuizSliceUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizSliceUpdateManyWithWhereWithoutQuizInput | QuizSliceUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizSliceScalarWhereInput | QuizSliceScalarWhereInput[]
  }

  export type QuizLikeUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizLikeCreateWithoutQuizInput, QuizLikeUncheckedCreateWithoutQuizInput> | QuizLikeCreateWithoutQuizInput[] | QuizLikeUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizLikeCreateOrConnectWithoutQuizInput | QuizLikeCreateOrConnectWithoutQuizInput[]
    upsert?: QuizLikeUpsertWithWhereUniqueWithoutQuizInput | QuizLikeUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizLikeCreateManyQuizInputEnvelope
    set?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    disconnect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    delete?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    connect?: QuizLikeWhereUniqueInput | QuizLikeWhereUniqueInput[]
    update?: QuizLikeUpdateWithWhereUniqueWithoutQuizInput | QuizLikeUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizLikeUpdateManyWithWhereWithoutQuizInput | QuizLikeUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizLikeScalarWhereInput | QuizLikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<CommentCreateWithoutQuizInput, CommentUncheckedCreateWithoutQuizInput> | CommentCreateWithoutQuizInput[] | CommentUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutQuizInput | CommentCreateOrConnectWithoutQuizInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutQuizInput | CommentUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: CommentCreateManyQuizInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutQuizInput | CommentUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutQuizInput | CommentUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutSlicesInput = {
    create?: XOR<QuizCreateWithoutSlicesInput, QuizUncheckedCreateWithoutSlicesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSlicesInput
    connect?: QuizWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutQuizSlicesInput = {
    create?: XOR<ArtistCreateWithoutQuizSlicesInput, ArtistUncheckedCreateWithoutQuizSlicesInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutQuizSlicesInput
    connect?: ArtistWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutSlicesNestedInput = {
    create?: XOR<QuizCreateWithoutSlicesInput, QuizUncheckedCreateWithoutSlicesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutSlicesInput
    upsert?: QuizUpsertWithoutSlicesInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutSlicesInput, QuizUpdateWithoutSlicesInput>, QuizUncheckedUpdateWithoutSlicesInput>
  }

  export type ArtistUpdateOneRequiredWithoutQuizSlicesNestedInput = {
    create?: XOR<ArtistCreateWithoutQuizSlicesInput, ArtistUncheckedCreateWithoutQuizSlicesInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutQuizSlicesInput
    upsert?: ArtistUpsertWithoutQuizSlicesInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutQuizSlicesInput, ArtistUpdateWithoutQuizSlicesInput>, ArtistUncheckedUpdateWithoutQuizSlicesInput>
  }

  export type UserCreateNestedOneWithoutLikedQuizzesInput = {
    create?: XOR<UserCreateWithoutLikedQuizzesInput, UserUncheckedCreateWithoutLikedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutLikedByInput = {
    create?: XOR<QuizCreateWithoutLikedByInput, QuizUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLikedByInput
    connect?: QuizWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutLikedQuizzesInput, UserUncheckedCreateWithoutLikedQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedQuizzesInput
    upsert?: UserUpsertWithoutLikedQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedQuizzesInput, UserUpdateWithoutLikedQuizzesInput>, UserUncheckedUpdateWithoutLikedQuizzesInput>
  }

  export type QuizUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<QuizCreateWithoutLikedByInput, QuizUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: QuizCreateOrConnectWithoutLikedByInput
    upsert?: QuizUpsertWithoutLikedByInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutLikedByInput, QuizUpdateWithoutLikedByInput>, QuizUncheckedUpdateWithoutLikedByInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutCommentsInput = {
    create?: XOR<QuizCreateWithoutCommentsInput, QuizUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutCommentsInput
    connect?: QuizWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type QuizUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<QuizCreateWithoutCommentsInput, QuizUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutCommentsInput
    upsert?: QuizUpsertWithoutCommentsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutCommentsInput, QuizUpdateWithoutCommentsInput>, QuizUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizzes?: QuizCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    quizzes?: QuizCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    quizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutCreatedByInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composer: ComposerCreateNestedOneWithoutQuizzesInput
    instrument: InstrumentCreateNestedOneWithoutQuizzesInput
    slices?: QuizSliceCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeCreateNestedManyWithoutQuizInput
    comments?: CommentCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCreatedByInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
    slices?: QuizSliceUncheckedCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeUncheckedCreateNestedManyWithoutQuizInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCreatedByInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput>
  }

  export type QuizCreateManyCreatedByInputEnvelope = {
    data: QuizCreateManyCreatedByInput | QuizCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type QuizLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutLikedByInput
  }

  export type QuizLikeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    quizId: string
  }

  export type QuizLikeCreateOrConnectWithoutUserInput = {
    where: QuizLikeWhereUniqueInput
    create: XOR<QuizLikeCreateWithoutUserInput, QuizLikeUncheckedCreateWithoutUserInput>
  }

  export type QuizLikeCreateManyUserInputEnvelope = {
    data: QuizLikeCreateManyUserInput | QuizLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    quiz: QuizCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    quizId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type QuizUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCreatedByInput, QuizUncheckedUpdateWithoutCreatedByInput>
    create: XOR<QuizCreateWithoutCreatedByInput, QuizUncheckedCreateWithoutCreatedByInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCreatedByInput, QuizUncheckedUpdateWithoutCreatedByInput>
  }

  export type QuizUpdateManyWithWhereWithoutCreatedByInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    pieceName?: StringFilter<"Quiz"> | string
    duration?: IntFilter<"Quiz"> | number
    likes?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    composerId?: StringFilter<"Quiz"> | string
    instrumentId?: StringFilter<"Quiz"> | string
    createdById?: StringFilter<"Quiz"> | string
  }

  export type QuizLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizLikeWhereUniqueInput
    update: XOR<QuizLikeUpdateWithoutUserInput, QuizLikeUncheckedUpdateWithoutUserInput>
    create: XOR<QuizLikeCreateWithoutUserInput, QuizLikeUncheckedCreateWithoutUserInput>
  }

  export type QuizLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizLikeWhereUniqueInput
    data: XOR<QuizLikeUpdateWithoutUserInput, QuizLikeUncheckedUpdateWithoutUserInput>
  }

  export type QuizLikeUpdateManyWithWhereWithoutUserInput = {
    where: QuizLikeScalarWhereInput
    data: XOR<QuizLikeUpdateManyMutationInput, QuizLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizLikeScalarWhereInput = {
    AND?: QuizLikeScalarWhereInput | QuizLikeScalarWhereInput[]
    OR?: QuizLikeScalarWhereInput[]
    NOT?: QuizLikeScalarWhereInput | QuizLikeScalarWhereInput[]
    id?: StringFilter<"QuizLike"> | string
    createdAt?: DateTimeFilter<"QuizLike"> | Date | string
    userId?: StringFilter<"QuizLike"> | string
    quizId?: StringFilter<"QuizLike"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    hidden?: BoolFilter<"Comment"> | boolean
    userId?: StringFilter<"Comment"> | string
    quizId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
  }

  export type QuizCreateWithoutComposerInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    instrument: InstrumentCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutQuizzesInput
    slices?: QuizSliceCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeCreateNestedManyWithoutQuizInput
    comments?: CommentCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutComposerInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    instrumentId: string
    createdById: string
    slices?: QuizSliceUncheckedCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeUncheckedCreateNestedManyWithoutQuizInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutComposerInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutComposerInput, QuizUncheckedCreateWithoutComposerInput>
  }

  export type QuizCreateManyComposerInputEnvelope = {
    data: QuizCreateManyComposerInput | QuizCreateManyComposerInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutComposerInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutComposerInput, QuizUncheckedUpdateWithoutComposerInput>
    create: XOR<QuizCreateWithoutComposerInput, QuizUncheckedCreateWithoutComposerInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutComposerInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutComposerInput, QuizUncheckedUpdateWithoutComposerInput>
  }

  export type QuizUpdateManyWithWhereWithoutComposerInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutComposerInput>
  }

  export type QuizSliceCreateWithoutArtistInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    quiz: QuizCreateNestedOneWithoutSlicesInput
  }

  export type QuizSliceUncheckedCreateWithoutArtistInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    quizId: string
  }

  export type QuizSliceCreateOrConnectWithoutArtistInput = {
    where: QuizSliceWhereUniqueInput
    create: XOR<QuizSliceCreateWithoutArtistInput, QuizSliceUncheckedCreateWithoutArtistInput>
  }

  export type QuizSliceCreateManyArtistInputEnvelope = {
    data: QuizSliceCreateManyArtistInput | QuizSliceCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type QuizSliceUpsertWithWhereUniqueWithoutArtistInput = {
    where: QuizSliceWhereUniqueInput
    update: XOR<QuizSliceUpdateWithoutArtistInput, QuizSliceUncheckedUpdateWithoutArtistInput>
    create: XOR<QuizSliceCreateWithoutArtistInput, QuizSliceUncheckedCreateWithoutArtistInput>
  }

  export type QuizSliceUpdateWithWhereUniqueWithoutArtistInput = {
    where: QuizSliceWhereUniqueInput
    data: XOR<QuizSliceUpdateWithoutArtistInput, QuizSliceUncheckedUpdateWithoutArtistInput>
  }

  export type QuizSliceUpdateManyWithWhereWithoutArtistInput = {
    where: QuizSliceScalarWhereInput
    data: XOR<QuizSliceUpdateManyMutationInput, QuizSliceUncheckedUpdateManyWithoutArtistInput>
  }

  export type QuizSliceScalarWhereInput = {
    AND?: QuizSliceScalarWhereInput | QuizSliceScalarWhereInput[]
    OR?: QuizSliceScalarWhereInput[]
    NOT?: QuizSliceScalarWhereInput | QuizSliceScalarWhereInput[]
    id?: StringFilter<"QuizSlice"> | string
    startTime?: IntFilter<"QuizSlice"> | number
    youtubeUrl?: StringFilter<"QuizSlice"> | string
    quizId?: StringFilter<"QuizSlice"> | string
    artistId?: StringFilter<"QuizSlice"> | string
  }

  export type QuizCreateWithoutInstrumentInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composer: ComposerCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutQuizzesInput
    slices?: QuizSliceCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeCreateNestedManyWithoutQuizInput
    comments?: CommentCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutInstrumentInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    createdById: string
    slices?: QuizSliceUncheckedCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeUncheckedCreateNestedManyWithoutQuizInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutInstrumentInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutInstrumentInput, QuizUncheckedCreateWithoutInstrumentInput>
  }

  export type QuizCreateManyInstrumentInputEnvelope = {
    data: QuizCreateManyInstrumentInput | QuizCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutInstrumentInput, QuizUncheckedUpdateWithoutInstrumentInput>
    create: XOR<QuizCreateWithoutInstrumentInput, QuizUncheckedCreateWithoutInstrumentInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutInstrumentInput, QuizUncheckedUpdateWithoutInstrumentInput>
  }

  export type QuizUpdateManyWithWhereWithoutInstrumentInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type ComposerCreateWithoutQuizzesInput = {
    id?: string
    name: string
    photoUrl?: string | null
  }

  export type ComposerUncheckedCreateWithoutQuizzesInput = {
    id?: string
    name: string
    photoUrl?: string | null
  }

  export type ComposerCreateOrConnectWithoutQuizzesInput = {
    where: ComposerWhereUniqueInput
    create: XOR<ComposerCreateWithoutQuizzesInput, ComposerUncheckedCreateWithoutQuizzesInput>
  }

  export type InstrumentCreateWithoutQuizzesInput = {
    id?: string
    name: string
  }

  export type InstrumentUncheckedCreateWithoutQuizzesInput = {
    id?: string
    name: string
  }

  export type InstrumentCreateOrConnectWithoutQuizzesInput = {
    where: InstrumentWhereUniqueInput
    create: XOR<InstrumentCreateWithoutQuizzesInput, InstrumentUncheckedCreateWithoutQuizzesInput>
  }

  export type UserCreateWithoutQuizzesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    likedQuizzes?: QuizLikeCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizzesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    likedQuizzes?: QuizLikeUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizSliceCreateWithoutQuizInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    artist: ArtistCreateNestedOneWithoutQuizSlicesInput
  }

  export type QuizSliceUncheckedCreateWithoutQuizInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    artistId: string
  }

  export type QuizSliceCreateOrConnectWithoutQuizInput = {
    where: QuizSliceWhereUniqueInput
    create: XOR<QuizSliceCreateWithoutQuizInput, QuizSliceUncheckedCreateWithoutQuizInput>
  }

  export type QuizSliceCreateManyQuizInputEnvelope = {
    data: QuizSliceCreateManyQuizInput | QuizSliceCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuizLikeCreateWithoutQuizInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedQuizzesInput
  }

  export type QuizLikeUncheckedCreateWithoutQuizInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type QuizLikeCreateOrConnectWithoutQuizInput = {
    where: QuizLikeWhereUniqueInput
    create: XOR<QuizLikeCreateWithoutQuizInput, QuizLikeUncheckedCreateWithoutQuizInput>
  }

  export type QuizLikeCreateManyQuizInputEnvelope = {
    data: QuizLikeCreateManyQuizInput | QuizLikeCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutQuizInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutQuizInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    parentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutQuizInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutQuizInput, CommentUncheckedCreateWithoutQuizInput>
  }

  export type CommentCreateManyQuizInputEnvelope = {
    data: CommentCreateManyQuizInput | CommentCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ComposerUpsertWithoutQuizzesInput = {
    update: XOR<ComposerUpdateWithoutQuizzesInput, ComposerUncheckedUpdateWithoutQuizzesInput>
    create: XOR<ComposerCreateWithoutQuizzesInput, ComposerUncheckedCreateWithoutQuizzesInput>
    where?: ComposerWhereInput
  }

  export type ComposerUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: ComposerWhereInput
    data: XOR<ComposerUpdateWithoutQuizzesInput, ComposerUncheckedUpdateWithoutQuizzesInput>
  }

  export type ComposerUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComposerUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstrumentUpsertWithoutQuizzesInput = {
    update: XOR<InstrumentUpdateWithoutQuizzesInput, InstrumentUncheckedUpdateWithoutQuizzesInput>
    create: XOR<InstrumentCreateWithoutQuizzesInput, InstrumentUncheckedCreateWithoutQuizzesInput>
    where?: InstrumentWhereInput
  }

  export type InstrumentUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: InstrumentWhereInput
    data: XOR<InstrumentUpdateWithoutQuizzesInput, InstrumentUncheckedUpdateWithoutQuizzesInput>
  }

  export type InstrumentUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstrumentUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutQuizzesInput = {
    update: XOR<UserUpdateWithoutQuizzesInput, UserUncheckedUpdateWithoutQuizzesInput>
    create: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizzesInput, UserUncheckedUpdateWithoutQuizzesInput>
  }

  export type UserUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    likedQuizzes?: QuizLikeUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    likedQuizzes?: QuizLikeUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizSliceUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizSliceWhereUniqueInput
    update: XOR<QuizSliceUpdateWithoutQuizInput, QuizSliceUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizSliceCreateWithoutQuizInput, QuizSliceUncheckedCreateWithoutQuizInput>
  }

  export type QuizSliceUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizSliceWhereUniqueInput
    data: XOR<QuizSliceUpdateWithoutQuizInput, QuizSliceUncheckedUpdateWithoutQuizInput>
  }

  export type QuizSliceUpdateManyWithWhereWithoutQuizInput = {
    where: QuizSliceScalarWhereInput
    data: XOR<QuizSliceUpdateManyMutationInput, QuizSliceUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizLikeUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizLikeWhereUniqueInput
    update: XOR<QuizLikeUpdateWithoutQuizInput, QuizLikeUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizLikeCreateWithoutQuizInput, QuizLikeUncheckedCreateWithoutQuizInput>
  }

  export type QuizLikeUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizLikeWhereUniqueInput
    data: XOR<QuizLikeUpdateWithoutQuizInput, QuizLikeUncheckedUpdateWithoutQuizInput>
  }

  export type QuizLikeUpdateManyWithWhereWithoutQuizInput = {
    where: QuizLikeScalarWhereInput
    data: XOR<QuizLikeUpdateManyMutationInput, QuizLikeUncheckedUpdateManyWithoutQuizInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutQuizInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutQuizInput, CommentUncheckedUpdateWithoutQuizInput>
    create: XOR<CommentCreateWithoutQuizInput, CommentUncheckedCreateWithoutQuizInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutQuizInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutQuizInput, CommentUncheckedUpdateWithoutQuizInput>
  }

  export type CommentUpdateManyWithWhereWithoutQuizInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutSlicesInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composer: ComposerCreateNestedOneWithoutQuizzesInput
    instrument: InstrumentCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutQuizzesInput
    likedBy?: QuizLikeCreateNestedManyWithoutQuizInput
    comments?: CommentCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutSlicesInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
    createdById: string
    likedBy?: QuizLikeUncheckedCreateNestedManyWithoutQuizInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutSlicesInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutSlicesInput, QuizUncheckedCreateWithoutSlicesInput>
  }

  export type ArtistCreateWithoutQuizSlicesInput = {
    id?: string
    name: string
    photoUrl?: string | null
  }

  export type ArtistUncheckedCreateWithoutQuizSlicesInput = {
    id?: string
    name: string
    photoUrl?: string | null
  }

  export type ArtistCreateOrConnectWithoutQuizSlicesInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutQuizSlicesInput, ArtistUncheckedCreateWithoutQuizSlicesInput>
  }

  export type QuizUpsertWithoutSlicesInput = {
    update: XOR<QuizUpdateWithoutSlicesInput, QuizUncheckedUpdateWithoutSlicesInput>
    create: XOR<QuizCreateWithoutSlicesInput, QuizUncheckedCreateWithoutSlicesInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutSlicesInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutSlicesInput, QuizUncheckedUpdateWithoutSlicesInput>
  }

  export type QuizUpdateWithoutSlicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composer?: ComposerUpdateOneRequiredWithoutQuizzesNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    likedBy?: QuizLikeUpdateManyWithoutQuizNestedInput
    comments?: CommentUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutSlicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    likedBy?: QuizLikeUncheckedUpdateManyWithoutQuizNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type ArtistUpsertWithoutQuizSlicesInput = {
    update: XOR<ArtistUpdateWithoutQuizSlicesInput, ArtistUncheckedUpdateWithoutQuizSlicesInput>
    create: XOR<ArtistCreateWithoutQuizSlicesInput, ArtistUncheckedCreateWithoutQuizSlicesInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutQuizSlicesInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutQuizSlicesInput, ArtistUncheckedUpdateWithoutQuizSlicesInput>
  }

  export type ArtistUpdateWithoutQuizSlicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateWithoutQuizSlicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutLikedQuizzesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizzes?: QuizCreateNestedManyWithoutCreatedByInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedQuizzesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedQuizzesInput, UserUncheckedCreateWithoutLikedQuizzesInput>
  }

  export type QuizCreateWithoutLikedByInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composer: ComposerCreateNestedOneWithoutQuizzesInput
    instrument: InstrumentCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutQuizzesInput
    slices?: QuizSliceCreateNestedManyWithoutQuizInput
    comments?: CommentCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutLikedByInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
    createdById: string
    slices?: QuizSliceUncheckedCreateNestedManyWithoutQuizInput
    comments?: CommentUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutLikedByInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutLikedByInput, QuizUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikedQuizzesInput = {
    update: XOR<UserUpdateWithoutLikedQuizzesInput, UserUncheckedUpdateWithoutLikedQuizzesInput>
    create: XOR<UserCreateWithoutLikedQuizzesInput, UserUncheckedCreateWithoutLikedQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedQuizzesInput, UserUncheckedUpdateWithoutLikedQuizzesInput>
  }

  export type UserUpdateWithoutLikedQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutLikedByInput = {
    update: XOR<QuizUpdateWithoutLikedByInput, QuizUncheckedUpdateWithoutLikedByInput>
    create: XOR<QuizCreateWithoutLikedByInput, QuizUncheckedCreateWithoutLikedByInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutLikedByInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutLikedByInput, QuizUncheckedUpdateWithoutLikedByInput>
  }

  export type QuizUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composer?: ComposerUpdateOneRequiredWithoutQuizzesNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    slices?: QuizSliceUpdateManyWithoutQuizNestedInput
    comments?: CommentUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutLikedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    slices?: QuizSliceUncheckedUpdateManyWithoutQuizNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    quizzes?: QuizCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCreatedByInput
    likedQuizzes?: QuizLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type QuizCreateWithoutCommentsInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composer: ComposerCreateNestedOneWithoutQuizzesInput
    instrument: InstrumentCreateNestedOneWithoutQuizzesInput
    createdBy: UserCreateNestedOneWithoutQuizzesInput
    slices?: QuizSliceCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCommentsInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
    createdById: string
    slices?: QuizSliceUncheckedCreateNestedManyWithoutQuizInput
    likedBy?: QuizLikeUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCommentsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCommentsInput, QuizUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    user: UserCreateNestedOneWithoutCommentsInput
    quiz: QuizCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    quizId: string
    parentId?: string | null
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    user: UserCreateNestedOneWithoutCommentsInput
    quiz: QuizCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    quizId: string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    quizzes?: QuizUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCreatedByNestedInput
    likedQuizzes?: QuizLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutCommentsInput = {
    update: XOR<QuizUpdateWithoutCommentsInput, QuizUncheckedUpdateWithoutCommentsInput>
    create: XOR<QuizCreateWithoutCommentsInput, QuizUncheckedCreateWithoutCommentsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutCommentsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutCommentsInput, QuizUncheckedUpdateWithoutCommentsInput>
  }

  export type QuizUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composer?: ComposerUpdateOneRequiredWithoutQuizzesNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    slices?: QuizSliceUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    slices?: QuizSliceUncheckedUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type QuizCreateManyCreatedByInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    instrumentId: string
  }

  export type QuizLikeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    quizId: string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    quizId: string
    parentId?: string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composer?: ComposerUpdateOneRequiredWithoutQuizzesNestedInput
    instrument?: InstrumentUpdateOneRequiredWithoutQuizzesNestedInput
    slices?: QuizSliceUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUpdateManyWithoutQuizNestedInput
    comments?: CommentUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    slices?: QuizSliceUncheckedUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUncheckedUpdateManyWithoutQuizNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type QuizLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    quiz?: QuizUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    quizId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    quizId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizCreateManyComposerInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    instrumentId: string
    createdById: string
  }

  export type QuizUpdateWithoutComposerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrument?: InstrumentUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    slices?: QuizSliceUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUpdateManyWithoutQuizNestedInput
    comments?: CommentUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutComposerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    slices?: QuizSliceUncheckedUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUncheckedUpdateManyWithoutQuizNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutComposerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrumentId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceCreateManyArtistInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    quizId: string
  }

  export type QuizSliceUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutSlicesNestedInput
  }

  export type QuizSliceUncheckedUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceUncheckedUpdateManyWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateManyInstrumentInput = {
    id?: string
    pieceName: string
    duration?: number
    likes?: number
    createdAt?: Date | string
    composerId: string
    createdById: string
  }

  export type QuizUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composer?: ComposerUpdateOneRequiredWithoutQuizzesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    slices?: QuizSliceUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUpdateManyWithoutQuizNestedInput
    comments?: CommentUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    slices?: QuizSliceUncheckedUpdateManyWithoutQuizNestedInput
    likedBy?: QuizLikeUncheckedUpdateManyWithoutQuizNestedInput
    comments?: CommentUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceName?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    composerId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceCreateManyQuizInput = {
    id?: string
    startTime?: number
    youtubeUrl: string
    artistId: string
  }

  export type QuizLikeCreateManyQuizInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type CommentCreateManyQuizInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    parentId?: string | null
  }

  export type QuizSliceUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    artist?: ArtistUpdateOneRequiredWithoutQuizSlicesNestedInput
  }

  export type QuizSliceUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSliceUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: IntFieldUpdateOperationsInput | number
    youtubeUrl?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLikeUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedQuizzesNestedInput
  }

  export type QuizLikeUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizLikeUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hidden?: boolean
    userId: string
    quizId: string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hidden?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}