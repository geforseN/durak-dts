
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DurakGame
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type DurakGame = $Result.DefaultSelection<Prisma.$DurakGamePayload>
/**
 * Model Session
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserAuthInfo
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type UserAuthInfo = $Result.DefaultSelection<Prisma.$UserAuthInfoPayload>
/**
 * Model UserGamePlayer
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type UserGamePlayer = $Result.DefaultSelection<Prisma.$UserGamePlayerPayload>
/**
 * Model UserGameStat
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type UserGameStat = $Result.DefaultSelection<Prisma.$UserGameStatPayload>
/**
 * Model UserProfile
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  START_WAITING: 'START_WAITING',
  STARTED: 'STARTED',
  ENDED: 'ENDED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const GameType: {
  BASIC: 'BASIC',
  PEREVODNOY: 'PEREVODNOY'
};

export type GameType = (typeof GameType)[keyof typeof GameType]


export const GameEndResult: {
  WON: 'WON',
  LOST: 'LOST'
};

export type GameEndResult = (typeof GameEndResult)[keyof typeof GameEndResult]


export const ConnectStatus: {
  ONLINE: 'ONLINE',
  AWAY: 'AWAY',
  OFFLINE: 'OFFLINE'
};

export type ConnectStatus = (typeof ConnectStatus)[keyof typeof ConnectStatus]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type GameType = $Enums.GameType

export const GameType: typeof $Enums.GameType

export type GameEndResult = $Enums.GameEndResult

export const GameEndResult: typeof $Enums.GameEndResult

export type ConnectStatus = $Enums.ConnectStatus

export const ConnectStatus: typeof $Enums.ConnectStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DurakGames
 * const durakGames = await prisma.durakGame.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DurakGames
   * const durakGames = await prisma.durakGame.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.durakGame`: Exposes CRUD operations for the **DurakGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DurakGames
    * const durakGames = await prisma.durakGame.findMany()
    * ```
    */
  get durakGame(): Prisma.DurakGameDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userAuthInfo`: Exposes CRUD operations for the **UserAuthInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuthInfos
    * const userAuthInfos = await prisma.userAuthInfo.findMany()
    * ```
    */
  get userAuthInfo(): Prisma.UserAuthInfoDelegate<ExtArgs>;

  /**
   * `prisma.userGamePlayer`: Exposes CRUD operations for the **UserGamePlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGamePlayers
    * const userGamePlayers = await prisma.userGamePlayer.findMany()
    * ```
    */
  get userGamePlayer(): Prisma.UserGamePlayerDelegate<ExtArgs>;

  /**
   * `prisma.userGameStat`: Exposes CRUD operations for the **UserGameStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGameStats
    * const userGameStats = await prisma.userGameStat.findMany()
    * ```
    */
  get userGameStat(): Prisma.UserGameStatDelegate<ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    DurakGame: 'DurakGame',
    Session: 'Session',
    User: 'User',
    UserAuthInfo: 'UserAuthInfo',
    UserGamePlayer: 'UserGamePlayer',
    UserGameStat: 'UserGameStat',
    UserProfile: 'UserProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'durakGame' | 'session' | 'user' | 'userAuthInfo' | 'userGamePlayer' | 'userGameStat' | 'userProfile'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DurakGame: {
        payload: Prisma.$DurakGamePayload<ExtArgs>
        fields: Prisma.DurakGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DurakGameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DurakGameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>
          }
          findFirst: {
            args: Prisma.DurakGameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DurakGameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>
          }
          findMany: {
            args: Prisma.DurakGameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>[]
          }
          create: {
            args: Prisma.DurakGameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>
          }
          createMany: {
            args: Prisma.DurakGameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DurakGameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>
          }
          update: {
            args: Prisma.DurakGameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>
          }
          deleteMany: {
            args: Prisma.DurakGameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DurakGameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DurakGameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DurakGamePayload>
          }
          aggregate: {
            args: Prisma.DurakGameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDurakGame>
          }
          groupBy: {
            args: Prisma.DurakGameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DurakGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.DurakGameCountArgs<ExtArgs>,
            result: $Utils.Optional<DurakGameCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserAuthInfo: {
        payload: Prisma.$UserAuthInfoPayload<ExtArgs>
        fields: Prisma.UserAuthInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuthInfoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuthInfoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>
          }
          findFirst: {
            args: Prisma.UserAuthInfoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuthInfoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>
          }
          findMany: {
            args: Prisma.UserAuthInfoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>[]
          }
          create: {
            args: Prisma.UserAuthInfoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>
          }
          createMany: {
            args: Prisma.UserAuthInfoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserAuthInfoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>
          }
          update: {
            args: Prisma.UserAuthInfoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserAuthInfoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuthInfoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserAuthInfoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAuthInfoPayload>
          }
          aggregate: {
            args: Prisma.UserAuthInfoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserAuthInfo>
          }
          groupBy: {
            args: Prisma.UserAuthInfoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserAuthInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuthInfoCountArgs<ExtArgs>,
            result: $Utils.Optional<UserAuthInfoCountAggregateOutputType> | number
          }
        }
      }
      UserGamePlayer: {
        payload: Prisma.$UserGamePlayerPayload<ExtArgs>
        fields: Prisma.UserGamePlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGamePlayerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGamePlayerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>
          }
          findFirst: {
            args: Prisma.UserGamePlayerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGamePlayerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>
          }
          findMany: {
            args: Prisma.UserGamePlayerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>[]
          }
          create: {
            args: Prisma.UserGamePlayerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>
          }
          createMany: {
            args: Prisma.UserGamePlayerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserGamePlayerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>
          }
          update: {
            args: Prisma.UserGamePlayerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>
          }
          deleteMany: {
            args: Prisma.UserGamePlayerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserGamePlayerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserGamePlayerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGamePlayerPayload>
          }
          aggregate: {
            args: Prisma.UserGamePlayerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserGamePlayer>
          }
          groupBy: {
            args: Prisma.UserGamePlayerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGamePlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGamePlayerCountArgs<ExtArgs>,
            result: $Utils.Optional<UserGamePlayerCountAggregateOutputType> | number
          }
        }
      }
      UserGameStat: {
        payload: Prisma.$UserGameStatPayload<ExtArgs>
        fields: Prisma.UserGameStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameStatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameStatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>
          }
          findFirst: {
            args: Prisma.UserGameStatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameStatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>
          }
          findMany: {
            args: Prisma.UserGameStatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>[]
          }
          create: {
            args: Prisma.UserGameStatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>
          }
          createMany: {
            args: Prisma.UserGameStatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserGameStatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>
          }
          update: {
            args: Prisma.UserGameStatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>
          }
          deleteMany: {
            args: Prisma.UserGameStatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameStatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserGameStatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserGameStatPayload>
          }
          aggregate: {
            args: Prisma.UserGameStatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserGameStat>
          }
          groupBy: {
            args: Prisma.UserGameStatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGameStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameStatCountArgs<ExtArgs>,
            result: $Utils.Optional<UserGameStatCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type DurakGameCountOutputType
   */

  export type DurakGameCountOutputType = {
    players: number
  }

  export type DurakGameCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    players?: boolean | DurakGameCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes

  /**
   * DurakGameCountOutputType without action
   */
  export type DurakGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGameCountOutputType
     */
    select?: DurakGameCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DurakGameCountOutputType without action
   */
  export type DurakGameCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGamePlayerWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserGamePlayer: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    UserGamePlayer?: boolean | UserCountOutputTypeCountUserGamePlayerArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGamePlayerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGamePlayerWhereInput
  }



  /**
   * Models
   */

  /**
   * Model DurakGame
   */

  export type AggregateDurakGame = {
    _count: DurakGameCountAggregateOutputType | null
    _avg: DurakGameAvgAggregateOutputType | null
    _sum: DurakGameSumAggregateOutputType | null
    _min: DurakGameMinAggregateOutputType | null
    _max: DurakGameMaxAggregateOutputType | null
  }

  export type DurakGameAvgAggregateOutputType = {
    number: number | null
    playersCount: number | null
    cardCount: number | null
    moveTime: number | null
  }

  export type DurakGameSumAggregateOutputType = {
    number: number | null
    playersCount: number | null
    cardCount: number | null
    moveTime: number | null
  }

  export type DurakGameMinAggregateOutputType = {
    number: number | null
    uuid: string | null
    playersCount: number | null
    status: $Enums.GameStatus | null
    cardCount: number | null
    gameType: $Enums.GameType | null
    moveTime: number | null
    createdAt: Date | null
  }

  export type DurakGameMaxAggregateOutputType = {
    number: number | null
    uuid: string | null
    playersCount: number | null
    status: $Enums.GameStatus | null
    cardCount: number | null
    gameType: $Enums.GameType | null
    moveTime: number | null
    createdAt: Date | null
  }

  export type DurakGameCountAggregateOutputType = {
    number: number
    uuid: number
    playersCount: number
    status: number
    cardCount: number
    gameType: number
    moveTime: number
    createdAt: number
    _all: number
  }


  export type DurakGameAvgAggregateInputType = {
    number?: true
    playersCount?: true
    cardCount?: true
    moveTime?: true
  }

  export type DurakGameSumAggregateInputType = {
    number?: true
    playersCount?: true
    cardCount?: true
    moveTime?: true
  }

  export type DurakGameMinAggregateInputType = {
    number?: true
    uuid?: true
    playersCount?: true
    status?: true
    cardCount?: true
    gameType?: true
    moveTime?: true
    createdAt?: true
  }

  export type DurakGameMaxAggregateInputType = {
    number?: true
    uuid?: true
    playersCount?: true
    status?: true
    cardCount?: true
    gameType?: true
    moveTime?: true
    createdAt?: true
  }

  export type DurakGameCountAggregateInputType = {
    number?: true
    uuid?: true
    playersCount?: true
    status?: true
    cardCount?: true
    gameType?: true
    moveTime?: true
    createdAt?: true
    _all?: true
  }

  export type DurakGameAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DurakGame to aggregate.
     */
    where?: DurakGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DurakGames to fetch.
     */
    orderBy?: DurakGameOrderByWithRelationInput | DurakGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DurakGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DurakGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DurakGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DurakGames
    **/
    _count?: true | DurakGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DurakGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DurakGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DurakGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DurakGameMaxAggregateInputType
  }

  export type GetDurakGameAggregateType<T extends DurakGameAggregateArgs> = {
        [P in keyof T & keyof AggregateDurakGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDurakGame[P]>
      : GetScalarType<T[P], AggregateDurakGame[P]>
  }




  export type DurakGameGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DurakGameWhereInput
    orderBy?: DurakGameOrderByWithAggregationInput | DurakGameOrderByWithAggregationInput[]
    by: DurakGameScalarFieldEnum[] | DurakGameScalarFieldEnum
    having?: DurakGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DurakGameCountAggregateInputType | true
    _avg?: DurakGameAvgAggregateInputType
    _sum?: DurakGameSumAggregateInputType
    _min?: DurakGameMinAggregateInputType
    _max?: DurakGameMaxAggregateInputType
  }

  export type DurakGameGroupByOutputType = {
    number: number
    uuid: string
    playersCount: number
    status: $Enums.GameStatus
    cardCount: number
    gameType: $Enums.GameType
    moveTime: number
    createdAt: Date
    _count: DurakGameCountAggregateOutputType | null
    _avg: DurakGameAvgAggregateOutputType | null
    _sum: DurakGameSumAggregateOutputType | null
    _min: DurakGameMinAggregateOutputType | null
    _max: DurakGameMaxAggregateOutputType | null
  }

  type GetDurakGameGroupByPayload<T extends DurakGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DurakGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DurakGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DurakGameGroupByOutputType[P]>
            : GetScalarType<T[P], DurakGameGroupByOutputType[P]>
        }
      >
    >


  export type DurakGameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    uuid?: boolean
    playersCount?: boolean
    status?: boolean
    cardCount?: boolean
    gameType?: boolean
    moveTime?: boolean
    createdAt?: boolean
    players?: boolean | DurakGame$playersArgs<ExtArgs>
    _count?: boolean | DurakGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["durakGame"]>

  export type DurakGameSelectScalar = {
    number?: boolean
    uuid?: boolean
    playersCount?: boolean
    status?: boolean
    cardCount?: boolean
    gameType?: boolean
    moveTime?: boolean
    createdAt?: boolean
  }

  export type DurakGameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    players?: boolean | DurakGame$playersArgs<ExtArgs>
    _count?: boolean | DurakGameCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DurakGamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "DurakGame"
    objects: {
      players: Prisma.$UserGamePlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      number: number
      uuid: string
      playersCount: number
      status: $Enums.GameStatus
      cardCount: number
      gameType: $Enums.GameType
      moveTime: number
      createdAt: Date
    }, ExtArgs["result"]["durakGame"]>
    composites: {}
  }


  type DurakGameGetPayload<S extends boolean | null | undefined | DurakGameDefaultArgs> = $Result.GetResult<Prisma.$DurakGamePayload, S>

  type DurakGameCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DurakGameFindManyArgs, 'select' | 'include'> & {
      select?: DurakGameCountAggregateInputType | true
    }

  export interface DurakGameDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DurakGame'], meta: { name: 'DurakGame' } }
    /**
     * Find zero or one DurakGame that matches the filter.
     * @param {DurakGameFindUniqueArgs} args - Arguments to find a DurakGame
     * @example
     * // Get one DurakGame
     * const durakGame = await prisma.durakGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DurakGameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DurakGameFindUniqueArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DurakGame that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DurakGameFindUniqueOrThrowArgs} args - Arguments to find a DurakGame
     * @example
     * // Get one DurakGame
     * const durakGame = await prisma.durakGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DurakGameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DurakGameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DurakGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameFindFirstArgs} args - Arguments to find a DurakGame
     * @example
     * // Get one DurakGame
     * const durakGame = await prisma.durakGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DurakGameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DurakGameFindFirstArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DurakGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameFindFirstOrThrowArgs} args - Arguments to find a DurakGame
     * @example
     * // Get one DurakGame
     * const durakGame = await prisma.durakGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DurakGameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DurakGameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DurakGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DurakGames
     * const durakGames = await prisma.durakGame.findMany()
     * 
     * // Get first 10 DurakGames
     * const durakGames = await prisma.durakGame.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const durakGameWithNumberOnly = await prisma.durakGame.findMany({ select: { number: true } })
     * 
    **/
    findMany<T extends DurakGameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DurakGameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DurakGame.
     * @param {DurakGameCreateArgs} args - Arguments to create a DurakGame.
     * @example
     * // Create one DurakGame
     * const DurakGame = await prisma.durakGame.create({
     *   data: {
     *     // ... data to create a DurakGame
     *   }
     * })
     * 
    **/
    create<T extends DurakGameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DurakGameCreateArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DurakGames.
     *     @param {DurakGameCreateManyArgs} args - Arguments to create many DurakGames.
     *     @example
     *     // Create many DurakGames
     *     const durakGame = await prisma.durakGame.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DurakGameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DurakGameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DurakGame.
     * @param {DurakGameDeleteArgs} args - Arguments to delete one DurakGame.
     * @example
     * // Delete one DurakGame
     * const DurakGame = await prisma.durakGame.delete({
     *   where: {
     *     // ... filter to delete one DurakGame
     *   }
     * })
     * 
    **/
    delete<T extends DurakGameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DurakGameDeleteArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DurakGame.
     * @param {DurakGameUpdateArgs} args - Arguments to update one DurakGame.
     * @example
     * // Update one DurakGame
     * const durakGame = await prisma.durakGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DurakGameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DurakGameUpdateArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DurakGames.
     * @param {DurakGameDeleteManyArgs} args - Arguments to filter DurakGames to delete.
     * @example
     * // Delete a few DurakGames
     * const { count } = await prisma.durakGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DurakGameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DurakGameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DurakGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DurakGames
     * const durakGame = await prisma.durakGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DurakGameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DurakGameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DurakGame.
     * @param {DurakGameUpsertArgs} args - Arguments to update or create a DurakGame.
     * @example
     * // Update or create a DurakGame
     * const durakGame = await prisma.durakGame.upsert({
     *   create: {
     *     // ... data to create a DurakGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DurakGame we want to update
     *   }
     * })
    **/
    upsert<T extends DurakGameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DurakGameUpsertArgs<ExtArgs>>
    ): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DurakGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameCountArgs} args - Arguments to filter DurakGames to count.
     * @example
     * // Count the number of DurakGames
     * const count = await prisma.durakGame.count({
     *   where: {
     *     // ... the filter for the DurakGames we want to count
     *   }
     * })
    **/
    count<T extends DurakGameCountArgs>(
      args?: Subset<T, DurakGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DurakGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DurakGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DurakGameAggregateArgs>(args: Subset<T, DurakGameAggregateArgs>): Prisma.PrismaPromise<GetDurakGameAggregateType<T>>

    /**
     * Group by DurakGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DurakGameGroupByArgs} args - Group by arguments.
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
      T extends DurakGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DurakGameGroupByArgs['orderBy'] }
        : { orderBy?: DurakGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DurakGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDurakGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DurakGame model
   */
  readonly fields: DurakGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DurakGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DurakGameClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    players<T extends DurakGame$playersArgs<ExtArgs> = {}>(args?: Subset<T, DurakGame$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DurakGame model
   */ 
  interface DurakGameFieldRefs {
    readonly number: FieldRef<"DurakGame", 'Int'>
    readonly uuid: FieldRef<"DurakGame", 'String'>
    readonly playersCount: FieldRef<"DurakGame", 'Int'>
    readonly status: FieldRef<"DurakGame", 'GameStatus'>
    readonly cardCount: FieldRef<"DurakGame", 'Int'>
    readonly gameType: FieldRef<"DurakGame", 'GameType'>
    readonly moveTime: FieldRef<"DurakGame", 'Float'>
    readonly createdAt: FieldRef<"DurakGame", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DurakGame findUnique
   */
  export type DurakGameFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * Filter, which DurakGame to fetch.
     */
    where: DurakGameWhereUniqueInput
  }


  /**
   * DurakGame findUniqueOrThrow
   */
  export type DurakGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * Filter, which DurakGame to fetch.
     */
    where: DurakGameWhereUniqueInput
  }


  /**
   * DurakGame findFirst
   */
  export type DurakGameFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * Filter, which DurakGame to fetch.
     */
    where?: DurakGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DurakGames to fetch.
     */
    orderBy?: DurakGameOrderByWithRelationInput | DurakGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DurakGames.
     */
    cursor?: DurakGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DurakGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DurakGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DurakGames.
     */
    distinct?: DurakGameScalarFieldEnum | DurakGameScalarFieldEnum[]
  }


  /**
   * DurakGame findFirstOrThrow
   */
  export type DurakGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * Filter, which DurakGame to fetch.
     */
    where?: DurakGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DurakGames to fetch.
     */
    orderBy?: DurakGameOrderByWithRelationInput | DurakGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DurakGames.
     */
    cursor?: DurakGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DurakGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DurakGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DurakGames.
     */
    distinct?: DurakGameScalarFieldEnum | DurakGameScalarFieldEnum[]
  }


  /**
   * DurakGame findMany
   */
  export type DurakGameFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * Filter, which DurakGames to fetch.
     */
    where?: DurakGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DurakGames to fetch.
     */
    orderBy?: DurakGameOrderByWithRelationInput | DurakGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DurakGames.
     */
    cursor?: DurakGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DurakGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DurakGames.
     */
    skip?: number
    distinct?: DurakGameScalarFieldEnum | DurakGameScalarFieldEnum[]
  }


  /**
   * DurakGame create
   */
  export type DurakGameCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * The data needed to create a DurakGame.
     */
    data: XOR<DurakGameCreateInput, DurakGameUncheckedCreateInput>
  }


  /**
   * DurakGame createMany
   */
  export type DurakGameCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DurakGames.
     */
    data: DurakGameCreateManyInput | DurakGameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DurakGame update
   */
  export type DurakGameUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * The data needed to update a DurakGame.
     */
    data: XOR<DurakGameUpdateInput, DurakGameUncheckedUpdateInput>
    /**
     * Choose, which DurakGame to update.
     */
    where: DurakGameWhereUniqueInput
  }


  /**
   * DurakGame updateMany
   */
  export type DurakGameUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DurakGames.
     */
    data: XOR<DurakGameUpdateManyMutationInput, DurakGameUncheckedUpdateManyInput>
    /**
     * Filter which DurakGames to update
     */
    where?: DurakGameWhereInput
  }


  /**
   * DurakGame upsert
   */
  export type DurakGameUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * The filter to search for the DurakGame to update in case it exists.
     */
    where: DurakGameWhereUniqueInput
    /**
     * In case the DurakGame found by the `where` argument doesn't exist, create a new DurakGame with this data.
     */
    create: XOR<DurakGameCreateInput, DurakGameUncheckedCreateInput>
    /**
     * In case the DurakGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DurakGameUpdateInput, DurakGameUncheckedUpdateInput>
  }


  /**
   * DurakGame delete
   */
  export type DurakGameDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
    /**
     * Filter which DurakGame to delete.
     */
    where: DurakGameWhereUniqueInput
  }


  /**
   * DurakGame deleteMany
   */
  export type DurakGameDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which DurakGames to delete
     */
    where?: DurakGameWhereInput
  }


  /**
   * DurakGame.players
   */
  export type DurakGame$playersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    where?: UserGamePlayerWhereInput
    orderBy?: UserGamePlayerOrderByWithRelationInput | UserGamePlayerOrderByWithRelationInput[]
    cursor?: UserGamePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGamePlayerScalarFieldEnum | UserGamePlayerScalarFieldEnum[]
  }


  /**
   * DurakGame without action
   */
  export type DurakGameDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DurakGame
     */
    select?: DurakGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DurakGameInclude<ExtArgs> | null
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
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    sid: string
    data: string
    expiresAt: Date
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


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
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
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    num: number | null
  }

  export type UserSumAggregateOutputType = {
    num: number | null
  }

  export type UserMinAggregateOutputType = {
    num: number | null
    id: string | null
    email: string | null
    currentGameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    num: number | null
    id: string | null
    email: string | null
    currentGameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    num: number
    id: number
    email: number
    currentGameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    num?: true
  }

  export type UserSumAggregateInputType = {
    num?: true
  }

  export type UserMinAggregateInputType = {
    num?: true
    id?: true
    email?: true
    currentGameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    num?: true
    id?: true
    email?: true
    currentGameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    num?: true
    id?: true
    email?: true
    currentGameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    num: number
    id: string
    email: string | null
    currentGameId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num?: boolean
    id?: boolean
    email?: boolean
    currentGameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserAuthInfo?: boolean | User$UserAuthInfoArgs<ExtArgs>
    UserGamePlayer?: boolean | User$UserGamePlayerArgs<ExtArgs>
    UserGameStat?: boolean | User$UserGameStatArgs<ExtArgs>
    UserProfile?: boolean | User$UserProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    num?: boolean
    id?: boolean
    email?: boolean
    currentGameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    UserAuthInfo?: boolean | User$UserAuthInfoArgs<ExtArgs>
    UserGamePlayer?: boolean | User$UserGamePlayerArgs<ExtArgs>
    UserGameStat?: boolean | User$UserGameStatArgs<ExtArgs>
    UserProfile?: boolean | User$UserProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserAuthInfo: Prisma.$UserAuthInfoPayload<ExtArgs> | null
      UserGamePlayer: Prisma.$UserGamePlayerPayload<ExtArgs>[]
      UserGameStat: Prisma.$UserGameStatPayload<ExtArgs> | null
      UserProfile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      num: number
      id: string
      email: string | null
      currentGameId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `num`
     * const userWithNumOnly = await prisma.user.findMany({ select: { num: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserAuthInfo<T extends User$UserAuthInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$UserAuthInfoArgs<ExtArgs>>): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    UserGamePlayer<T extends User$UserGamePlayerArgs<ExtArgs> = {}>(args?: Subset<T, User$UserGamePlayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserGameStat<T extends User$UserGameStatArgs<ExtArgs> = {}>(args?: Subset<T, User$UserGameStatArgs<ExtArgs>>): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    UserProfile<T extends User$UserProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$UserProfileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly num: FieldRef<"User", 'Int'>
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly currentGameId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.UserAuthInfo
   */
  export type User$UserAuthInfoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    where?: UserAuthInfoWhereInput
  }


  /**
   * User.UserGamePlayer
   */
  export type User$UserGamePlayerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    where?: UserGamePlayerWhereInput
    orderBy?: UserGamePlayerOrderByWithRelationInput | UserGamePlayerOrderByWithRelationInput[]
    cursor?: UserGamePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGamePlayerScalarFieldEnum | UserGamePlayerScalarFieldEnum[]
  }


  /**
   * User.UserGameStat
   */
  export type User$UserGameStatArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    where?: UserGameStatWhereInput
  }


  /**
   * User.UserProfile
   */
  export type User$UserProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model UserAuthInfo
   */

  export type AggregateUserAuthInfo = {
    _count: UserAuthInfoCountAggregateOutputType | null
    _avg: UserAuthInfoAvgAggregateOutputType | null
    _sum: UserAuthInfoSumAggregateOutputType | null
    _min: UserAuthInfoMinAggregateOutputType | null
    _max: UserAuthInfoMaxAggregateOutputType | null
  }

  export type UserAuthInfoAvgAggregateOutputType = {
    githubId: number | null
    vkId: number | null
  }

  export type UserAuthInfoSumAggregateOutputType = {
    githubId: number | null
    vkId: number | null
  }

  export type UserAuthInfoMinAggregateOutputType = {
    userId: string | null
    hash: string | null
    yandexId: string | null
    githubId: number | null
    vkId: number | null
    twitchId: string | null
  }

  export type UserAuthInfoMaxAggregateOutputType = {
    userId: string | null
    hash: string | null
    yandexId: string | null
    githubId: number | null
    vkId: number | null
    twitchId: string | null
  }

  export type UserAuthInfoCountAggregateOutputType = {
    userId: number
    hash: number
    yandexId: number
    githubId: number
    vkId: number
    twitchId: number
    _all: number
  }


  export type UserAuthInfoAvgAggregateInputType = {
    githubId?: true
    vkId?: true
  }

  export type UserAuthInfoSumAggregateInputType = {
    githubId?: true
    vkId?: true
  }

  export type UserAuthInfoMinAggregateInputType = {
    userId?: true
    hash?: true
    yandexId?: true
    githubId?: true
    vkId?: true
    twitchId?: true
  }

  export type UserAuthInfoMaxAggregateInputType = {
    userId?: true
    hash?: true
    yandexId?: true
    githubId?: true
    vkId?: true
    twitchId?: true
  }

  export type UserAuthInfoCountAggregateInputType = {
    userId?: true
    hash?: true
    yandexId?: true
    githubId?: true
    vkId?: true
    twitchId?: true
    _all?: true
  }

  export type UserAuthInfoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuthInfo to aggregate.
     */
    where?: UserAuthInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthInfos to fetch.
     */
    orderBy?: UserAuthInfoOrderByWithRelationInput | UserAuthInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuthInfos
    **/
    _count?: true | UserAuthInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuthInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuthInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthInfoMaxAggregateInputType
  }

  export type GetUserAuthInfoAggregateType<T extends UserAuthInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuthInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuthInfo[P]>
      : GetScalarType<T[P], AggregateUserAuthInfo[P]>
  }




  export type UserAuthInfoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserAuthInfoWhereInput
    orderBy?: UserAuthInfoOrderByWithAggregationInput | UserAuthInfoOrderByWithAggregationInput[]
    by: UserAuthInfoScalarFieldEnum[] | UserAuthInfoScalarFieldEnum
    having?: UserAuthInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthInfoCountAggregateInputType | true
    _avg?: UserAuthInfoAvgAggregateInputType
    _sum?: UserAuthInfoSumAggregateInputType
    _min?: UserAuthInfoMinAggregateInputType
    _max?: UserAuthInfoMaxAggregateInputType
  }

  export type UserAuthInfoGroupByOutputType = {
    userId: string
    hash: string | null
    yandexId: string | null
    githubId: number | null
    vkId: number | null
    twitchId: string | null
    _count: UserAuthInfoCountAggregateOutputType | null
    _avg: UserAuthInfoAvgAggregateOutputType | null
    _sum: UserAuthInfoSumAggregateOutputType | null
    _min: UserAuthInfoMinAggregateOutputType | null
    _max: UserAuthInfoMaxAggregateOutputType | null
  }

  type GetUserAuthInfoGroupByPayload<T extends UserAuthInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuthInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthInfoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    hash?: boolean
    yandexId?: boolean
    githubId?: boolean
    vkId?: boolean
    twitchId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuthInfo"]>

  export type UserAuthInfoSelectScalar = {
    userId?: boolean
    hash?: boolean
    yandexId?: boolean
    githubId?: boolean
    vkId?: boolean
    twitchId?: boolean
  }

  export type UserAuthInfoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserAuthInfoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserAuthInfo"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      userId: string
      hash: string | null
      yandexId: string | null
      githubId: number | null
      vkId: number | null
      twitchId: string | null
    }, ExtArgs["result"]["userAuthInfo"]>
    composites: {}
  }


  type UserAuthInfoGetPayload<S extends boolean | null | undefined | UserAuthInfoDefaultArgs> = $Result.GetResult<Prisma.$UserAuthInfoPayload, S>

  type UserAuthInfoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserAuthInfoFindManyArgs, 'select' | 'include'> & {
      select?: UserAuthInfoCountAggregateInputType | true
    }

  export interface UserAuthInfoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuthInfo'], meta: { name: 'UserAuthInfo' } }
    /**
     * Find zero or one UserAuthInfo that matches the filter.
     * @param {UserAuthInfoFindUniqueArgs} args - Arguments to find a UserAuthInfo
     * @example
     * // Get one UserAuthInfo
     * const userAuthInfo = await prisma.userAuthInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAuthInfoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserAuthInfoFindUniqueArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserAuthInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAuthInfoFindUniqueOrThrowArgs} args - Arguments to find a UserAuthInfo
     * @example
     * // Get one UserAuthInfo
     * const userAuthInfo = await prisma.userAuthInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAuthInfoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAuthInfoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserAuthInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoFindFirstArgs} args - Arguments to find a UserAuthInfo
     * @example
     * // Get one UserAuthInfo
     * const userAuthInfo = await prisma.userAuthInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAuthInfoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAuthInfoFindFirstArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserAuthInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoFindFirstOrThrowArgs} args - Arguments to find a UserAuthInfo
     * @example
     * // Get one UserAuthInfo
     * const userAuthInfo = await prisma.userAuthInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAuthInfoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAuthInfoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserAuthInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuthInfos
     * const userAuthInfos = await prisma.userAuthInfo.findMany()
     * 
     * // Get first 10 UserAuthInfos
     * const userAuthInfos = await prisma.userAuthInfo.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userAuthInfoWithUserIdOnly = await prisma.userAuthInfo.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserAuthInfoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAuthInfoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserAuthInfo.
     * @param {UserAuthInfoCreateArgs} args - Arguments to create a UserAuthInfo.
     * @example
     * // Create one UserAuthInfo
     * const UserAuthInfo = await prisma.userAuthInfo.create({
     *   data: {
     *     // ... data to create a UserAuthInfo
     *   }
     * })
     * 
    **/
    create<T extends UserAuthInfoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAuthInfoCreateArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserAuthInfos.
     *     @param {UserAuthInfoCreateManyArgs} args - Arguments to create many UserAuthInfos.
     *     @example
     *     // Create many UserAuthInfos
     *     const userAuthInfo = await prisma.userAuthInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAuthInfoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAuthInfoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAuthInfo.
     * @param {UserAuthInfoDeleteArgs} args - Arguments to delete one UserAuthInfo.
     * @example
     * // Delete one UserAuthInfo
     * const UserAuthInfo = await prisma.userAuthInfo.delete({
     *   where: {
     *     // ... filter to delete one UserAuthInfo
     *   }
     * })
     * 
    **/
    delete<T extends UserAuthInfoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserAuthInfoDeleteArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserAuthInfo.
     * @param {UserAuthInfoUpdateArgs} args - Arguments to update one UserAuthInfo.
     * @example
     * // Update one UserAuthInfo
     * const userAuthInfo = await prisma.userAuthInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAuthInfoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAuthInfoUpdateArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserAuthInfos.
     * @param {UserAuthInfoDeleteManyArgs} args - Arguments to filter UserAuthInfos to delete.
     * @example
     * // Delete a few UserAuthInfos
     * const { count } = await prisma.userAuthInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAuthInfoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAuthInfoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuthInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuthInfos
     * const userAuthInfo = await prisma.userAuthInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAuthInfoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserAuthInfoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAuthInfo.
     * @param {UserAuthInfoUpsertArgs} args - Arguments to update or create a UserAuthInfo.
     * @example
     * // Update or create a UserAuthInfo
     * const userAuthInfo = await prisma.userAuthInfo.upsert({
     *   create: {
     *     // ... data to create a UserAuthInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuthInfo we want to update
     *   }
     * })
    **/
    upsert<T extends UserAuthInfoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserAuthInfoUpsertArgs<ExtArgs>>
    ): Prisma__UserAuthInfoClient<$Result.GetResult<Prisma.$UserAuthInfoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserAuthInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoCountArgs} args - Arguments to filter UserAuthInfos to count.
     * @example
     * // Count the number of UserAuthInfos
     * const count = await prisma.userAuthInfo.count({
     *   where: {
     *     // ... the filter for the UserAuthInfos we want to count
     *   }
     * })
    **/
    count<T extends UserAuthInfoCountArgs>(
      args?: Subset<T, UserAuthInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuthInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAuthInfoAggregateArgs>(args: Subset<T, UserAuthInfoAggregateArgs>): Prisma.PrismaPromise<GetUserAuthInfoAggregateType<T>>

    /**
     * Group by UserAuthInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthInfoGroupByArgs} args - Group by arguments.
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
      T extends UserAuthInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAuthInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuthInfo model
   */
  readonly fields: UserAuthInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuthInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuthInfoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserAuthInfo model
   */ 
  interface UserAuthInfoFieldRefs {
    readonly userId: FieldRef<"UserAuthInfo", 'String'>
    readonly hash: FieldRef<"UserAuthInfo", 'String'>
    readonly yandexId: FieldRef<"UserAuthInfo", 'String'>
    readonly githubId: FieldRef<"UserAuthInfo", 'Int'>
    readonly vkId: FieldRef<"UserAuthInfo", 'Int'>
    readonly twitchId: FieldRef<"UserAuthInfo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserAuthInfo findUnique
   */
  export type UserAuthInfoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthInfo to fetch.
     */
    where: UserAuthInfoWhereUniqueInput
  }


  /**
   * UserAuthInfo findUniqueOrThrow
   */
  export type UserAuthInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthInfo to fetch.
     */
    where: UserAuthInfoWhereUniqueInput
  }


  /**
   * UserAuthInfo findFirst
   */
  export type UserAuthInfoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthInfo to fetch.
     */
    where?: UserAuthInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthInfos to fetch.
     */
    orderBy?: UserAuthInfoOrderByWithRelationInput | UserAuthInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuthInfos.
     */
    cursor?: UserAuthInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuthInfos.
     */
    distinct?: UserAuthInfoScalarFieldEnum | UserAuthInfoScalarFieldEnum[]
  }


  /**
   * UserAuthInfo findFirstOrThrow
   */
  export type UserAuthInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthInfo to fetch.
     */
    where?: UserAuthInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthInfos to fetch.
     */
    orderBy?: UserAuthInfoOrderByWithRelationInput | UserAuthInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuthInfos.
     */
    cursor?: UserAuthInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuthInfos.
     */
    distinct?: UserAuthInfoScalarFieldEnum | UserAuthInfoScalarFieldEnum[]
  }


  /**
   * UserAuthInfo findMany
   */
  export type UserAuthInfoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserAuthInfos to fetch.
     */
    where?: UserAuthInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuthInfos to fetch.
     */
    orderBy?: UserAuthInfoOrderByWithRelationInput | UserAuthInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuthInfos.
     */
    cursor?: UserAuthInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuthInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuthInfos.
     */
    skip?: number
    distinct?: UserAuthInfoScalarFieldEnum | UserAuthInfoScalarFieldEnum[]
  }


  /**
   * UserAuthInfo create
   */
  export type UserAuthInfoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuthInfo.
     */
    data: XOR<UserAuthInfoCreateInput, UserAuthInfoUncheckedCreateInput>
  }


  /**
   * UserAuthInfo createMany
   */
  export type UserAuthInfoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuthInfos.
     */
    data: UserAuthInfoCreateManyInput | UserAuthInfoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserAuthInfo update
   */
  export type UserAuthInfoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuthInfo.
     */
    data: XOR<UserAuthInfoUpdateInput, UserAuthInfoUncheckedUpdateInput>
    /**
     * Choose, which UserAuthInfo to update.
     */
    where: UserAuthInfoWhereUniqueInput
  }


  /**
   * UserAuthInfo updateMany
   */
  export type UserAuthInfoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuthInfos.
     */
    data: XOR<UserAuthInfoUpdateManyMutationInput, UserAuthInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserAuthInfos to update
     */
    where?: UserAuthInfoWhereInput
  }


  /**
   * UserAuthInfo upsert
   */
  export type UserAuthInfoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuthInfo to update in case it exists.
     */
    where: UserAuthInfoWhereUniqueInput
    /**
     * In case the UserAuthInfo found by the `where` argument doesn't exist, create a new UserAuthInfo with this data.
     */
    create: XOR<UserAuthInfoCreateInput, UserAuthInfoUncheckedCreateInput>
    /**
     * In case the UserAuthInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthInfoUpdateInput, UserAuthInfoUncheckedUpdateInput>
  }


  /**
   * UserAuthInfo delete
   */
  export type UserAuthInfoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
    /**
     * Filter which UserAuthInfo to delete.
     */
    where: UserAuthInfoWhereUniqueInput
  }


  /**
   * UserAuthInfo deleteMany
   */
  export type UserAuthInfoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuthInfos to delete
     */
    where?: UserAuthInfoWhereInput
  }


  /**
   * UserAuthInfo without action
   */
  export type UserAuthInfoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthInfo
     */
    select?: UserAuthInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAuthInfoInclude<ExtArgs> | null
  }



  /**
   * Model UserGamePlayer
   */

  export type AggregateUserGamePlayer = {
    _count: UserGamePlayerCountAggregateOutputType | null
    _avg: UserGamePlayerAvgAggregateOutputType | null
    _sum: UserGamePlayerSumAggregateOutputType | null
    _min: UserGamePlayerMinAggregateOutputType | null
    _max: UserGamePlayerMaxAggregateOutputType | null
  }

  export type UserGamePlayerAvgAggregateOutputType = {
    durakGameNumber: number | null
    index: number | null
    winPlace: number | null
    winRoundNumber: number | null
  }

  export type UserGamePlayerSumAggregateOutputType = {
    durakGameNumber: number | null
    index: number | null
    winPlace: number | null
    winRoundNumber: number | null
  }

  export type UserGamePlayerMinAggregateOutputType = {
    durakGameNumber: number | null
    userId: string | null
    index: number | null
    result: $Enums.GameEndResult | null
    winPlace: number | null
    winRoundNumber: number | null
    hasLost: boolean | null
  }

  export type UserGamePlayerMaxAggregateOutputType = {
    durakGameNumber: number | null
    userId: string | null
    index: number | null
    result: $Enums.GameEndResult | null
    winPlace: number | null
    winRoundNumber: number | null
    hasLost: boolean | null
  }

  export type UserGamePlayerCountAggregateOutputType = {
    durakGameNumber: number
    userId: number
    index: number
    result: number
    winPlace: number
    winRoundNumber: number
    hasLost: number
    _all: number
  }


  export type UserGamePlayerAvgAggregateInputType = {
    durakGameNumber?: true
    index?: true
    winPlace?: true
    winRoundNumber?: true
  }

  export type UserGamePlayerSumAggregateInputType = {
    durakGameNumber?: true
    index?: true
    winPlace?: true
    winRoundNumber?: true
  }

  export type UserGamePlayerMinAggregateInputType = {
    durakGameNumber?: true
    userId?: true
    index?: true
    result?: true
    winPlace?: true
    winRoundNumber?: true
    hasLost?: true
  }

  export type UserGamePlayerMaxAggregateInputType = {
    durakGameNumber?: true
    userId?: true
    index?: true
    result?: true
    winPlace?: true
    winRoundNumber?: true
    hasLost?: true
  }

  export type UserGamePlayerCountAggregateInputType = {
    durakGameNumber?: true
    userId?: true
    index?: true
    result?: true
    winPlace?: true
    winRoundNumber?: true
    hasLost?: true
    _all?: true
  }

  export type UserGamePlayerAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGamePlayer to aggregate.
     */
    where?: UserGamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamePlayers to fetch.
     */
    orderBy?: UserGamePlayerOrderByWithRelationInput | UserGamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGamePlayers
    **/
    _count?: true | UserGamePlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGamePlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGamePlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGamePlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGamePlayerMaxAggregateInputType
  }

  export type GetUserGamePlayerAggregateType<T extends UserGamePlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGamePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGamePlayer[P]>
      : GetScalarType<T[P], AggregateUserGamePlayer[P]>
  }




  export type UserGamePlayerGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGamePlayerWhereInput
    orderBy?: UserGamePlayerOrderByWithAggregationInput | UserGamePlayerOrderByWithAggregationInput[]
    by: UserGamePlayerScalarFieldEnum[] | UserGamePlayerScalarFieldEnum
    having?: UserGamePlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGamePlayerCountAggregateInputType | true
    _avg?: UserGamePlayerAvgAggregateInputType
    _sum?: UserGamePlayerSumAggregateInputType
    _min?: UserGamePlayerMinAggregateInputType
    _max?: UserGamePlayerMaxAggregateInputType
  }

  export type UserGamePlayerGroupByOutputType = {
    durakGameNumber: number
    userId: string
    index: number
    result: $Enums.GameEndResult
    winPlace: number | null
    winRoundNumber: number | null
    hasLost: boolean
    _count: UserGamePlayerCountAggregateOutputType | null
    _avg: UserGamePlayerAvgAggregateOutputType | null
    _sum: UserGamePlayerSumAggregateOutputType | null
    _min: UserGamePlayerMinAggregateOutputType | null
    _max: UserGamePlayerMaxAggregateOutputType | null
  }

  type GetUserGamePlayerGroupByPayload<T extends UserGamePlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGamePlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGamePlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGamePlayerGroupByOutputType[P]>
            : GetScalarType<T[P], UserGamePlayerGroupByOutputType[P]>
        }
      >
    >


  export type UserGamePlayerSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    durakGameNumber?: boolean
    userId?: boolean
    index?: boolean
    result?: boolean
    winPlace?: boolean
    winRoundNumber?: boolean
    hasLost?: boolean
    DurakGame?: boolean | DurakGameDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGamePlayer"]>

  export type UserGamePlayerSelectScalar = {
    durakGameNumber?: boolean
    userId?: boolean
    index?: boolean
    result?: boolean
    winPlace?: boolean
    winRoundNumber?: boolean
    hasLost?: boolean
  }

  export type UserGamePlayerInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    DurakGame?: boolean | DurakGameDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserGamePlayerPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserGamePlayer"
    objects: {
      DurakGame: Prisma.$DurakGamePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      durakGameNumber: number
      userId: string
      index: number
      result: $Enums.GameEndResult
      winPlace: number | null
      winRoundNumber: number | null
      hasLost: boolean
    }, ExtArgs["result"]["userGamePlayer"]>
    composites: {}
  }


  type UserGamePlayerGetPayload<S extends boolean | null | undefined | UserGamePlayerDefaultArgs> = $Result.GetResult<Prisma.$UserGamePlayerPayload, S>

  type UserGamePlayerCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserGamePlayerFindManyArgs, 'select' | 'include'> & {
      select?: UserGamePlayerCountAggregateInputType | true
    }

  export interface UserGamePlayerDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGamePlayer'], meta: { name: 'UserGamePlayer' } }
    /**
     * Find zero or one UserGamePlayer that matches the filter.
     * @param {UserGamePlayerFindUniqueArgs} args - Arguments to find a UserGamePlayer
     * @example
     * // Get one UserGamePlayer
     * const userGamePlayer = await prisma.userGamePlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserGamePlayerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserGamePlayerFindUniqueArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserGamePlayer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserGamePlayerFindUniqueOrThrowArgs} args - Arguments to find a UserGamePlayer
     * @example
     * // Get one UserGamePlayer
     * const userGamePlayer = await prisma.userGamePlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserGamePlayerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGamePlayerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserGamePlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerFindFirstArgs} args - Arguments to find a UserGamePlayer
     * @example
     * // Get one UserGamePlayer
     * const userGamePlayer = await prisma.userGamePlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserGamePlayerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGamePlayerFindFirstArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserGamePlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerFindFirstOrThrowArgs} args - Arguments to find a UserGamePlayer
     * @example
     * // Get one UserGamePlayer
     * const userGamePlayer = await prisma.userGamePlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserGamePlayerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGamePlayerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserGamePlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGamePlayers
     * const userGamePlayers = await prisma.userGamePlayer.findMany()
     * 
     * // Get first 10 UserGamePlayers
     * const userGamePlayers = await prisma.userGamePlayer.findMany({ take: 10 })
     * 
     * // Only select the `durakGameNumber`
     * const userGamePlayerWithDurakGameNumberOnly = await prisma.userGamePlayer.findMany({ select: { durakGameNumber: true } })
     * 
    **/
    findMany<T extends UserGamePlayerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGamePlayerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserGamePlayer.
     * @param {UserGamePlayerCreateArgs} args - Arguments to create a UserGamePlayer.
     * @example
     * // Create one UserGamePlayer
     * const UserGamePlayer = await prisma.userGamePlayer.create({
     *   data: {
     *     // ... data to create a UserGamePlayer
     *   }
     * })
     * 
    **/
    create<T extends UserGamePlayerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGamePlayerCreateArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserGamePlayers.
     *     @param {UserGamePlayerCreateManyArgs} args - Arguments to create many UserGamePlayers.
     *     @example
     *     // Create many UserGamePlayers
     *     const userGamePlayer = await prisma.userGamePlayer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserGamePlayerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGamePlayerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserGamePlayer.
     * @param {UserGamePlayerDeleteArgs} args - Arguments to delete one UserGamePlayer.
     * @example
     * // Delete one UserGamePlayer
     * const UserGamePlayer = await prisma.userGamePlayer.delete({
     *   where: {
     *     // ... filter to delete one UserGamePlayer
     *   }
     * })
     * 
    **/
    delete<T extends UserGamePlayerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserGamePlayerDeleteArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserGamePlayer.
     * @param {UserGamePlayerUpdateArgs} args - Arguments to update one UserGamePlayer.
     * @example
     * // Update one UserGamePlayer
     * const userGamePlayer = await prisma.userGamePlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserGamePlayerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGamePlayerUpdateArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserGamePlayers.
     * @param {UserGamePlayerDeleteManyArgs} args - Arguments to filter UserGamePlayers to delete.
     * @example
     * // Delete a few UserGamePlayers
     * const { count } = await prisma.userGamePlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserGamePlayerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGamePlayerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGamePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGamePlayers
     * const userGamePlayer = await prisma.userGamePlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserGamePlayerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserGamePlayerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGamePlayer.
     * @param {UserGamePlayerUpsertArgs} args - Arguments to update or create a UserGamePlayer.
     * @example
     * // Update or create a UserGamePlayer
     * const userGamePlayer = await prisma.userGamePlayer.upsert({
     *   create: {
     *     // ... data to create a UserGamePlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGamePlayer we want to update
     *   }
     * })
    **/
    upsert<T extends UserGamePlayerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserGamePlayerUpsertArgs<ExtArgs>>
    ): Prisma__UserGamePlayerClient<$Result.GetResult<Prisma.$UserGamePlayerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserGamePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerCountArgs} args - Arguments to filter UserGamePlayers to count.
     * @example
     * // Count the number of UserGamePlayers
     * const count = await prisma.userGamePlayer.count({
     *   where: {
     *     // ... the filter for the UserGamePlayers we want to count
     *   }
     * })
    **/
    count<T extends UserGamePlayerCountArgs>(
      args?: Subset<T, UserGamePlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGamePlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGamePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGamePlayerAggregateArgs>(args: Subset<T, UserGamePlayerAggregateArgs>): Prisma.PrismaPromise<GetUserGamePlayerAggregateType<T>>

    /**
     * Group by UserGamePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGamePlayerGroupByArgs} args - Group by arguments.
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
      T extends UserGamePlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGamePlayerGroupByArgs['orderBy'] }
        : { orderBy?: UserGamePlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGamePlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGamePlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGamePlayer model
   */
  readonly fields: UserGamePlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGamePlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGamePlayerClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DurakGame<T extends DurakGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DurakGameDefaultArgs<ExtArgs>>): Prisma__DurakGameClient<$Result.GetResult<Prisma.$DurakGamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserGamePlayer model
   */ 
  interface UserGamePlayerFieldRefs {
    readonly durakGameNumber: FieldRef<"UserGamePlayer", 'Int'>
    readonly userId: FieldRef<"UserGamePlayer", 'String'>
    readonly index: FieldRef<"UserGamePlayer", 'Int'>
    readonly result: FieldRef<"UserGamePlayer", 'GameEndResult'>
    readonly winPlace: FieldRef<"UserGamePlayer", 'Int'>
    readonly winRoundNumber: FieldRef<"UserGamePlayer", 'Int'>
    readonly hasLost: FieldRef<"UserGamePlayer", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * UserGamePlayer findUnique
   */
  export type UserGamePlayerFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which UserGamePlayer to fetch.
     */
    where: UserGamePlayerWhereUniqueInput
  }


  /**
   * UserGamePlayer findUniqueOrThrow
   */
  export type UserGamePlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which UserGamePlayer to fetch.
     */
    where: UserGamePlayerWhereUniqueInput
  }


  /**
   * UserGamePlayer findFirst
   */
  export type UserGamePlayerFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which UserGamePlayer to fetch.
     */
    where?: UserGamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamePlayers to fetch.
     */
    orderBy?: UserGamePlayerOrderByWithRelationInput | UserGamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGamePlayers.
     */
    cursor?: UserGamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGamePlayers.
     */
    distinct?: UserGamePlayerScalarFieldEnum | UserGamePlayerScalarFieldEnum[]
  }


  /**
   * UserGamePlayer findFirstOrThrow
   */
  export type UserGamePlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which UserGamePlayer to fetch.
     */
    where?: UserGamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamePlayers to fetch.
     */
    orderBy?: UserGamePlayerOrderByWithRelationInput | UserGamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGamePlayers.
     */
    cursor?: UserGamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGamePlayers.
     */
    distinct?: UserGamePlayerScalarFieldEnum | UserGamePlayerScalarFieldEnum[]
  }


  /**
   * UserGamePlayer findMany
   */
  export type UserGamePlayerFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * Filter, which UserGamePlayers to fetch.
     */
    where?: UserGamePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGamePlayers to fetch.
     */
    orderBy?: UserGamePlayerOrderByWithRelationInput | UserGamePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGamePlayers.
     */
    cursor?: UserGamePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGamePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGamePlayers.
     */
    skip?: number
    distinct?: UserGamePlayerScalarFieldEnum | UserGamePlayerScalarFieldEnum[]
  }


  /**
   * UserGamePlayer create
   */
  export type UserGamePlayerCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGamePlayer.
     */
    data: XOR<UserGamePlayerCreateInput, UserGamePlayerUncheckedCreateInput>
  }


  /**
   * UserGamePlayer createMany
   */
  export type UserGamePlayerCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGamePlayers.
     */
    data: UserGamePlayerCreateManyInput | UserGamePlayerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserGamePlayer update
   */
  export type UserGamePlayerUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGamePlayer.
     */
    data: XOR<UserGamePlayerUpdateInput, UserGamePlayerUncheckedUpdateInput>
    /**
     * Choose, which UserGamePlayer to update.
     */
    where: UserGamePlayerWhereUniqueInput
  }


  /**
   * UserGamePlayer updateMany
   */
  export type UserGamePlayerUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGamePlayers.
     */
    data: XOR<UserGamePlayerUpdateManyMutationInput, UserGamePlayerUncheckedUpdateManyInput>
    /**
     * Filter which UserGamePlayers to update
     */
    where?: UserGamePlayerWhereInput
  }


  /**
   * UserGamePlayer upsert
   */
  export type UserGamePlayerUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGamePlayer to update in case it exists.
     */
    where: UserGamePlayerWhereUniqueInput
    /**
     * In case the UserGamePlayer found by the `where` argument doesn't exist, create a new UserGamePlayer with this data.
     */
    create: XOR<UserGamePlayerCreateInput, UserGamePlayerUncheckedCreateInput>
    /**
     * In case the UserGamePlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGamePlayerUpdateInput, UserGamePlayerUncheckedUpdateInput>
  }


  /**
   * UserGamePlayer delete
   */
  export type UserGamePlayerDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
    /**
     * Filter which UserGamePlayer to delete.
     */
    where: UserGamePlayerWhereUniqueInput
  }


  /**
   * UserGamePlayer deleteMany
   */
  export type UserGamePlayerDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGamePlayers to delete
     */
    where?: UserGamePlayerWhereInput
  }


  /**
   * UserGamePlayer without action
   */
  export type UserGamePlayerDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGamePlayer
     */
    select?: UserGamePlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGamePlayerInclude<ExtArgs> | null
  }



  /**
   * Model UserGameStat
   */

  export type AggregateUserGameStat = {
    _count: UserGameStatCountAggregateOutputType | null
    _avg: UserGameStatAvgAggregateOutputType | null
    _sum: UserGameStatSumAggregateOutputType | null
    _min: UserGameStatMinAggregateOutputType | null
    _max: UserGameStatMaxAggregateOutputType | null
  }

  export type UserGameStatAvgAggregateOutputType = {
    wonGamesCount: number | null
    lostGamesCount: number | null
    unstableGamesCount: number | null
  }

  export type UserGameStatSumAggregateOutputType = {
    wonGamesCount: number | null
    lostGamesCount: number | null
    unstableGamesCount: number | null
  }

  export type UserGameStatMinAggregateOutputType = {
    userId: string | null
    wonGamesCount: number | null
    lostGamesCount: number | null
    unstableGamesCount: number | null
    createdAt: Date | null
  }

  export type UserGameStatMaxAggregateOutputType = {
    userId: string | null
    wonGamesCount: number | null
    lostGamesCount: number | null
    unstableGamesCount: number | null
    createdAt: Date | null
  }

  export type UserGameStatCountAggregateOutputType = {
    userId: number
    wonGamesCount: number
    lostGamesCount: number
    unstableGamesCount: number
    createdAt: number
    _all: number
  }


  export type UserGameStatAvgAggregateInputType = {
    wonGamesCount?: true
    lostGamesCount?: true
    unstableGamesCount?: true
  }

  export type UserGameStatSumAggregateInputType = {
    wonGamesCount?: true
    lostGamesCount?: true
    unstableGamesCount?: true
  }

  export type UserGameStatMinAggregateInputType = {
    userId?: true
    wonGamesCount?: true
    lostGamesCount?: true
    unstableGamesCount?: true
    createdAt?: true
  }

  export type UserGameStatMaxAggregateInputType = {
    userId?: true
    wonGamesCount?: true
    lostGamesCount?: true
    unstableGamesCount?: true
    createdAt?: true
  }

  export type UserGameStatCountAggregateInputType = {
    userId?: true
    wonGamesCount?: true
    lostGamesCount?: true
    unstableGamesCount?: true
    createdAt?: true
    _all?: true
  }

  export type UserGameStatAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGameStat to aggregate.
     */
    where?: UserGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStats to fetch.
     */
    orderBy?: UserGameStatOrderByWithRelationInput | UserGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGameStats
    **/
    _count?: true | UserGameStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGameStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGameStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameStatMaxAggregateInputType
  }

  export type GetUserGameStatAggregateType<T extends UserGameStatAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGameStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGameStat[P]>
      : GetScalarType<T[P], AggregateUserGameStat[P]>
  }




  export type UserGameStatGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserGameStatWhereInput
    orderBy?: UserGameStatOrderByWithAggregationInput | UserGameStatOrderByWithAggregationInput[]
    by: UserGameStatScalarFieldEnum[] | UserGameStatScalarFieldEnum
    having?: UserGameStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameStatCountAggregateInputType | true
    _avg?: UserGameStatAvgAggregateInputType
    _sum?: UserGameStatSumAggregateInputType
    _min?: UserGameStatMinAggregateInputType
    _max?: UserGameStatMaxAggregateInputType
  }

  export type UserGameStatGroupByOutputType = {
    userId: string
    wonGamesCount: number
    lostGamesCount: number
    unstableGamesCount: number
    createdAt: Date
    _count: UserGameStatCountAggregateOutputType | null
    _avg: UserGameStatAvgAggregateOutputType | null
    _sum: UserGameStatSumAggregateOutputType | null
    _min: UserGameStatMinAggregateOutputType | null
    _max: UserGameStatMaxAggregateOutputType | null
  }

  type GetUserGameStatGroupByPayload<T extends UserGameStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameStatGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameStatGroupByOutputType[P]>
        }
      >
    >


  export type UserGameStatSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    wonGamesCount?: boolean
    lostGamesCount?: boolean
    unstableGamesCount?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameStat"]>

  export type UserGameStatSelectScalar = {
    userId?: boolean
    wonGamesCount?: boolean
    lostGamesCount?: boolean
    unstableGamesCount?: boolean
    createdAt?: boolean
  }

  export type UserGameStatInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserGameStatPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserGameStat"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      userId: string
      wonGamesCount: number
      lostGamesCount: number
      unstableGamesCount: number
      createdAt: Date
    }, ExtArgs["result"]["userGameStat"]>
    composites: {}
  }


  type UserGameStatGetPayload<S extends boolean | null | undefined | UserGameStatDefaultArgs> = $Result.GetResult<Prisma.$UserGameStatPayload, S>

  type UserGameStatCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserGameStatFindManyArgs, 'select' | 'include'> & {
      select?: UserGameStatCountAggregateInputType | true
    }

  export interface UserGameStatDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGameStat'], meta: { name: 'UserGameStat' } }
    /**
     * Find zero or one UserGameStat that matches the filter.
     * @param {UserGameStatFindUniqueArgs} args - Arguments to find a UserGameStat
     * @example
     * // Get one UserGameStat
     * const userGameStat = await prisma.userGameStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserGameStatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameStatFindUniqueArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserGameStat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserGameStatFindUniqueOrThrowArgs} args - Arguments to find a UserGameStat
     * @example
     * // Get one UserGameStat
     * const userGameStat = await prisma.userGameStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserGameStatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameStatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserGameStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatFindFirstArgs} args - Arguments to find a UserGameStat
     * @example
     * // Get one UserGameStat
     * const userGameStat = await prisma.userGameStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserGameStatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameStatFindFirstArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserGameStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatFindFirstOrThrowArgs} args - Arguments to find a UserGameStat
     * @example
     * // Get one UserGameStat
     * const userGameStat = await prisma.userGameStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserGameStatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameStatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserGameStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGameStats
     * const userGameStats = await prisma.userGameStat.findMany()
     * 
     * // Get first 10 UserGameStats
     * const userGameStats = await prisma.userGameStat.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userGameStatWithUserIdOnly = await prisma.userGameStat.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserGameStatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameStatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserGameStat.
     * @param {UserGameStatCreateArgs} args - Arguments to create a UserGameStat.
     * @example
     * // Create one UserGameStat
     * const UserGameStat = await prisma.userGameStat.create({
     *   data: {
     *     // ... data to create a UserGameStat
     *   }
     * })
     * 
    **/
    create<T extends UserGameStatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameStatCreateArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserGameStats.
     *     @param {UserGameStatCreateManyArgs} args - Arguments to create many UserGameStats.
     *     @example
     *     // Create many UserGameStats
     *     const userGameStat = await prisma.userGameStat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserGameStatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameStatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserGameStat.
     * @param {UserGameStatDeleteArgs} args - Arguments to delete one UserGameStat.
     * @example
     * // Delete one UserGameStat
     * const UserGameStat = await prisma.userGameStat.delete({
     *   where: {
     *     // ... filter to delete one UserGameStat
     *   }
     * })
     * 
    **/
    delete<T extends UserGameStatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameStatDeleteArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserGameStat.
     * @param {UserGameStatUpdateArgs} args - Arguments to update one UserGameStat.
     * @example
     * // Update one UserGameStat
     * const userGameStat = await prisma.userGameStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserGameStatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameStatUpdateArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserGameStats.
     * @param {UserGameStatDeleteManyArgs} args - Arguments to filter UserGameStats to delete.
     * @example
     * // Delete a few UserGameStats
     * const { count } = await prisma.userGameStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserGameStatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserGameStatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGameStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGameStats
     * const userGameStat = await prisma.userGameStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserGameStatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameStatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserGameStat.
     * @param {UserGameStatUpsertArgs} args - Arguments to update or create a UserGameStat.
     * @example
     * // Update or create a UserGameStat
     * const userGameStat = await prisma.userGameStat.upsert({
     *   create: {
     *     // ... data to create a UserGameStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGameStat we want to update
     *   }
     * })
    **/
    upsert<T extends UserGameStatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserGameStatUpsertArgs<ExtArgs>>
    ): Prisma__UserGameStatClient<$Result.GetResult<Prisma.$UserGameStatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserGameStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatCountArgs} args - Arguments to filter UserGameStats to count.
     * @example
     * // Count the number of UserGameStats
     * const count = await prisma.userGameStat.count({
     *   where: {
     *     // ... the filter for the UserGameStats we want to count
     *   }
     * })
    **/
    count<T extends UserGameStatCountArgs>(
      args?: Subset<T, UserGameStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGameStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGameStatAggregateArgs>(args: Subset<T, UserGameStatAggregateArgs>): Prisma.PrismaPromise<GetUserGameStatAggregateType<T>>

    /**
     * Group by UserGameStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatGroupByArgs} args - Group by arguments.
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
      T extends UserGameStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameStatGroupByArgs['orderBy'] }
        : { orderBy?: UserGameStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGameStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGameStat model
   */
  readonly fields: UserGameStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGameStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameStatClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserGameStat model
   */ 
  interface UserGameStatFieldRefs {
    readonly userId: FieldRef<"UserGameStat", 'String'>
    readonly wonGamesCount: FieldRef<"UserGameStat", 'Int'>
    readonly lostGamesCount: FieldRef<"UserGameStat", 'Int'>
    readonly unstableGamesCount: FieldRef<"UserGameStat", 'Int'>
    readonly createdAt: FieldRef<"UserGameStat", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserGameStat findUnique
   */
  export type UserGameStatFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStat to fetch.
     */
    where: UserGameStatWhereUniqueInput
  }


  /**
   * UserGameStat findUniqueOrThrow
   */
  export type UserGameStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStat to fetch.
     */
    where: UserGameStatWhereUniqueInput
  }


  /**
   * UserGameStat findFirst
   */
  export type UserGameStatFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStat to fetch.
     */
    where?: UserGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStats to fetch.
     */
    orderBy?: UserGameStatOrderByWithRelationInput | UserGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGameStats.
     */
    cursor?: UserGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGameStats.
     */
    distinct?: UserGameStatScalarFieldEnum | UserGameStatScalarFieldEnum[]
  }


  /**
   * UserGameStat findFirstOrThrow
   */
  export type UserGameStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStat to fetch.
     */
    where?: UserGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStats to fetch.
     */
    orderBy?: UserGameStatOrderByWithRelationInput | UserGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGameStats.
     */
    cursor?: UserGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGameStats.
     */
    distinct?: UserGameStatScalarFieldEnum | UserGameStatScalarFieldEnum[]
  }


  /**
   * UserGameStat findMany
   */
  export type UserGameStatFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStats to fetch.
     */
    where?: UserGameStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStats to fetch.
     */
    orderBy?: UserGameStatOrderByWithRelationInput | UserGameStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGameStats.
     */
    cursor?: UserGameStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStats.
     */
    skip?: number
    distinct?: UserGameStatScalarFieldEnum | UserGameStatScalarFieldEnum[]
  }


  /**
   * UserGameStat create
   */
  export type UserGameStatCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGameStat.
     */
    data: XOR<UserGameStatCreateInput, UserGameStatUncheckedCreateInput>
  }


  /**
   * UserGameStat createMany
   */
  export type UserGameStatCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGameStats.
     */
    data: UserGameStatCreateManyInput | UserGameStatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserGameStat update
   */
  export type UserGameStatUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGameStat.
     */
    data: XOR<UserGameStatUpdateInput, UserGameStatUncheckedUpdateInput>
    /**
     * Choose, which UserGameStat to update.
     */
    where: UserGameStatWhereUniqueInput
  }


  /**
   * UserGameStat updateMany
   */
  export type UserGameStatUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGameStats.
     */
    data: XOR<UserGameStatUpdateManyMutationInput, UserGameStatUncheckedUpdateManyInput>
    /**
     * Filter which UserGameStats to update
     */
    where?: UserGameStatWhereInput
  }


  /**
   * UserGameStat upsert
   */
  export type UserGameStatUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGameStat to update in case it exists.
     */
    where: UserGameStatWhereUniqueInput
    /**
     * In case the UserGameStat found by the `where` argument doesn't exist, create a new UserGameStat with this data.
     */
    create: XOR<UserGameStatCreateInput, UserGameStatUncheckedCreateInput>
    /**
     * In case the UserGameStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameStatUpdateInput, UserGameStatUncheckedUpdateInput>
  }


  /**
   * UserGameStat delete
   */
  export type UserGameStatDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
    /**
     * Filter which UserGameStat to delete.
     */
    where: UserGameStatWhereUniqueInput
  }


  /**
   * UserGameStat deleteMany
   */
  export type UserGameStatDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGameStats to delete
     */
    where?: UserGameStatWhereInput
  }


  /**
   * UserGameStat without action
   */
  export type UserGameStatDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStat
     */
    select?: UserGameStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserGameStatInclude<ExtArgs> | null
  }



  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    personalLink: string | null
    updatedAt: Date | null
    photoUrl: string | null
    nickname: string | null
    connectStatus: $Enums.ConnectStatus | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    personalLink: string | null
    updatedAt: Date | null
    photoUrl: string | null
    nickname: string | null
    connectStatus: $Enums.ConnectStatus | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    personalLink: number
    updatedAt: number
    photoUrl: number
    nickname: number
    connectStatus: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    userId?: true
    personalLink?: true
    updatedAt?: true
    photoUrl?: true
    nickname?: true
    connectStatus?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    personalLink?: true
    updatedAt?: true
    photoUrl?: true
    nickname?: true
    connectStatus?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    personalLink?: true
    updatedAt?: true
    photoUrl?: true
    nickname?: true
    connectStatus?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    personalLink: string
    updatedAt: Date
    photoUrl: string | null
    nickname: string
    connectStatus: $Enums.ConnectStatus
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    personalLink?: boolean
    updatedAt?: boolean
    photoUrl?: boolean
    nickname?: boolean
    connectStatus?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    personalLink?: boolean
    updatedAt?: boolean
    photoUrl?: boolean
    nickname?: boolean
    connectStatus?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      userId: string
      personalLink: string
      updatedAt: Date
      photoUrl: string | null
      nickname: string
      connectStatus: $Enums.ConnectStatus
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }


  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly personalLink: FieldRef<"UserProfile", 'String'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly photoUrl: FieldRef<"UserProfile", 'String'>
    readonly nickname: FieldRef<"UserProfile", 'String'>
    readonly connectStatus: FieldRef<"UserProfile", 'ConnectStatus'>
  }
    

  // Custom InputTypes

  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
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


  export const DurakGameScalarFieldEnum: {
    number: 'number',
    uuid: 'uuid',
    playersCount: 'playersCount',
    status: 'status',
    cardCount: 'cardCount',
    gameType: 'gameType',
    moveTime: 'moveTime',
    createdAt: 'createdAt'
  };

  export type DurakGameScalarFieldEnum = (typeof DurakGameScalarFieldEnum)[keyof typeof DurakGameScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    num: 'num',
    id: 'id',
    email: 'email',
    currentGameId: 'currentGameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAuthInfoScalarFieldEnum: {
    userId: 'userId',
    hash: 'hash',
    yandexId: 'yandexId',
    githubId: 'githubId',
    vkId: 'vkId',
    twitchId: 'twitchId'
  };

  export type UserAuthInfoScalarFieldEnum = (typeof UserAuthInfoScalarFieldEnum)[keyof typeof UserAuthInfoScalarFieldEnum]


  export const UserGamePlayerScalarFieldEnum: {
    durakGameNumber: 'durakGameNumber',
    userId: 'userId',
    index: 'index',
    result: 'result',
    winPlace: 'winPlace',
    winRoundNumber: 'winRoundNumber',
    hasLost: 'hasLost'
  };

  export type UserGamePlayerScalarFieldEnum = (typeof UserGamePlayerScalarFieldEnum)[keyof typeof UserGamePlayerScalarFieldEnum]


  export const UserGameStatScalarFieldEnum: {
    userId: 'userId',
    wonGamesCount: 'wonGamesCount',
    lostGamesCount: 'lostGamesCount',
    unstableGamesCount: 'unstableGamesCount',
    createdAt: 'createdAt'
  };

  export type UserGameStatScalarFieldEnum = (typeof UserGameStatScalarFieldEnum)[keyof typeof UserGameStatScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    personalLink: 'personalLink',
    updatedAt: 'updatedAt',
    photoUrl: 'photoUrl',
    nickname: 'nickname',
    connectStatus: 'connectStatus'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'GameType'
   */
  export type EnumGameTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameType'>
    


  /**
   * Reference to a field of type 'GameType[]'
   */
  export type ListEnumGameTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GameEndResult'
   */
  export type EnumGameEndResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameEndResult'>
    


  /**
   * Reference to a field of type 'GameEndResult[]'
   */
  export type ListEnumGameEndResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameEndResult[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ConnectStatus'
   */
  export type EnumConnectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectStatus'>
    


  /**
   * Reference to a field of type 'ConnectStatus[]'
   */
  export type ListEnumConnectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type DurakGameWhereInput = {
    AND?: DurakGameWhereInput | DurakGameWhereInput[]
    OR?: DurakGameWhereInput[]
    NOT?: DurakGameWhereInput | DurakGameWhereInput[]
    number?: IntFilter<"DurakGame"> | number
    uuid?: StringFilter<"DurakGame"> | string
    playersCount?: IntFilter<"DurakGame"> | number
    status?: EnumGameStatusFilter<"DurakGame"> | $Enums.GameStatus
    cardCount?: IntFilter<"DurakGame"> | number
    gameType?: EnumGameTypeFilter<"DurakGame"> | $Enums.GameType
    moveTime?: FloatFilter<"DurakGame"> | number
    createdAt?: DateTimeFilter<"DurakGame"> | Date | string
    players?: UserGamePlayerListRelationFilter
  }

  export type DurakGameOrderByWithRelationInput = {
    number?: SortOrder
    uuid?: SortOrder
    playersCount?: SortOrder
    status?: SortOrder
    cardCount?: SortOrder
    gameType?: SortOrder
    moveTime?: SortOrder
    createdAt?: SortOrder
    players?: UserGamePlayerOrderByRelationAggregateInput
  }

  export type DurakGameWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: DurakGameWhereInput | DurakGameWhereInput[]
    OR?: DurakGameWhereInput[]
    NOT?: DurakGameWhereInput | DurakGameWhereInput[]
    uuid?: StringFilter<"DurakGame"> | string
    playersCount?: IntFilter<"DurakGame"> | number
    status?: EnumGameStatusFilter<"DurakGame"> | $Enums.GameStatus
    cardCount?: IntFilter<"DurakGame"> | number
    gameType?: EnumGameTypeFilter<"DurakGame"> | $Enums.GameType
    moveTime?: FloatFilter<"DurakGame"> | number
    createdAt?: DateTimeFilter<"DurakGame"> | Date | string
    players?: UserGamePlayerListRelationFilter
  }, "number">

  export type DurakGameOrderByWithAggregationInput = {
    number?: SortOrder
    uuid?: SortOrder
    playersCount?: SortOrder
    status?: SortOrder
    cardCount?: SortOrder
    gameType?: SortOrder
    moveTime?: SortOrder
    createdAt?: SortOrder
    _count?: DurakGameCountOrderByAggregateInput
    _avg?: DurakGameAvgOrderByAggregateInput
    _max?: DurakGameMaxOrderByAggregateInput
    _min?: DurakGameMinOrderByAggregateInput
    _sum?: DurakGameSumOrderByAggregateInput
  }

  export type DurakGameScalarWhereWithAggregatesInput = {
    AND?: DurakGameScalarWhereWithAggregatesInput | DurakGameScalarWhereWithAggregatesInput[]
    OR?: DurakGameScalarWhereWithAggregatesInput[]
    NOT?: DurakGameScalarWhereWithAggregatesInput | DurakGameScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"DurakGame"> | number
    uuid?: StringWithAggregatesFilter<"DurakGame"> | string
    playersCount?: IntWithAggregatesFilter<"DurakGame"> | number
    status?: EnumGameStatusWithAggregatesFilter<"DurakGame"> | $Enums.GameStatus
    cardCount?: IntWithAggregatesFilter<"DurakGame"> | number
    gameType?: EnumGameTypeWithAggregatesFilter<"DurakGame"> | $Enums.GameType
    moveTime?: FloatWithAggregatesFilter<"DurakGame"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DurakGame"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    num?: IntFilter<"User"> | number
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    currentGameId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserAuthInfo?: XOR<UserAuthInfoNullableRelationFilter, UserAuthInfoWhereInput> | null
    UserGamePlayer?: UserGamePlayerListRelationFilter
    UserGameStat?: XOR<UserGameStatNullableRelationFilter, UserGameStatWhereInput> | null
    UserProfile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    num?: SortOrder
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    currentGameId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserAuthInfo?: UserAuthInfoOrderByWithRelationInput
    UserGamePlayer?: UserGamePlayerOrderByRelationAggregateInput
    UserGameStat?: UserGameStatOrderByWithRelationInput
    UserProfile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    num?: number
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    currentGameId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserAuthInfo?: XOR<UserAuthInfoNullableRelationFilter, UserAuthInfoWhereInput> | null
    UserGamePlayer?: UserGamePlayerListRelationFilter
    UserGameStat?: XOR<UserGameStatNullableRelationFilter, UserGameStatWhereInput> | null
    UserProfile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
  }, "id" | "num" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    num?: SortOrder
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    currentGameId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    num?: IntWithAggregatesFilter<"User"> | number
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentGameId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserAuthInfoWhereInput = {
    AND?: UserAuthInfoWhereInput | UserAuthInfoWhereInput[]
    OR?: UserAuthInfoWhereInput[]
    NOT?: UserAuthInfoWhereInput | UserAuthInfoWhereInput[]
    userId?: StringFilter<"UserAuthInfo"> | string
    hash?: StringNullableFilter<"UserAuthInfo"> | string | null
    yandexId?: StringNullableFilter<"UserAuthInfo"> | string | null
    githubId?: IntNullableFilter<"UserAuthInfo"> | number | null
    vkId?: IntNullableFilter<"UserAuthInfo"> | number | null
    twitchId?: StringNullableFilter<"UserAuthInfo"> | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserAuthInfoOrderByWithRelationInput = {
    userId?: SortOrder
    hash?: SortOrderInput | SortOrder
    yandexId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    vkId?: SortOrderInput | SortOrder
    twitchId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserAuthInfoWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    yandexId?: string
    githubId?: number
    vkId?: number
    twitchId?: string
    AND?: UserAuthInfoWhereInput | UserAuthInfoWhereInput[]
    OR?: UserAuthInfoWhereInput[]
    NOT?: UserAuthInfoWhereInput | UserAuthInfoWhereInput[]
    hash?: StringNullableFilter<"UserAuthInfo"> | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId" | "userId" | "yandexId" | "githubId" | "vkId" | "twitchId">

  export type UserAuthInfoOrderByWithAggregationInput = {
    userId?: SortOrder
    hash?: SortOrderInput | SortOrder
    yandexId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    vkId?: SortOrderInput | SortOrder
    twitchId?: SortOrderInput | SortOrder
    _count?: UserAuthInfoCountOrderByAggregateInput
    _avg?: UserAuthInfoAvgOrderByAggregateInput
    _max?: UserAuthInfoMaxOrderByAggregateInput
    _min?: UserAuthInfoMinOrderByAggregateInput
    _sum?: UserAuthInfoSumOrderByAggregateInput
  }

  export type UserAuthInfoScalarWhereWithAggregatesInput = {
    AND?: UserAuthInfoScalarWhereWithAggregatesInput | UserAuthInfoScalarWhereWithAggregatesInput[]
    OR?: UserAuthInfoScalarWhereWithAggregatesInput[]
    NOT?: UserAuthInfoScalarWhereWithAggregatesInput | UserAuthInfoScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserAuthInfo"> | string
    hash?: StringNullableWithAggregatesFilter<"UserAuthInfo"> | string | null
    yandexId?: StringNullableWithAggregatesFilter<"UserAuthInfo"> | string | null
    githubId?: IntNullableWithAggregatesFilter<"UserAuthInfo"> | number | null
    vkId?: IntNullableWithAggregatesFilter<"UserAuthInfo"> | number | null
    twitchId?: StringNullableWithAggregatesFilter<"UserAuthInfo"> | string | null
  }

  export type UserGamePlayerWhereInput = {
    AND?: UserGamePlayerWhereInput | UserGamePlayerWhereInput[]
    OR?: UserGamePlayerWhereInput[]
    NOT?: UserGamePlayerWhereInput | UserGamePlayerWhereInput[]
    durakGameNumber?: IntFilter<"UserGamePlayer"> | number
    userId?: StringFilter<"UserGamePlayer"> | string
    index?: IntFilter<"UserGamePlayer"> | number
    result?: EnumGameEndResultFilter<"UserGamePlayer"> | $Enums.GameEndResult
    winPlace?: IntNullableFilter<"UserGamePlayer"> | number | null
    winRoundNumber?: IntNullableFilter<"UserGamePlayer"> | number | null
    hasLost?: BoolFilter<"UserGamePlayer"> | boolean
    DurakGame?: XOR<DurakGameRelationFilter, DurakGameWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserGamePlayerOrderByWithRelationInput = {
    durakGameNumber?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    result?: SortOrder
    winPlace?: SortOrderInput | SortOrder
    winRoundNumber?: SortOrderInput | SortOrder
    hasLost?: SortOrder
    DurakGame?: DurakGameOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type UserGamePlayerWhereUniqueInput = Prisma.AtLeast<{
    durakGameNumber_index?: UserGamePlayerDurakGameNumberIndexCompoundUniqueInput
    AND?: UserGamePlayerWhereInput | UserGamePlayerWhereInput[]
    OR?: UserGamePlayerWhereInput[]
    NOT?: UserGamePlayerWhereInput | UserGamePlayerWhereInput[]
    durakGameNumber?: IntFilter<"UserGamePlayer"> | number
    userId?: StringFilter<"UserGamePlayer"> | string
    index?: IntFilter<"UserGamePlayer"> | number
    result?: EnumGameEndResultFilter<"UserGamePlayer"> | $Enums.GameEndResult
    winPlace?: IntNullableFilter<"UserGamePlayer"> | number | null
    winRoundNumber?: IntNullableFilter<"UserGamePlayer"> | number | null
    hasLost?: BoolFilter<"UserGamePlayer"> | boolean
    DurakGame?: XOR<DurakGameRelationFilter, DurakGameWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "durakGameNumber_index">

  export type UserGamePlayerOrderByWithAggregationInput = {
    durakGameNumber?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    result?: SortOrder
    winPlace?: SortOrderInput | SortOrder
    winRoundNumber?: SortOrderInput | SortOrder
    hasLost?: SortOrder
    _count?: UserGamePlayerCountOrderByAggregateInput
    _avg?: UserGamePlayerAvgOrderByAggregateInput
    _max?: UserGamePlayerMaxOrderByAggregateInput
    _min?: UserGamePlayerMinOrderByAggregateInput
    _sum?: UserGamePlayerSumOrderByAggregateInput
  }

  export type UserGamePlayerScalarWhereWithAggregatesInput = {
    AND?: UserGamePlayerScalarWhereWithAggregatesInput | UserGamePlayerScalarWhereWithAggregatesInput[]
    OR?: UserGamePlayerScalarWhereWithAggregatesInput[]
    NOT?: UserGamePlayerScalarWhereWithAggregatesInput | UserGamePlayerScalarWhereWithAggregatesInput[]
    durakGameNumber?: IntWithAggregatesFilter<"UserGamePlayer"> | number
    userId?: StringWithAggregatesFilter<"UserGamePlayer"> | string
    index?: IntWithAggregatesFilter<"UserGamePlayer"> | number
    result?: EnumGameEndResultWithAggregatesFilter<"UserGamePlayer"> | $Enums.GameEndResult
    winPlace?: IntNullableWithAggregatesFilter<"UserGamePlayer"> | number | null
    winRoundNumber?: IntNullableWithAggregatesFilter<"UserGamePlayer"> | number | null
    hasLost?: BoolWithAggregatesFilter<"UserGamePlayer"> | boolean
  }

  export type UserGameStatWhereInput = {
    AND?: UserGameStatWhereInput | UserGameStatWhereInput[]
    OR?: UserGameStatWhereInput[]
    NOT?: UserGameStatWhereInput | UserGameStatWhereInput[]
    userId?: StringFilter<"UserGameStat"> | string
    wonGamesCount?: IntFilter<"UserGameStat"> | number
    lostGamesCount?: IntFilter<"UserGameStat"> | number
    unstableGamesCount?: IntFilter<"UserGameStat"> | number
    createdAt?: DateTimeFilter<"UserGameStat"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserGameStatOrderByWithRelationInput = {
    userId?: SortOrder
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserGameStatWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserGameStatWhereInput | UserGameStatWhereInput[]
    OR?: UserGameStatWhereInput[]
    NOT?: UserGameStatWhereInput | UserGameStatWhereInput[]
    wonGamesCount?: IntFilter<"UserGameStat"> | number
    lostGamesCount?: IntFilter<"UserGameStat"> | number
    unstableGamesCount?: IntFilter<"UserGameStat"> | number
    createdAt?: DateTimeFilter<"UserGameStat"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId" | "userId">

  export type UserGameStatOrderByWithAggregationInput = {
    userId?: SortOrder
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
    createdAt?: SortOrder
    _count?: UserGameStatCountOrderByAggregateInput
    _avg?: UserGameStatAvgOrderByAggregateInput
    _max?: UserGameStatMaxOrderByAggregateInput
    _min?: UserGameStatMinOrderByAggregateInput
    _sum?: UserGameStatSumOrderByAggregateInput
  }

  export type UserGameStatScalarWhereWithAggregatesInput = {
    AND?: UserGameStatScalarWhereWithAggregatesInput | UserGameStatScalarWhereWithAggregatesInput[]
    OR?: UserGameStatScalarWhereWithAggregatesInput[]
    NOT?: UserGameStatScalarWhereWithAggregatesInput | UserGameStatScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserGameStat"> | string
    wonGamesCount?: IntWithAggregatesFilter<"UserGameStat"> | number
    lostGamesCount?: IntWithAggregatesFilter<"UserGameStat"> | number
    unstableGamesCount?: IntWithAggregatesFilter<"UserGameStat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserGameStat"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: StringFilter<"UserProfile"> | string
    personalLink?: StringFilter<"UserProfile"> | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    photoUrl?: StringNullableFilter<"UserProfile"> | string | null
    nickname?: StringFilter<"UserProfile"> | string
    connectStatus?: EnumConnectStatusFilter<"UserProfile"> | $Enums.ConnectStatus
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    personalLink?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    nickname?: SortOrder
    connectStatus?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    personalLink?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    photoUrl?: StringNullableFilter<"UserProfile"> | string | null
    nickname?: StringFilter<"UserProfile"> | string
    connectStatus?: EnumConnectStatusFilter<"UserProfile"> | $Enums.ConnectStatus
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId" | "userId" | "personalLink">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    personalLink?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    nickname?: SortOrder
    connectStatus?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    personalLink?: StringWithAggregatesFilter<"UserProfile"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    photoUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    nickname?: StringWithAggregatesFilter<"UserProfile"> | string
    connectStatus?: EnumConnectStatusWithAggregatesFilter<"UserProfile"> | $Enums.ConnectStatus
  }

  export type DurakGameCreateInput = {
    number?: number
    uuid: string
    playersCount: number
    status?: $Enums.GameStatus
    cardCount: number
    gameType: $Enums.GameType
    moveTime: number
    createdAt?: Date | string
    players?: UserGamePlayerCreateNestedManyWithoutDurakGameInput
  }

  export type DurakGameUncheckedCreateInput = {
    number?: number
    uuid: string
    playersCount: number
    status?: $Enums.GameStatus
    cardCount: number
    gameType: $Enums.GameType
    moveTime: number
    createdAt?: Date | string
    players?: UserGamePlayerUncheckedCreateNestedManyWithoutDurakGameInput
  }

  export type DurakGameUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    playersCount?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    cardCount?: IntFieldUpdateOperationsInput | number
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    moveTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserGamePlayerUpdateManyWithoutDurakGameNestedInput
  }

  export type DurakGameUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    playersCount?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    cardCount?: IntFieldUpdateOperationsInput | number
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    moveTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: UserGamePlayerUncheckedUpdateManyWithoutDurakGameNestedInput
  }

  export type DurakGameCreateManyInput = {
    number?: number
    uuid: string
    playersCount: number
    status?: $Enums.GameStatus
    cardCount: number
    gameType: $Enums.GameType
    moveTime: number
    createdAt?: Date | string
  }

  export type DurakGameUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    playersCount?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    cardCount?: IntFieldUpdateOperationsInput | number
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    moveTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DurakGameUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    playersCount?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    cardCount?: IntFieldUpdateOperationsInput | number
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    moveTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoCreateNestedOneWithoutUserInput
    UserGamePlayer?: UserGamePlayerCreateNestedManyWithoutUserInput
    UserGameStat?: UserGameStatCreateNestedOneWithoutUserInput
    UserProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoUncheckedCreateNestedOneWithoutUserInput
    UserGamePlayer?: UserGamePlayerUncheckedCreateNestedManyWithoutUserInput
    UserGameStat?: UserGameStatUncheckedCreateNestedOneWithoutUserInput
    UserProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUpdateOneWithoutUserNestedInput
    UserGamePlayer?: UserGamePlayerUpdateManyWithoutUserNestedInput
    UserGameStat?: UserGameStatUpdateOneWithoutUserNestedInput
    UserProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    num?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUncheckedUpdateOneWithoutUserNestedInput
    UserGamePlayer?: UserGamePlayerUncheckedUpdateManyWithoutUserNestedInput
    UserGameStat?: UserGameStatUncheckedUpdateOneWithoutUserNestedInput
    UserProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    num?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuthInfoCreateInput = {
    hash?: string | null
    yandexId?: string | null
    githubId?: number | null
    vkId?: number | null
    twitchId?: string | null
    User: UserCreateNestedOneWithoutUserAuthInfoInput
  }

  export type UserAuthInfoUncheckedCreateInput = {
    userId: string
    hash?: string | null
    yandexId?: string | null
    githubId?: number | null
    vkId?: number | null
    twitchId?: string | null
  }

  export type UserAuthInfoUpdateInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    yandexId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutUserAuthInfoNestedInput
  }

  export type UserAuthInfoUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    yandexId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAuthInfoCreateManyInput = {
    userId: string
    hash?: string | null
    yandexId?: string | null
    githubId?: number | null
    vkId?: number | null
    twitchId?: string | null
  }

  export type UserAuthInfoUpdateManyMutationInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    yandexId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAuthInfoUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    yandexId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGamePlayerCreateInput = {
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
    DurakGame: DurakGameCreateNestedOneWithoutPlayersInput
    User: UserCreateNestedOneWithoutUserGamePlayerInput
  }

  export type UserGamePlayerUncheckedCreateInput = {
    durakGameNumber: number
    userId: string
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
  }

  export type UserGamePlayerUpdateInput = {
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
    DurakGame?: DurakGameUpdateOneRequiredWithoutPlayersNestedInput
    User?: UserUpdateOneRequiredWithoutUserGamePlayerNestedInput
  }

  export type UserGamePlayerUncheckedUpdateInput = {
    durakGameNumber?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGamePlayerCreateManyInput = {
    durakGameNumber: number
    userId: string
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
  }

  export type UserGamePlayerUpdateManyMutationInput = {
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGamePlayerUncheckedUpdateManyInput = {
    durakGameNumber?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGameStatCreateInput = {
    wonGamesCount?: number
    lostGamesCount?: number
    unstableGamesCount?: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutUserGameStatInput
  }

  export type UserGameStatUncheckedCreateInput = {
    userId: string
    wonGamesCount?: number
    lostGamesCount?: number
    unstableGamesCount?: number
    createdAt?: Date | string
  }

  export type UserGameStatUpdateInput = {
    wonGamesCount?: IntFieldUpdateOperationsInput | number
    lostGamesCount?: IntFieldUpdateOperationsInput | number
    unstableGamesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserGameStatNestedInput
  }

  export type UserGameStatUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    wonGamesCount?: IntFieldUpdateOperationsInput | number
    lostGamesCount?: IntFieldUpdateOperationsInput | number
    unstableGamesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatCreateManyInput = {
    userId: string
    wonGamesCount?: number
    lostGamesCount?: number
    unstableGamesCount?: number
    createdAt?: Date | string
  }

  export type UserGameStatUpdateManyMutationInput = {
    wonGamesCount?: IntFieldUpdateOperationsInput | number
    lostGamesCount?: IntFieldUpdateOperationsInput | number
    unstableGamesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    wonGamesCount?: IntFieldUpdateOperationsInput | number
    lostGamesCount?: IntFieldUpdateOperationsInput | number
    unstableGamesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    personalLink?: string
    updatedAt?: Date | string
    photoUrl?: string | null
    nickname?: string
    connectStatus?: $Enums.ConnectStatus
    User: UserCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    personalLink?: string
    updatedAt?: Date | string
    photoUrl?: string | null
    nickname?: string
    connectStatus?: $Enums.ConnectStatus
  }

  export type UserProfileUpdateInput = {
    personalLink?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    connectStatus?: EnumConnectStatusFieldUpdateOperationsInput | $Enums.ConnectStatus
    User?: UserUpdateOneRequiredWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    personalLink?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    connectStatus?: EnumConnectStatusFieldUpdateOperationsInput | $Enums.ConnectStatus
  }

  export type UserProfileCreateManyInput = {
    userId: string
    personalLink?: string
    updatedAt?: Date | string
    photoUrl?: string | null
    nickname?: string
    connectStatus?: $Enums.ConnectStatus
  }

  export type UserProfileUpdateManyMutationInput = {
    personalLink?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    connectStatus?: EnumConnectStatusFieldUpdateOperationsInput | $Enums.ConnectStatus
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    personalLink?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    connectStatus?: EnumConnectStatusFieldUpdateOperationsInput | $Enums.ConnectStatus
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

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type EnumGameTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeFilter<$PrismaModel> | $Enums.GameType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type UserGamePlayerListRelationFilter = {
    every?: UserGamePlayerWhereInput
    some?: UserGamePlayerWhereInput
    none?: UserGamePlayerWhereInput
  }

  export type UserGamePlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DurakGameCountOrderByAggregateInput = {
    number?: SortOrder
    uuid?: SortOrder
    playersCount?: SortOrder
    status?: SortOrder
    cardCount?: SortOrder
    gameType?: SortOrder
    moveTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DurakGameAvgOrderByAggregateInput = {
    number?: SortOrder
    playersCount?: SortOrder
    cardCount?: SortOrder
    moveTime?: SortOrder
  }

  export type DurakGameMaxOrderByAggregateInput = {
    number?: SortOrder
    uuid?: SortOrder
    playersCount?: SortOrder
    status?: SortOrder
    cardCount?: SortOrder
    gameType?: SortOrder
    moveTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DurakGameMinOrderByAggregateInput = {
    number?: SortOrder
    uuid?: SortOrder
    playersCount?: SortOrder
    status?: SortOrder
    cardCount?: SortOrder
    gameType?: SortOrder
    moveTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DurakGameSumOrderByAggregateInput = {
    number?: SortOrder
    playersCount?: SortOrder
    cardCount?: SortOrder
    moveTime?: SortOrder
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

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumGameTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeWithAggregatesFilter<$PrismaModel> | $Enums.GameType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameTypeFilter<$PrismaModel>
    _max?: NestedEnumGameTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
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

  export type UserAuthInfoNullableRelationFilter = {
    is?: UserAuthInfoWhereInput | null
    isNot?: UserAuthInfoWhereInput | null
  }

  export type UserGameStatNullableRelationFilter = {
    is?: UserGameStatWhereInput | null
    isNot?: UserGameStatWhereInput | null
  }

  export type UserProfileNullableRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    num?: SortOrder
    id?: SortOrder
    email?: SortOrder
    currentGameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    num?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    num?: SortOrder
    id?: SortOrder
    email?: SortOrder
    currentGameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    num?: SortOrder
    id?: SortOrder
    email?: SortOrder
    currentGameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    num?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserAuthInfoCountOrderByAggregateInput = {
    userId?: SortOrder
    hash?: SortOrder
    yandexId?: SortOrder
    githubId?: SortOrder
    vkId?: SortOrder
    twitchId?: SortOrder
  }

  export type UserAuthInfoAvgOrderByAggregateInput = {
    githubId?: SortOrder
    vkId?: SortOrder
  }

  export type UserAuthInfoMaxOrderByAggregateInput = {
    userId?: SortOrder
    hash?: SortOrder
    yandexId?: SortOrder
    githubId?: SortOrder
    vkId?: SortOrder
    twitchId?: SortOrder
  }

  export type UserAuthInfoMinOrderByAggregateInput = {
    userId?: SortOrder
    hash?: SortOrder
    yandexId?: SortOrder
    githubId?: SortOrder
    vkId?: SortOrder
    twitchId?: SortOrder
  }

  export type UserAuthInfoSumOrderByAggregateInput = {
    githubId?: SortOrder
    vkId?: SortOrder
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

  export type EnumGameEndResultFilter<$PrismaModel = never> = {
    equals?: $Enums.GameEndResult | EnumGameEndResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    not?: NestedEnumGameEndResultFilter<$PrismaModel> | $Enums.GameEndResult
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DurakGameRelationFilter = {
    is?: DurakGameWhereInput
    isNot?: DurakGameWhereInput
  }

  export type UserGamePlayerDurakGameNumberIndexCompoundUniqueInput = {
    durakGameNumber: number
    index: number
  }

  export type UserGamePlayerCountOrderByAggregateInput = {
    durakGameNumber?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    result?: SortOrder
    winPlace?: SortOrder
    winRoundNumber?: SortOrder
    hasLost?: SortOrder
  }

  export type UserGamePlayerAvgOrderByAggregateInput = {
    durakGameNumber?: SortOrder
    index?: SortOrder
    winPlace?: SortOrder
    winRoundNumber?: SortOrder
  }

  export type UserGamePlayerMaxOrderByAggregateInput = {
    durakGameNumber?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    result?: SortOrder
    winPlace?: SortOrder
    winRoundNumber?: SortOrder
    hasLost?: SortOrder
  }

  export type UserGamePlayerMinOrderByAggregateInput = {
    durakGameNumber?: SortOrder
    userId?: SortOrder
    index?: SortOrder
    result?: SortOrder
    winPlace?: SortOrder
    winRoundNumber?: SortOrder
    hasLost?: SortOrder
  }

  export type UserGamePlayerSumOrderByAggregateInput = {
    durakGameNumber?: SortOrder
    index?: SortOrder
    winPlace?: SortOrder
    winRoundNumber?: SortOrder
  }

  export type EnumGameEndResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameEndResult | EnumGameEndResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    not?: NestedEnumGameEndResultWithAggregatesFilter<$PrismaModel> | $Enums.GameEndResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameEndResultFilter<$PrismaModel>
    _max?: NestedEnumGameEndResultFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserGameStatCountOrderByAggregateInput = {
    userId?: SortOrder
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGameStatAvgOrderByAggregateInput = {
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
  }

  export type UserGameStatMaxOrderByAggregateInput = {
    userId?: SortOrder
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGameStatMinOrderByAggregateInput = {
    userId?: SortOrder
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGameStatSumOrderByAggregateInput = {
    wonGamesCount?: SortOrder
    lostGamesCount?: SortOrder
    unstableGamesCount?: SortOrder
  }

  export type EnumConnectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectStatus | EnumConnectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectStatusFilter<$PrismaModel> | $Enums.ConnectStatus
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    personalLink?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrder
    nickname?: SortOrder
    connectStatus?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    personalLink?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrder
    nickname?: SortOrder
    connectStatus?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    personalLink?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrder
    nickname?: SortOrder
    connectStatus?: SortOrder
  }

  export type EnumConnectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectStatus | EnumConnectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectStatusFilter<$PrismaModel>
  }

  export type UserGamePlayerCreateNestedManyWithoutDurakGameInput = {
    create?: XOR<UserGamePlayerCreateWithoutDurakGameInput, UserGamePlayerUncheckedCreateWithoutDurakGameInput> | UserGamePlayerCreateWithoutDurakGameInput[] | UserGamePlayerUncheckedCreateWithoutDurakGameInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutDurakGameInput | UserGamePlayerCreateOrConnectWithoutDurakGameInput[]
    createMany?: UserGamePlayerCreateManyDurakGameInputEnvelope
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
  }

  export type UserGamePlayerUncheckedCreateNestedManyWithoutDurakGameInput = {
    create?: XOR<UserGamePlayerCreateWithoutDurakGameInput, UserGamePlayerUncheckedCreateWithoutDurakGameInput> | UserGamePlayerCreateWithoutDurakGameInput[] | UserGamePlayerUncheckedCreateWithoutDurakGameInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutDurakGameInput | UserGamePlayerCreateOrConnectWithoutDurakGameInput[]
    createMany?: UserGamePlayerCreateManyDurakGameInputEnvelope
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type EnumGameTypeFieldUpdateOperationsInput = {
    set?: $Enums.GameType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserGamePlayerUpdateManyWithoutDurakGameNestedInput = {
    create?: XOR<UserGamePlayerCreateWithoutDurakGameInput, UserGamePlayerUncheckedCreateWithoutDurakGameInput> | UserGamePlayerCreateWithoutDurakGameInput[] | UserGamePlayerUncheckedCreateWithoutDurakGameInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutDurakGameInput | UserGamePlayerCreateOrConnectWithoutDurakGameInput[]
    upsert?: UserGamePlayerUpsertWithWhereUniqueWithoutDurakGameInput | UserGamePlayerUpsertWithWhereUniqueWithoutDurakGameInput[]
    createMany?: UserGamePlayerCreateManyDurakGameInputEnvelope
    set?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    disconnect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    delete?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    update?: UserGamePlayerUpdateWithWhereUniqueWithoutDurakGameInput | UserGamePlayerUpdateWithWhereUniqueWithoutDurakGameInput[]
    updateMany?: UserGamePlayerUpdateManyWithWhereWithoutDurakGameInput | UserGamePlayerUpdateManyWithWhereWithoutDurakGameInput[]
    deleteMany?: UserGamePlayerScalarWhereInput | UserGamePlayerScalarWhereInput[]
  }

  export type UserGamePlayerUncheckedUpdateManyWithoutDurakGameNestedInput = {
    create?: XOR<UserGamePlayerCreateWithoutDurakGameInput, UserGamePlayerUncheckedCreateWithoutDurakGameInput> | UserGamePlayerCreateWithoutDurakGameInput[] | UserGamePlayerUncheckedCreateWithoutDurakGameInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutDurakGameInput | UserGamePlayerCreateOrConnectWithoutDurakGameInput[]
    upsert?: UserGamePlayerUpsertWithWhereUniqueWithoutDurakGameInput | UserGamePlayerUpsertWithWhereUniqueWithoutDurakGameInput[]
    createMany?: UserGamePlayerCreateManyDurakGameInputEnvelope
    set?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    disconnect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    delete?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    update?: UserGamePlayerUpdateWithWhereUniqueWithoutDurakGameInput | UserGamePlayerUpdateWithWhereUniqueWithoutDurakGameInput[]
    updateMany?: UserGamePlayerUpdateManyWithWhereWithoutDurakGameInput | UserGamePlayerUpdateManyWithWhereWithoutDurakGameInput[]
    deleteMany?: UserGamePlayerScalarWhereInput | UserGamePlayerScalarWhereInput[]
  }

  export type UserAuthInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthInfoCreateWithoutUserInput, UserAuthInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthInfoCreateOrConnectWithoutUserInput
    connect?: UserAuthInfoWhereUniqueInput
  }

  export type UserGamePlayerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGamePlayerCreateWithoutUserInput, UserGamePlayerUncheckedCreateWithoutUserInput> | UserGamePlayerCreateWithoutUserInput[] | UserGamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutUserInput | UserGamePlayerCreateOrConnectWithoutUserInput[]
    createMany?: UserGamePlayerCreateManyUserInputEnvelope
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
  }

  export type UserGameStatCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGameStatCreateWithoutUserInput, UserGameStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGameStatCreateOrConnectWithoutUserInput
    connect?: UserGameStatWhereUniqueInput
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserAuthInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthInfoCreateWithoutUserInput, UserAuthInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthInfoCreateOrConnectWithoutUserInput
    connect?: UserAuthInfoWhereUniqueInput
  }

  export type UserGamePlayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGamePlayerCreateWithoutUserInput, UserGamePlayerUncheckedCreateWithoutUserInput> | UserGamePlayerCreateWithoutUserInput[] | UserGamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutUserInput | UserGamePlayerCreateOrConnectWithoutUserInput[]
    createMany?: UserGamePlayerCreateManyUserInputEnvelope
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
  }

  export type UserGameStatUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserGameStatCreateWithoutUserInput, UserGameStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGameStatCreateOrConnectWithoutUserInput
    connect?: UserGameStatWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserAuthInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAuthInfoCreateWithoutUserInput, UserAuthInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthInfoCreateOrConnectWithoutUserInput
    upsert?: UserAuthInfoUpsertWithoutUserInput
    disconnect?: UserAuthInfoWhereInput | boolean
    delete?: UserAuthInfoWhereInput | boolean
    connect?: UserAuthInfoWhereUniqueInput
    update?: XOR<XOR<UserAuthInfoUpdateToOneWithWhereWithoutUserInput, UserAuthInfoUpdateWithoutUserInput>, UserAuthInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserGamePlayerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGamePlayerCreateWithoutUserInput, UserGamePlayerUncheckedCreateWithoutUserInput> | UserGamePlayerCreateWithoutUserInput[] | UserGamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutUserInput | UserGamePlayerCreateOrConnectWithoutUserInput[]
    upsert?: UserGamePlayerUpsertWithWhereUniqueWithoutUserInput | UserGamePlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGamePlayerCreateManyUserInputEnvelope
    set?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    disconnect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    delete?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    update?: UserGamePlayerUpdateWithWhereUniqueWithoutUserInput | UserGamePlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGamePlayerUpdateManyWithWhereWithoutUserInput | UserGamePlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGamePlayerScalarWhereInput | UserGamePlayerScalarWhereInput[]
  }

  export type UserGameStatUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGameStatCreateWithoutUserInput, UserGameStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGameStatCreateOrConnectWithoutUserInput
    upsert?: UserGameStatUpsertWithoutUserInput
    disconnect?: UserGameStatWhereInput | boolean
    delete?: UserGameStatWhereInput | boolean
    connect?: UserGameStatWhereUniqueInput
    update?: XOR<XOR<UserGameStatUpdateToOneWithWhereWithoutUserInput, UserGameStatUpdateWithoutUserInput>, UserGameStatUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAuthInfoCreateWithoutUserInput, UserAuthInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthInfoCreateOrConnectWithoutUserInput
    upsert?: UserAuthInfoUpsertWithoutUserInput
    disconnect?: UserAuthInfoWhereInput | boolean
    delete?: UserAuthInfoWhereInput | boolean
    connect?: UserAuthInfoWhereUniqueInput
    update?: XOR<XOR<UserAuthInfoUpdateToOneWithWhereWithoutUserInput, UserAuthInfoUpdateWithoutUserInput>, UserAuthInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserGamePlayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGamePlayerCreateWithoutUserInput, UserGamePlayerUncheckedCreateWithoutUserInput> | UserGamePlayerCreateWithoutUserInput[] | UserGamePlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGamePlayerCreateOrConnectWithoutUserInput | UserGamePlayerCreateOrConnectWithoutUserInput[]
    upsert?: UserGamePlayerUpsertWithWhereUniqueWithoutUserInput | UserGamePlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGamePlayerCreateManyUserInputEnvelope
    set?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    disconnect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    delete?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    connect?: UserGamePlayerWhereUniqueInput | UserGamePlayerWhereUniqueInput[]
    update?: UserGamePlayerUpdateWithWhereUniqueWithoutUserInput | UserGamePlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGamePlayerUpdateManyWithWhereWithoutUserInput | UserGamePlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGamePlayerScalarWhereInput | UserGamePlayerScalarWhereInput[]
  }

  export type UserGameStatUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserGameStatCreateWithoutUserInput, UserGameStatUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserGameStatCreateOrConnectWithoutUserInput
    upsert?: UserGameStatUpsertWithoutUserInput
    disconnect?: UserGameStatWhereInput | boolean
    delete?: UserGameStatWhereInput | boolean
    connect?: UserGameStatWhereUniqueInput
    update?: XOR<XOR<UserGameStatUpdateToOneWithWhereWithoutUserInput, UserGameStatUpdateWithoutUserInput>, UserGameStatUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserAuthInfoInput = {
    create?: XOR<UserCreateWithoutUserAuthInfoInput, UserUncheckedCreateWithoutUserAuthInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAuthInfoInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserAuthInfoNestedInput = {
    create?: XOR<UserCreateWithoutUserAuthInfoInput, UserUncheckedCreateWithoutUserAuthInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAuthInfoInput
    upsert?: UserUpsertWithoutUserAuthInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAuthInfoInput, UserUpdateWithoutUserAuthInfoInput>, UserUncheckedUpdateWithoutUserAuthInfoInput>
  }

  export type DurakGameCreateNestedOneWithoutPlayersInput = {
    create?: XOR<DurakGameCreateWithoutPlayersInput, DurakGameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: DurakGameCreateOrConnectWithoutPlayersInput
    connect?: DurakGameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserGamePlayerInput = {
    create?: XOR<UserCreateWithoutUserGamePlayerInput, UserUncheckedCreateWithoutUserGamePlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGamePlayerInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGameEndResultFieldUpdateOperationsInput = {
    set?: $Enums.GameEndResult
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DurakGameUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<DurakGameCreateWithoutPlayersInput, DurakGameUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: DurakGameCreateOrConnectWithoutPlayersInput
    upsert?: DurakGameUpsertWithoutPlayersInput
    connect?: DurakGameWhereUniqueInput
    update?: XOR<XOR<DurakGameUpdateToOneWithWhereWithoutPlayersInput, DurakGameUpdateWithoutPlayersInput>, DurakGameUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateOneRequiredWithoutUserGamePlayerNestedInput = {
    create?: XOR<UserCreateWithoutUserGamePlayerInput, UserUncheckedCreateWithoutUserGamePlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGamePlayerInput
    upsert?: UserUpsertWithoutUserGamePlayerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGamePlayerInput, UserUpdateWithoutUserGamePlayerInput>, UserUncheckedUpdateWithoutUserGamePlayerInput>
  }

  export type UserCreateNestedOneWithoutUserGameStatInput = {
    create?: XOR<UserCreateWithoutUserGameStatInput, UserUncheckedCreateWithoutUserGameStatInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGameStatInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserGameStatNestedInput = {
    create?: XOR<UserCreateWithoutUserGameStatInput, UserUncheckedCreateWithoutUserGameStatInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGameStatInput
    upsert?: UserUpsertWithoutUserGameStatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGameStatInput, UserUpdateWithoutUserGameStatInput>, UserUncheckedUpdateWithoutUserGameStatInput>
  }

  export type UserCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConnectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConnectStatus
  }

  export type UserUpdateOneRequiredWithoutUserProfileNestedInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    upsert?: UserUpsertWithoutUserProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProfileInput, UserUpdateWithoutUserProfileInput>, UserUncheckedUpdateWithoutUserProfileInput>
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

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumGameTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeFilter<$PrismaModel> | $Enums.GameType
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

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumGameTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameType | EnumGameTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameType[] | ListEnumGameTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameTypeWithAggregatesFilter<$PrismaModel> | $Enums.GameType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameTypeFilter<$PrismaModel>
    _max?: NestedEnumGameTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumGameEndResultFilter<$PrismaModel = never> = {
    equals?: $Enums.GameEndResult | EnumGameEndResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    not?: NestedEnumGameEndResultFilter<$PrismaModel> | $Enums.GameEndResult
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGameEndResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameEndResult | EnumGameEndResultFieldRefInput<$PrismaModel>
    in?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameEndResult[] | ListEnumGameEndResultFieldRefInput<$PrismaModel>
    not?: NestedEnumGameEndResultWithAggregatesFilter<$PrismaModel> | $Enums.GameEndResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameEndResultFilter<$PrismaModel>
    _max?: NestedEnumGameEndResultFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumConnectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectStatus | EnumConnectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectStatusFilter<$PrismaModel> | $Enums.ConnectStatus
  }

  export type NestedEnumConnectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectStatus | EnumConnectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectStatus[] | ListEnumConnectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectStatusFilter<$PrismaModel>
  }

  export type UserGamePlayerCreateWithoutDurakGameInput = {
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
    User: UserCreateNestedOneWithoutUserGamePlayerInput
  }

  export type UserGamePlayerUncheckedCreateWithoutDurakGameInput = {
    userId: string
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
  }

  export type UserGamePlayerCreateOrConnectWithoutDurakGameInput = {
    where: UserGamePlayerWhereUniqueInput
    create: XOR<UserGamePlayerCreateWithoutDurakGameInput, UserGamePlayerUncheckedCreateWithoutDurakGameInput>
  }

  export type UserGamePlayerCreateManyDurakGameInputEnvelope = {
    data: UserGamePlayerCreateManyDurakGameInput | UserGamePlayerCreateManyDurakGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGamePlayerUpsertWithWhereUniqueWithoutDurakGameInput = {
    where: UserGamePlayerWhereUniqueInput
    update: XOR<UserGamePlayerUpdateWithoutDurakGameInput, UserGamePlayerUncheckedUpdateWithoutDurakGameInput>
    create: XOR<UserGamePlayerCreateWithoutDurakGameInput, UserGamePlayerUncheckedCreateWithoutDurakGameInput>
  }

  export type UserGamePlayerUpdateWithWhereUniqueWithoutDurakGameInput = {
    where: UserGamePlayerWhereUniqueInput
    data: XOR<UserGamePlayerUpdateWithoutDurakGameInput, UserGamePlayerUncheckedUpdateWithoutDurakGameInput>
  }

  export type UserGamePlayerUpdateManyWithWhereWithoutDurakGameInput = {
    where: UserGamePlayerScalarWhereInput
    data: XOR<UserGamePlayerUpdateManyMutationInput, UserGamePlayerUncheckedUpdateManyWithoutDurakGameInput>
  }

  export type UserGamePlayerScalarWhereInput = {
    AND?: UserGamePlayerScalarWhereInput | UserGamePlayerScalarWhereInput[]
    OR?: UserGamePlayerScalarWhereInput[]
    NOT?: UserGamePlayerScalarWhereInput | UserGamePlayerScalarWhereInput[]
    durakGameNumber?: IntFilter<"UserGamePlayer"> | number
    userId?: StringFilter<"UserGamePlayer"> | string
    index?: IntFilter<"UserGamePlayer"> | number
    result?: EnumGameEndResultFilter<"UserGamePlayer"> | $Enums.GameEndResult
    winPlace?: IntNullableFilter<"UserGamePlayer"> | number | null
    winRoundNumber?: IntNullableFilter<"UserGamePlayer"> | number | null
    hasLost?: BoolFilter<"UserGamePlayer"> | boolean
  }

  export type UserAuthInfoCreateWithoutUserInput = {
    hash?: string | null
    yandexId?: string | null
    githubId?: number | null
    vkId?: number | null
    twitchId?: string | null
  }

  export type UserAuthInfoUncheckedCreateWithoutUserInput = {
    hash?: string | null
    yandexId?: string | null
    githubId?: number | null
    vkId?: number | null
    twitchId?: string | null
  }

  export type UserAuthInfoCreateOrConnectWithoutUserInput = {
    where: UserAuthInfoWhereUniqueInput
    create: XOR<UserAuthInfoCreateWithoutUserInput, UserAuthInfoUncheckedCreateWithoutUserInput>
  }

  export type UserGamePlayerCreateWithoutUserInput = {
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
    DurakGame: DurakGameCreateNestedOneWithoutPlayersInput
  }

  export type UserGamePlayerUncheckedCreateWithoutUserInput = {
    durakGameNumber: number
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
  }

  export type UserGamePlayerCreateOrConnectWithoutUserInput = {
    where: UserGamePlayerWhereUniqueInput
    create: XOR<UserGamePlayerCreateWithoutUserInput, UserGamePlayerUncheckedCreateWithoutUserInput>
  }

  export type UserGamePlayerCreateManyUserInputEnvelope = {
    data: UserGamePlayerCreateManyUserInput | UserGamePlayerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGameStatCreateWithoutUserInput = {
    wonGamesCount?: number
    lostGamesCount?: number
    unstableGamesCount?: number
    createdAt?: Date | string
  }

  export type UserGameStatUncheckedCreateWithoutUserInput = {
    wonGamesCount?: number
    lostGamesCount?: number
    unstableGamesCount?: number
    createdAt?: Date | string
  }

  export type UserGameStatCreateOrConnectWithoutUserInput = {
    where: UserGameStatWhereUniqueInput
    create: XOR<UserGameStatCreateWithoutUserInput, UserGameStatUncheckedCreateWithoutUserInput>
  }

  export type UserProfileCreateWithoutUserInput = {
    personalLink?: string
    updatedAt?: Date | string
    photoUrl?: string | null
    nickname?: string
    connectStatus?: $Enums.ConnectStatus
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    personalLink?: string
    updatedAt?: Date | string
    photoUrl?: string | null
    nickname?: string
    connectStatus?: $Enums.ConnectStatus
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserAuthInfoUpsertWithoutUserInput = {
    update: XOR<UserAuthInfoUpdateWithoutUserInput, UserAuthInfoUncheckedUpdateWithoutUserInput>
    create: XOR<UserAuthInfoCreateWithoutUserInput, UserAuthInfoUncheckedCreateWithoutUserInput>
    where?: UserAuthInfoWhereInput
  }

  export type UserAuthInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: UserAuthInfoWhereInput
    data: XOR<UserAuthInfoUpdateWithoutUserInput, UserAuthInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthInfoUpdateWithoutUserInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    yandexId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAuthInfoUncheckedUpdateWithoutUserInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    yandexId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableIntFieldUpdateOperationsInput | number | null
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    twitchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGamePlayerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGamePlayerWhereUniqueInput
    update: XOR<UserGamePlayerUpdateWithoutUserInput, UserGamePlayerUncheckedUpdateWithoutUserInput>
    create: XOR<UserGamePlayerCreateWithoutUserInput, UserGamePlayerUncheckedCreateWithoutUserInput>
  }

  export type UserGamePlayerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGamePlayerWhereUniqueInput
    data: XOR<UserGamePlayerUpdateWithoutUserInput, UserGamePlayerUncheckedUpdateWithoutUserInput>
  }

  export type UserGamePlayerUpdateManyWithWhereWithoutUserInput = {
    where: UserGamePlayerScalarWhereInput
    data: XOR<UserGamePlayerUpdateManyMutationInput, UserGamePlayerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameStatUpsertWithoutUserInput = {
    update: XOR<UserGameStatUpdateWithoutUserInput, UserGameStatUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameStatCreateWithoutUserInput, UserGameStatUncheckedCreateWithoutUserInput>
    where?: UserGameStatWhereInput
  }

  export type UserGameStatUpdateToOneWithWhereWithoutUserInput = {
    where?: UserGameStatWhereInput
    data: XOR<UserGameStatUpdateWithoutUserInput, UserGameStatUncheckedUpdateWithoutUserInput>
  }

  export type UserGameStatUpdateWithoutUserInput = {
    wonGamesCount?: IntFieldUpdateOperationsInput | number
    lostGamesCount?: IntFieldUpdateOperationsInput | number
    unstableGamesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatUncheckedUpdateWithoutUserInput = {
    wonGamesCount?: IntFieldUpdateOperationsInput | number
    lostGamesCount?: IntFieldUpdateOperationsInput | number
    unstableGamesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    personalLink?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    connectStatus?: EnumConnectStatusFieldUpdateOperationsInput | $Enums.ConnectStatus
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    personalLink?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    connectStatus?: EnumConnectStatusFieldUpdateOperationsInput | $Enums.ConnectStatus
  }

  export type UserCreateWithoutUserAuthInfoInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserGamePlayer?: UserGamePlayerCreateNestedManyWithoutUserInput
    UserGameStat?: UserGameStatCreateNestedOneWithoutUserInput
    UserProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAuthInfoInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserGamePlayer?: UserGamePlayerUncheckedCreateNestedManyWithoutUserInput
    UserGameStat?: UserGameStatUncheckedCreateNestedOneWithoutUserInput
    UserProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAuthInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAuthInfoInput, UserUncheckedCreateWithoutUserAuthInfoInput>
  }

  export type UserUpsertWithoutUserAuthInfoInput = {
    update: XOR<UserUpdateWithoutUserAuthInfoInput, UserUncheckedUpdateWithoutUserAuthInfoInput>
    create: XOR<UserCreateWithoutUserAuthInfoInput, UserUncheckedCreateWithoutUserAuthInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAuthInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAuthInfoInput, UserUncheckedUpdateWithoutUserAuthInfoInput>
  }

  export type UserUpdateWithoutUserAuthInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserGamePlayer?: UserGamePlayerUpdateManyWithoutUserNestedInput
    UserGameStat?: UserGameStatUpdateOneWithoutUserNestedInput
    UserProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAuthInfoInput = {
    num?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserGamePlayer?: UserGamePlayerUncheckedUpdateManyWithoutUserNestedInput
    UserGameStat?: UserGameStatUncheckedUpdateOneWithoutUserNestedInput
    UserProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DurakGameCreateWithoutPlayersInput = {
    number?: number
    uuid: string
    playersCount: number
    status?: $Enums.GameStatus
    cardCount: number
    gameType: $Enums.GameType
    moveTime: number
    createdAt?: Date | string
  }

  export type DurakGameUncheckedCreateWithoutPlayersInput = {
    number?: number
    uuid: string
    playersCount: number
    status?: $Enums.GameStatus
    cardCount: number
    gameType: $Enums.GameType
    moveTime: number
    createdAt?: Date | string
  }

  export type DurakGameCreateOrConnectWithoutPlayersInput = {
    where: DurakGameWhereUniqueInput
    create: XOR<DurakGameCreateWithoutPlayersInput, DurakGameUncheckedCreateWithoutPlayersInput>
  }

  export type UserCreateWithoutUserGamePlayerInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoCreateNestedOneWithoutUserInput
    UserGameStat?: UserGameStatCreateNestedOneWithoutUserInput
    UserProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGamePlayerInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoUncheckedCreateNestedOneWithoutUserInput
    UserGameStat?: UserGameStatUncheckedCreateNestedOneWithoutUserInput
    UserProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGamePlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGamePlayerInput, UserUncheckedCreateWithoutUserGamePlayerInput>
  }

  export type DurakGameUpsertWithoutPlayersInput = {
    update: XOR<DurakGameUpdateWithoutPlayersInput, DurakGameUncheckedUpdateWithoutPlayersInput>
    create: XOR<DurakGameCreateWithoutPlayersInput, DurakGameUncheckedCreateWithoutPlayersInput>
    where?: DurakGameWhereInput
  }

  export type DurakGameUpdateToOneWithWhereWithoutPlayersInput = {
    where?: DurakGameWhereInput
    data: XOR<DurakGameUpdateWithoutPlayersInput, DurakGameUncheckedUpdateWithoutPlayersInput>
  }

  export type DurakGameUpdateWithoutPlayersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    playersCount?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    cardCount?: IntFieldUpdateOperationsInput | number
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    moveTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DurakGameUncheckedUpdateWithoutPlayersInput = {
    number?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    playersCount?: IntFieldUpdateOperationsInput | number
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    cardCount?: IntFieldUpdateOperationsInput | number
    gameType?: EnumGameTypeFieldUpdateOperationsInput | $Enums.GameType
    moveTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutUserGamePlayerInput = {
    update: XOR<UserUpdateWithoutUserGamePlayerInput, UserUncheckedUpdateWithoutUserGamePlayerInput>
    create: XOR<UserCreateWithoutUserGamePlayerInput, UserUncheckedCreateWithoutUserGamePlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGamePlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGamePlayerInput, UserUncheckedUpdateWithoutUserGamePlayerInput>
  }

  export type UserUpdateWithoutUserGamePlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUpdateOneWithoutUserNestedInput
    UserGameStat?: UserGameStatUpdateOneWithoutUserNestedInput
    UserProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGamePlayerInput = {
    num?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUncheckedUpdateOneWithoutUserNestedInput
    UserGameStat?: UserGameStatUncheckedUpdateOneWithoutUserNestedInput
    UserProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUserGameStatInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoCreateNestedOneWithoutUserInput
    UserGamePlayer?: UserGamePlayerCreateNestedManyWithoutUserInput
    UserProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGameStatInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoUncheckedCreateNestedOneWithoutUserInput
    UserGamePlayer?: UserGamePlayerUncheckedCreateNestedManyWithoutUserInput
    UserProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGameStatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGameStatInput, UserUncheckedCreateWithoutUserGameStatInput>
  }

  export type UserUpsertWithoutUserGameStatInput = {
    update: XOR<UserUpdateWithoutUserGameStatInput, UserUncheckedUpdateWithoutUserGameStatInput>
    create: XOR<UserCreateWithoutUserGameStatInput, UserUncheckedCreateWithoutUserGameStatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGameStatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGameStatInput, UserUncheckedUpdateWithoutUserGameStatInput>
  }

  export type UserUpdateWithoutUserGameStatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUpdateOneWithoutUserNestedInput
    UserGamePlayer?: UserGamePlayerUpdateManyWithoutUserNestedInput
    UserProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGameStatInput = {
    num?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUncheckedUpdateOneWithoutUserNestedInput
    UserGamePlayer?: UserGamePlayerUncheckedUpdateManyWithoutUserNestedInput
    UserProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUserProfileInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoCreateNestedOneWithoutUserInput
    UserGamePlayer?: UserGamePlayerCreateNestedManyWithoutUserInput
    UserGameStat?: UserGameStatCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProfileInput = {
    num?: number
    id?: string
    email?: string | null
    currentGameId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserAuthInfo?: UserAuthInfoUncheckedCreateNestedOneWithoutUserInput
    UserGamePlayer?: UserGamePlayerUncheckedCreateNestedManyWithoutUserInput
    UserGameStat?: UserGameStatUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
  }

  export type UserUpsertWithoutUserProfileInput = {
    update: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUpdateOneWithoutUserNestedInput
    UserGamePlayer?: UserGamePlayerUpdateManyWithoutUserNestedInput
    UserGameStat?: UserGameStatUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProfileInput = {
    num?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    currentGameId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserAuthInfo?: UserAuthInfoUncheckedUpdateOneWithoutUserNestedInput
    UserGamePlayer?: UserGamePlayerUncheckedUpdateManyWithoutUserNestedInput
    UserGameStat?: UserGameStatUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserGamePlayerCreateManyDurakGameInput = {
    userId: string
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
  }

  export type UserGamePlayerUpdateWithoutDurakGameInput = {
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutUserGamePlayerNestedInput
  }

  export type UserGamePlayerUncheckedUpdateWithoutDurakGameInput = {
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGamePlayerUncheckedUpdateManyWithoutDurakGameInput = {
    userId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGamePlayerCreateManyUserInput = {
    durakGameNumber: number
    index: number
    result: $Enums.GameEndResult
    winPlace?: number | null
    winRoundNumber?: number | null
    hasLost?: boolean
  }

  export type UserGamePlayerUpdateWithoutUserInput = {
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
    DurakGame?: DurakGameUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type UserGamePlayerUncheckedUpdateWithoutUserInput = {
    durakGameNumber?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGamePlayerUncheckedUpdateManyWithoutUserInput = {
    durakGameNumber?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    result?: EnumGameEndResultFieldUpdateOperationsInput | $Enums.GameEndResult
    winPlace?: NullableIntFieldUpdateOperationsInput | number | null
    winRoundNumber?: NullableIntFieldUpdateOperationsInput | number | null
    hasLost?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DurakGameDefaultArgs instead
     */
    export type DurakGameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DurakGameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAuthInfoDefaultArgs instead
     */
    export type UserAuthInfoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserAuthInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserGamePlayerDefaultArgs instead
     */
    export type UserGamePlayerArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserGamePlayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserGameStatDefaultArgs instead
     */
    export type UserGameStatArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserGameStatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>

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