
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
 * Model SavedOutput
 * 
 */
export type SavedOutput = $Result.DefaultSelection<Prisma.$SavedOutputPayload>
/**
 * Model EscapeRoomRun
 * 
 */
export type EscapeRoomRun = $Result.DefaultSelection<Prisma.$EscapeRoomRunPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SavedOutputs
 * const savedOutputs = await prisma.savedOutput.findMany()
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
   * // Fetch zero or more SavedOutputs
   * const savedOutputs = await prisma.savedOutput.findMany()
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
   * `prisma.savedOutput`: Exposes CRUD operations for the **SavedOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedOutputs
    * const savedOutputs = await prisma.savedOutput.findMany()
    * ```
    */
  get savedOutput(): Prisma.SavedOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escapeRoomRun`: Exposes CRUD operations for the **EscapeRoomRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EscapeRoomRuns
    * const escapeRoomRuns = await prisma.escapeRoomRun.findMany()
    * ```
    */
  get escapeRoomRun(): Prisma.EscapeRoomRunDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    SavedOutput: 'SavedOutput',
    EscapeRoomRun: 'EscapeRoomRun'
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
      modelProps: "savedOutput" | "escapeRoomRun"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SavedOutput: {
        payload: Prisma.$SavedOutputPayload<ExtArgs>
        fields: Prisma.SavedOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>
          }
          findFirst: {
            args: Prisma.SavedOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>
          }
          findMany: {
            args: Prisma.SavedOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>[]
          }
          create: {
            args: Prisma.SavedOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>
          }
          createMany: {
            args: Prisma.SavedOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedOutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>[]
          }
          delete: {
            args: Prisma.SavedOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>
          }
          update: {
            args: Prisma.SavedOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>
          }
          deleteMany: {
            args: Prisma.SavedOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedOutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>[]
          }
          upsert: {
            args: Prisma.SavedOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedOutputPayload>
          }
          aggregate: {
            args: Prisma.SavedOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedOutput>
          }
          groupBy: {
            args: Prisma.SavedOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedOutputCountArgs<ExtArgs>
            result: $Utils.Optional<SavedOutputCountAggregateOutputType> | number
          }
        }
      }
      EscapeRoomRun: {
        payload: Prisma.$EscapeRoomRunPayload<ExtArgs>
        fields: Prisma.EscapeRoomRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscapeRoomRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscapeRoomRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>
          }
          findFirst: {
            args: Prisma.EscapeRoomRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscapeRoomRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>
          }
          findMany: {
            args: Prisma.EscapeRoomRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>[]
          }
          create: {
            args: Prisma.EscapeRoomRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>
          }
          createMany: {
            args: Prisma.EscapeRoomRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EscapeRoomRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>[]
          }
          delete: {
            args: Prisma.EscapeRoomRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>
          }
          update: {
            args: Prisma.EscapeRoomRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>
          }
          deleteMany: {
            args: Prisma.EscapeRoomRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscapeRoomRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EscapeRoomRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>[]
          }
          upsert: {
            args: Prisma.EscapeRoomRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscapeRoomRunPayload>
          }
          aggregate: {
            args: Prisma.EscapeRoomRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscapeRoomRun>
          }
          groupBy: {
            args: Prisma.EscapeRoomRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscapeRoomRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.EscapeRoomRunCountArgs<ExtArgs>
            result: $Utils.Optional<EscapeRoomRunCountAggregateOutputType> | number
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
    savedOutput?: SavedOutputOmit
    escapeRoomRun?: EscapeRoomRunOmit
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
   * Models
   */

  /**
   * Model SavedOutput
   */

  export type AggregateSavedOutput = {
    _count: SavedOutputCountAggregateOutputType | null
    _min: SavedOutputMinAggregateOutputType | null
    _max: SavedOutputMaxAggregateOutputType | null
  }

  export type SavedOutputMinAggregateOutputType = {
    id: string | null
    name: string | null
    htmlCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedOutputMaxAggregateOutputType = {
    id: string | null
    name: string | null
    htmlCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedOutputCountAggregateOutputType = {
    id: number
    name: number
    htmlCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavedOutputMinAggregateInputType = {
    id?: true
    name?: true
    htmlCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedOutputMaxAggregateInputType = {
    id?: true
    name?: true
    htmlCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedOutputCountAggregateInputType = {
    id?: true
    name?: true
    htmlCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavedOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedOutput to aggregate.
     */
    where?: SavedOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOutputs to fetch.
     */
    orderBy?: SavedOutputOrderByWithRelationInput | SavedOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedOutputs
    **/
    _count?: true | SavedOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedOutputMaxAggregateInputType
  }

  export type GetSavedOutputAggregateType<T extends SavedOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedOutput[P]>
      : GetScalarType<T[P], AggregateSavedOutput[P]>
  }




  export type SavedOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedOutputWhereInput
    orderBy?: SavedOutputOrderByWithAggregationInput | SavedOutputOrderByWithAggregationInput[]
    by: SavedOutputScalarFieldEnum[] | SavedOutputScalarFieldEnum
    having?: SavedOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedOutputCountAggregateInputType | true
    _min?: SavedOutputMinAggregateInputType
    _max?: SavedOutputMaxAggregateInputType
  }

  export type SavedOutputGroupByOutputType = {
    id: string
    name: string
    htmlCode: string
    createdAt: Date
    updatedAt: Date
    _count: SavedOutputCountAggregateOutputType | null
    _min: SavedOutputMinAggregateOutputType | null
    _max: SavedOutputMaxAggregateOutputType | null
  }

  type GetSavedOutputGroupByPayload<T extends SavedOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedOutputGroupByOutputType[P]>
            : GetScalarType<T[P], SavedOutputGroupByOutputType[P]>
        }
      >
    >


  export type SavedOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedOutput"]>

  export type SavedOutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedOutput"]>

  export type SavedOutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["savedOutput"]>

  export type SavedOutputSelectScalar = {
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SavedOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "htmlCode" | "createdAt" | "updatedAt", ExtArgs["result"]["savedOutput"]>

  export type $SavedOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedOutput"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      htmlCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savedOutput"]>
    composites: {}
  }

  type SavedOutputGetPayload<S extends boolean | null | undefined | SavedOutputDefaultArgs> = $Result.GetResult<Prisma.$SavedOutputPayload, S>

  type SavedOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedOutputCountAggregateInputType | true
    }

  export interface SavedOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedOutput'], meta: { name: 'SavedOutput' } }
    /**
     * Find zero or one SavedOutput that matches the filter.
     * @param {SavedOutputFindUniqueArgs} args - Arguments to find a SavedOutput
     * @example
     * // Get one SavedOutput
     * const savedOutput = await prisma.savedOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedOutputFindUniqueArgs>(args: SelectSubset<T, SavedOutputFindUniqueArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedOutputFindUniqueOrThrowArgs} args - Arguments to find a SavedOutput
     * @example
     * // Get one SavedOutput
     * const savedOutput = await prisma.savedOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputFindFirstArgs} args - Arguments to find a SavedOutput
     * @example
     * // Get one SavedOutput
     * const savedOutput = await prisma.savedOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedOutputFindFirstArgs>(args?: SelectSubset<T, SavedOutputFindFirstArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputFindFirstOrThrowArgs} args - Arguments to find a SavedOutput
     * @example
     * // Get one SavedOutput
     * const savedOutput = await prisma.savedOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedOutputs
     * const savedOutputs = await prisma.savedOutput.findMany()
     * 
     * // Get first 10 SavedOutputs
     * const savedOutputs = await prisma.savedOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedOutputWithIdOnly = await prisma.savedOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedOutputFindManyArgs>(args?: SelectSubset<T, SavedOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedOutput.
     * @param {SavedOutputCreateArgs} args - Arguments to create a SavedOutput.
     * @example
     * // Create one SavedOutput
     * const SavedOutput = await prisma.savedOutput.create({
     *   data: {
     *     // ... data to create a SavedOutput
     *   }
     * })
     * 
     */
    create<T extends SavedOutputCreateArgs>(args: SelectSubset<T, SavedOutputCreateArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedOutputs.
     * @param {SavedOutputCreateManyArgs} args - Arguments to create many SavedOutputs.
     * @example
     * // Create many SavedOutputs
     * const savedOutput = await prisma.savedOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedOutputCreateManyArgs>(args?: SelectSubset<T, SavedOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedOutputs and returns the data saved in the database.
     * @param {SavedOutputCreateManyAndReturnArgs} args - Arguments to create many SavedOutputs.
     * @example
     * // Create many SavedOutputs
     * const savedOutput = await prisma.savedOutput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedOutputs and only return the `id`
     * const savedOutputWithIdOnly = await prisma.savedOutput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedOutputCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedOutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedOutput.
     * @param {SavedOutputDeleteArgs} args - Arguments to delete one SavedOutput.
     * @example
     * // Delete one SavedOutput
     * const SavedOutput = await prisma.savedOutput.delete({
     *   where: {
     *     // ... filter to delete one SavedOutput
     *   }
     * })
     * 
     */
    delete<T extends SavedOutputDeleteArgs>(args: SelectSubset<T, SavedOutputDeleteArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedOutput.
     * @param {SavedOutputUpdateArgs} args - Arguments to update one SavedOutput.
     * @example
     * // Update one SavedOutput
     * const savedOutput = await prisma.savedOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedOutputUpdateArgs>(args: SelectSubset<T, SavedOutputUpdateArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedOutputs.
     * @param {SavedOutputDeleteManyArgs} args - Arguments to filter SavedOutputs to delete.
     * @example
     * // Delete a few SavedOutputs
     * const { count } = await prisma.savedOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedOutputDeleteManyArgs>(args?: SelectSubset<T, SavedOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedOutputs
     * const savedOutput = await prisma.savedOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedOutputUpdateManyArgs>(args: SelectSubset<T, SavedOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedOutputs and returns the data updated in the database.
     * @param {SavedOutputUpdateManyAndReturnArgs} args - Arguments to update many SavedOutputs.
     * @example
     * // Update many SavedOutputs
     * const savedOutput = await prisma.savedOutput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedOutputs and only return the `id`
     * const savedOutputWithIdOnly = await prisma.savedOutput.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedOutputUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedOutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedOutput.
     * @param {SavedOutputUpsertArgs} args - Arguments to update or create a SavedOutput.
     * @example
     * // Update or create a SavedOutput
     * const savedOutput = await prisma.savedOutput.upsert({
     *   create: {
     *     // ... data to create a SavedOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedOutput we want to update
     *   }
     * })
     */
    upsert<T extends SavedOutputUpsertArgs>(args: SelectSubset<T, SavedOutputUpsertArgs<ExtArgs>>): Prisma__SavedOutputClient<$Result.GetResult<Prisma.$SavedOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputCountArgs} args - Arguments to filter SavedOutputs to count.
     * @example
     * // Count the number of SavedOutputs
     * const count = await prisma.savedOutput.count({
     *   where: {
     *     // ... the filter for the SavedOutputs we want to count
     *   }
     * })
    **/
    count<T extends SavedOutputCountArgs>(
      args?: Subset<T, SavedOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedOutputAggregateArgs>(args: Subset<T, SavedOutputAggregateArgs>): Prisma.PrismaPromise<GetSavedOutputAggregateType<T>>

    /**
     * Group by SavedOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedOutputGroupByArgs} args - Group by arguments.
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
      T extends SavedOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedOutputGroupByArgs['orderBy'] }
        : { orderBy?: SavedOutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedOutput model
   */
  readonly fields: SavedOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SavedOutput model
   */
  interface SavedOutputFieldRefs {
    readonly id: FieldRef<"SavedOutput", 'String'>
    readonly name: FieldRef<"SavedOutput", 'String'>
    readonly htmlCode: FieldRef<"SavedOutput", 'String'>
    readonly createdAt: FieldRef<"SavedOutput", 'DateTime'>
    readonly updatedAt: FieldRef<"SavedOutput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedOutput findUnique
   */
  export type SavedOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * Filter, which SavedOutput to fetch.
     */
    where: SavedOutputWhereUniqueInput
  }

  /**
   * SavedOutput findUniqueOrThrow
   */
  export type SavedOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * Filter, which SavedOutput to fetch.
     */
    where: SavedOutputWhereUniqueInput
  }

  /**
   * SavedOutput findFirst
   */
  export type SavedOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * Filter, which SavedOutput to fetch.
     */
    where?: SavedOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOutputs to fetch.
     */
    orderBy?: SavedOutputOrderByWithRelationInput | SavedOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedOutputs.
     */
    cursor?: SavedOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedOutputs.
     */
    distinct?: SavedOutputScalarFieldEnum | SavedOutputScalarFieldEnum[]
  }

  /**
   * SavedOutput findFirstOrThrow
   */
  export type SavedOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * Filter, which SavedOutput to fetch.
     */
    where?: SavedOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOutputs to fetch.
     */
    orderBy?: SavedOutputOrderByWithRelationInput | SavedOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedOutputs.
     */
    cursor?: SavedOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedOutputs.
     */
    distinct?: SavedOutputScalarFieldEnum | SavedOutputScalarFieldEnum[]
  }

  /**
   * SavedOutput findMany
   */
  export type SavedOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * Filter, which SavedOutputs to fetch.
     */
    where?: SavedOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedOutputs to fetch.
     */
    orderBy?: SavedOutputOrderByWithRelationInput | SavedOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedOutputs.
     */
    cursor?: SavedOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedOutputs.
     */
    skip?: number
    distinct?: SavedOutputScalarFieldEnum | SavedOutputScalarFieldEnum[]
  }

  /**
   * SavedOutput create
   */
  export type SavedOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * The data needed to create a SavedOutput.
     */
    data: XOR<SavedOutputCreateInput, SavedOutputUncheckedCreateInput>
  }

  /**
   * SavedOutput createMany
   */
  export type SavedOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedOutputs.
     */
    data: SavedOutputCreateManyInput | SavedOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedOutput createManyAndReturn
   */
  export type SavedOutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * The data used to create many SavedOutputs.
     */
    data: SavedOutputCreateManyInput | SavedOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedOutput update
   */
  export type SavedOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * The data needed to update a SavedOutput.
     */
    data: XOR<SavedOutputUpdateInput, SavedOutputUncheckedUpdateInput>
    /**
     * Choose, which SavedOutput to update.
     */
    where: SavedOutputWhereUniqueInput
  }

  /**
   * SavedOutput updateMany
   */
  export type SavedOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedOutputs.
     */
    data: XOR<SavedOutputUpdateManyMutationInput, SavedOutputUncheckedUpdateManyInput>
    /**
     * Filter which SavedOutputs to update
     */
    where?: SavedOutputWhereInput
    /**
     * Limit how many SavedOutputs to update.
     */
    limit?: number
  }

  /**
   * SavedOutput updateManyAndReturn
   */
  export type SavedOutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * The data used to update SavedOutputs.
     */
    data: XOR<SavedOutputUpdateManyMutationInput, SavedOutputUncheckedUpdateManyInput>
    /**
     * Filter which SavedOutputs to update
     */
    where?: SavedOutputWhereInput
    /**
     * Limit how many SavedOutputs to update.
     */
    limit?: number
  }

  /**
   * SavedOutput upsert
   */
  export type SavedOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * The filter to search for the SavedOutput to update in case it exists.
     */
    where: SavedOutputWhereUniqueInput
    /**
     * In case the SavedOutput found by the `where` argument doesn't exist, create a new SavedOutput with this data.
     */
    create: XOR<SavedOutputCreateInput, SavedOutputUncheckedCreateInput>
    /**
     * In case the SavedOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedOutputUpdateInput, SavedOutputUncheckedUpdateInput>
  }

  /**
   * SavedOutput delete
   */
  export type SavedOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
    /**
     * Filter which SavedOutput to delete.
     */
    where: SavedOutputWhereUniqueInput
  }

  /**
   * SavedOutput deleteMany
   */
  export type SavedOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedOutputs to delete
     */
    where?: SavedOutputWhereInput
    /**
     * Limit how many SavedOutputs to delete.
     */
    limit?: number
  }

  /**
   * SavedOutput without action
   */
  export type SavedOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedOutput
     */
    select?: SavedOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedOutput
     */
    omit?: SavedOutputOmit<ExtArgs> | null
  }


  /**
   * Model EscapeRoomRun
   */

  export type AggregateEscapeRoomRun = {
    _count: EscapeRoomRunCountAggregateOutputType | null
    _avg: EscapeRoomRunAvgAggregateOutputType | null
    _sum: EscapeRoomRunSumAggregateOutputType | null
    _min: EscapeRoomRunMinAggregateOutputType | null
    _max: EscapeRoomRunMaxAggregateOutputType | null
  }

  export type EscapeRoomRunAvgAggregateOutputType = {
    completedStages: number | null
    totalStages: number | null
    timeUsed: number | null
    totalTime: number | null
    successRate: number | null
  }

  export type EscapeRoomRunSumAggregateOutputType = {
    completedStages: number[]
    totalStages: number | null
    timeUsed: number | null
    totalTime: number | null
    successRate: number | null
  }

  export type EscapeRoomRunMinAggregateOutputType = {
    id: string | null
    name: string | null
    htmlCode: string | null
    totalStages: number | null
    timeUsed: number | null
    totalTime: number | null
    isCompleted: boolean | null
    successRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscapeRoomRunMaxAggregateOutputType = {
    id: string | null
    name: string | null
    htmlCode: string | null
    totalStages: number | null
    timeUsed: number | null
    totalTime: number | null
    isCompleted: boolean | null
    successRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EscapeRoomRunCountAggregateOutputType = {
    id: number
    name: number
    htmlCode: number
    completedStages: number
    totalStages: number
    timeUsed: number
    totalTime: number
    isCompleted: number
    successRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EscapeRoomRunAvgAggregateInputType = {
    completedStages?: true
    totalStages?: true
    timeUsed?: true
    totalTime?: true
    successRate?: true
  }

  export type EscapeRoomRunSumAggregateInputType = {
    completedStages?: true
    totalStages?: true
    timeUsed?: true
    totalTime?: true
    successRate?: true
  }

  export type EscapeRoomRunMinAggregateInputType = {
    id?: true
    name?: true
    htmlCode?: true
    totalStages?: true
    timeUsed?: true
    totalTime?: true
    isCompleted?: true
    successRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscapeRoomRunMaxAggregateInputType = {
    id?: true
    name?: true
    htmlCode?: true
    totalStages?: true
    timeUsed?: true
    totalTime?: true
    isCompleted?: true
    successRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EscapeRoomRunCountAggregateInputType = {
    id?: true
    name?: true
    htmlCode?: true
    completedStages?: true
    totalStages?: true
    timeUsed?: true
    totalTime?: true
    isCompleted?: true
    successRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EscapeRoomRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscapeRoomRun to aggregate.
     */
    where?: EscapeRoomRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRoomRuns to fetch.
     */
    orderBy?: EscapeRoomRunOrderByWithRelationInput | EscapeRoomRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscapeRoomRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRoomRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRoomRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EscapeRoomRuns
    **/
    _count?: true | EscapeRoomRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscapeRoomRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscapeRoomRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscapeRoomRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscapeRoomRunMaxAggregateInputType
  }

  export type GetEscapeRoomRunAggregateType<T extends EscapeRoomRunAggregateArgs> = {
        [P in keyof T & keyof AggregateEscapeRoomRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscapeRoomRun[P]>
      : GetScalarType<T[P], AggregateEscapeRoomRun[P]>
  }




  export type EscapeRoomRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscapeRoomRunWhereInput
    orderBy?: EscapeRoomRunOrderByWithAggregationInput | EscapeRoomRunOrderByWithAggregationInput[]
    by: EscapeRoomRunScalarFieldEnum[] | EscapeRoomRunScalarFieldEnum
    having?: EscapeRoomRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscapeRoomRunCountAggregateInputType | true
    _avg?: EscapeRoomRunAvgAggregateInputType
    _sum?: EscapeRoomRunSumAggregateInputType
    _min?: EscapeRoomRunMinAggregateInputType
    _max?: EscapeRoomRunMaxAggregateInputType
  }

  export type EscapeRoomRunGroupByOutputType = {
    id: string
    name: string
    htmlCode: string
    completedStages: number[]
    totalStages: number
    timeUsed: number
    totalTime: number
    isCompleted: boolean
    successRate: number
    createdAt: Date
    updatedAt: Date
    _count: EscapeRoomRunCountAggregateOutputType | null
    _avg: EscapeRoomRunAvgAggregateOutputType | null
    _sum: EscapeRoomRunSumAggregateOutputType | null
    _min: EscapeRoomRunMinAggregateOutputType | null
    _max: EscapeRoomRunMaxAggregateOutputType | null
  }

  type GetEscapeRoomRunGroupByPayload<T extends EscapeRoomRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscapeRoomRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscapeRoomRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscapeRoomRunGroupByOutputType[P]>
            : GetScalarType<T[P], EscapeRoomRunGroupByOutputType[P]>
        }
      >
    >


  export type EscapeRoomRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    completedStages?: boolean
    totalStages?: boolean
    timeUsed?: boolean
    totalTime?: boolean
    isCompleted?: boolean
    successRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escapeRoomRun"]>

  export type EscapeRoomRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    completedStages?: boolean
    totalStages?: boolean
    timeUsed?: boolean
    totalTime?: boolean
    isCompleted?: boolean
    successRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escapeRoomRun"]>

  export type EscapeRoomRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    completedStages?: boolean
    totalStages?: boolean
    timeUsed?: boolean
    totalTime?: boolean
    isCompleted?: boolean
    successRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["escapeRoomRun"]>

  export type EscapeRoomRunSelectScalar = {
    id?: boolean
    name?: boolean
    htmlCode?: boolean
    completedStages?: boolean
    totalStages?: boolean
    timeUsed?: boolean
    totalTime?: boolean
    isCompleted?: boolean
    successRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EscapeRoomRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "htmlCode" | "completedStages" | "totalStages" | "timeUsed" | "totalTime" | "isCompleted" | "successRate" | "createdAt" | "updatedAt", ExtArgs["result"]["escapeRoomRun"]>

  export type $EscapeRoomRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EscapeRoomRun"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      htmlCode: string
      completedStages: number[]
      totalStages: number
      timeUsed: number
      totalTime: number
      isCompleted: boolean
      successRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["escapeRoomRun"]>
    composites: {}
  }

  type EscapeRoomRunGetPayload<S extends boolean | null | undefined | EscapeRoomRunDefaultArgs> = $Result.GetResult<Prisma.$EscapeRoomRunPayload, S>

  type EscapeRoomRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscapeRoomRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscapeRoomRunCountAggregateInputType | true
    }

  export interface EscapeRoomRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EscapeRoomRun'], meta: { name: 'EscapeRoomRun' } }
    /**
     * Find zero or one EscapeRoomRun that matches the filter.
     * @param {EscapeRoomRunFindUniqueArgs} args - Arguments to find a EscapeRoomRun
     * @example
     * // Get one EscapeRoomRun
     * const escapeRoomRun = await prisma.escapeRoomRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscapeRoomRunFindUniqueArgs>(args: SelectSubset<T, EscapeRoomRunFindUniqueArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EscapeRoomRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscapeRoomRunFindUniqueOrThrowArgs} args - Arguments to find a EscapeRoomRun
     * @example
     * // Get one EscapeRoomRun
     * const escapeRoomRun = await prisma.escapeRoomRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscapeRoomRunFindUniqueOrThrowArgs>(args: SelectSubset<T, EscapeRoomRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscapeRoomRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunFindFirstArgs} args - Arguments to find a EscapeRoomRun
     * @example
     * // Get one EscapeRoomRun
     * const escapeRoomRun = await prisma.escapeRoomRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscapeRoomRunFindFirstArgs>(args?: SelectSubset<T, EscapeRoomRunFindFirstArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscapeRoomRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunFindFirstOrThrowArgs} args - Arguments to find a EscapeRoomRun
     * @example
     * // Get one EscapeRoomRun
     * const escapeRoomRun = await prisma.escapeRoomRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscapeRoomRunFindFirstOrThrowArgs>(args?: SelectSubset<T, EscapeRoomRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EscapeRoomRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EscapeRoomRuns
     * const escapeRoomRuns = await prisma.escapeRoomRun.findMany()
     * 
     * // Get first 10 EscapeRoomRuns
     * const escapeRoomRuns = await prisma.escapeRoomRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escapeRoomRunWithIdOnly = await prisma.escapeRoomRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscapeRoomRunFindManyArgs>(args?: SelectSubset<T, EscapeRoomRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EscapeRoomRun.
     * @param {EscapeRoomRunCreateArgs} args - Arguments to create a EscapeRoomRun.
     * @example
     * // Create one EscapeRoomRun
     * const EscapeRoomRun = await prisma.escapeRoomRun.create({
     *   data: {
     *     // ... data to create a EscapeRoomRun
     *   }
     * })
     * 
     */
    create<T extends EscapeRoomRunCreateArgs>(args: SelectSubset<T, EscapeRoomRunCreateArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EscapeRoomRuns.
     * @param {EscapeRoomRunCreateManyArgs} args - Arguments to create many EscapeRoomRuns.
     * @example
     * // Create many EscapeRoomRuns
     * const escapeRoomRun = await prisma.escapeRoomRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscapeRoomRunCreateManyArgs>(args?: SelectSubset<T, EscapeRoomRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EscapeRoomRuns and returns the data saved in the database.
     * @param {EscapeRoomRunCreateManyAndReturnArgs} args - Arguments to create many EscapeRoomRuns.
     * @example
     * // Create many EscapeRoomRuns
     * const escapeRoomRun = await prisma.escapeRoomRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EscapeRoomRuns and only return the `id`
     * const escapeRoomRunWithIdOnly = await prisma.escapeRoomRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EscapeRoomRunCreateManyAndReturnArgs>(args?: SelectSubset<T, EscapeRoomRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EscapeRoomRun.
     * @param {EscapeRoomRunDeleteArgs} args - Arguments to delete one EscapeRoomRun.
     * @example
     * // Delete one EscapeRoomRun
     * const EscapeRoomRun = await prisma.escapeRoomRun.delete({
     *   where: {
     *     // ... filter to delete one EscapeRoomRun
     *   }
     * })
     * 
     */
    delete<T extends EscapeRoomRunDeleteArgs>(args: SelectSubset<T, EscapeRoomRunDeleteArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EscapeRoomRun.
     * @param {EscapeRoomRunUpdateArgs} args - Arguments to update one EscapeRoomRun.
     * @example
     * // Update one EscapeRoomRun
     * const escapeRoomRun = await prisma.escapeRoomRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscapeRoomRunUpdateArgs>(args: SelectSubset<T, EscapeRoomRunUpdateArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EscapeRoomRuns.
     * @param {EscapeRoomRunDeleteManyArgs} args - Arguments to filter EscapeRoomRuns to delete.
     * @example
     * // Delete a few EscapeRoomRuns
     * const { count } = await prisma.escapeRoomRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscapeRoomRunDeleteManyArgs>(args?: SelectSubset<T, EscapeRoomRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscapeRoomRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EscapeRoomRuns
     * const escapeRoomRun = await prisma.escapeRoomRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscapeRoomRunUpdateManyArgs>(args: SelectSubset<T, EscapeRoomRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscapeRoomRuns and returns the data updated in the database.
     * @param {EscapeRoomRunUpdateManyAndReturnArgs} args - Arguments to update many EscapeRoomRuns.
     * @example
     * // Update many EscapeRoomRuns
     * const escapeRoomRun = await prisma.escapeRoomRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EscapeRoomRuns and only return the `id`
     * const escapeRoomRunWithIdOnly = await prisma.escapeRoomRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends EscapeRoomRunUpdateManyAndReturnArgs>(args: SelectSubset<T, EscapeRoomRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EscapeRoomRun.
     * @param {EscapeRoomRunUpsertArgs} args - Arguments to update or create a EscapeRoomRun.
     * @example
     * // Update or create a EscapeRoomRun
     * const escapeRoomRun = await prisma.escapeRoomRun.upsert({
     *   create: {
     *     // ... data to create a EscapeRoomRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EscapeRoomRun we want to update
     *   }
     * })
     */
    upsert<T extends EscapeRoomRunUpsertArgs>(args: SelectSubset<T, EscapeRoomRunUpsertArgs<ExtArgs>>): Prisma__EscapeRoomRunClient<$Result.GetResult<Prisma.$EscapeRoomRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EscapeRoomRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunCountArgs} args - Arguments to filter EscapeRoomRuns to count.
     * @example
     * // Count the number of EscapeRoomRuns
     * const count = await prisma.escapeRoomRun.count({
     *   where: {
     *     // ... the filter for the EscapeRoomRuns we want to count
     *   }
     * })
    **/
    count<T extends EscapeRoomRunCountArgs>(
      args?: Subset<T, EscapeRoomRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscapeRoomRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EscapeRoomRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscapeRoomRunAggregateArgs>(args: Subset<T, EscapeRoomRunAggregateArgs>): Prisma.PrismaPromise<GetEscapeRoomRunAggregateType<T>>

    /**
     * Group by EscapeRoomRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscapeRoomRunGroupByArgs} args - Group by arguments.
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
      T extends EscapeRoomRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscapeRoomRunGroupByArgs['orderBy'] }
        : { orderBy?: EscapeRoomRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscapeRoomRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscapeRoomRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EscapeRoomRun model
   */
  readonly fields: EscapeRoomRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EscapeRoomRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscapeRoomRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EscapeRoomRun model
   */
  interface EscapeRoomRunFieldRefs {
    readonly id: FieldRef<"EscapeRoomRun", 'String'>
    readonly name: FieldRef<"EscapeRoomRun", 'String'>
    readonly htmlCode: FieldRef<"EscapeRoomRun", 'String'>
    readonly completedStages: FieldRef<"EscapeRoomRun", 'Int[]'>
    readonly totalStages: FieldRef<"EscapeRoomRun", 'Int'>
    readonly timeUsed: FieldRef<"EscapeRoomRun", 'Int'>
    readonly totalTime: FieldRef<"EscapeRoomRun", 'Int'>
    readonly isCompleted: FieldRef<"EscapeRoomRun", 'Boolean'>
    readonly successRate: FieldRef<"EscapeRoomRun", 'Float'>
    readonly createdAt: FieldRef<"EscapeRoomRun", 'DateTime'>
    readonly updatedAt: FieldRef<"EscapeRoomRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EscapeRoomRun findUnique
   */
  export type EscapeRoomRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoomRun to fetch.
     */
    where: EscapeRoomRunWhereUniqueInput
  }

  /**
   * EscapeRoomRun findUniqueOrThrow
   */
  export type EscapeRoomRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoomRun to fetch.
     */
    where: EscapeRoomRunWhereUniqueInput
  }

  /**
   * EscapeRoomRun findFirst
   */
  export type EscapeRoomRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoomRun to fetch.
     */
    where?: EscapeRoomRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRoomRuns to fetch.
     */
    orderBy?: EscapeRoomRunOrderByWithRelationInput | EscapeRoomRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscapeRoomRuns.
     */
    cursor?: EscapeRoomRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRoomRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRoomRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscapeRoomRuns.
     */
    distinct?: EscapeRoomRunScalarFieldEnum | EscapeRoomRunScalarFieldEnum[]
  }

  /**
   * EscapeRoomRun findFirstOrThrow
   */
  export type EscapeRoomRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoomRun to fetch.
     */
    where?: EscapeRoomRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRoomRuns to fetch.
     */
    orderBy?: EscapeRoomRunOrderByWithRelationInput | EscapeRoomRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscapeRoomRuns.
     */
    cursor?: EscapeRoomRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRoomRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRoomRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscapeRoomRuns.
     */
    distinct?: EscapeRoomRunScalarFieldEnum | EscapeRoomRunScalarFieldEnum[]
  }

  /**
   * EscapeRoomRun findMany
   */
  export type EscapeRoomRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * Filter, which EscapeRoomRuns to fetch.
     */
    where?: EscapeRoomRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscapeRoomRuns to fetch.
     */
    orderBy?: EscapeRoomRunOrderByWithRelationInput | EscapeRoomRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EscapeRoomRuns.
     */
    cursor?: EscapeRoomRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscapeRoomRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscapeRoomRuns.
     */
    skip?: number
    distinct?: EscapeRoomRunScalarFieldEnum | EscapeRoomRunScalarFieldEnum[]
  }

  /**
   * EscapeRoomRun create
   */
  export type EscapeRoomRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * The data needed to create a EscapeRoomRun.
     */
    data: XOR<EscapeRoomRunCreateInput, EscapeRoomRunUncheckedCreateInput>
  }

  /**
   * EscapeRoomRun createMany
   */
  export type EscapeRoomRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EscapeRoomRuns.
     */
    data: EscapeRoomRunCreateManyInput | EscapeRoomRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscapeRoomRun createManyAndReturn
   */
  export type EscapeRoomRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * The data used to create many EscapeRoomRuns.
     */
    data: EscapeRoomRunCreateManyInput | EscapeRoomRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EscapeRoomRun update
   */
  export type EscapeRoomRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * The data needed to update a EscapeRoomRun.
     */
    data: XOR<EscapeRoomRunUpdateInput, EscapeRoomRunUncheckedUpdateInput>
    /**
     * Choose, which EscapeRoomRun to update.
     */
    where: EscapeRoomRunWhereUniqueInput
  }

  /**
   * EscapeRoomRun updateMany
   */
  export type EscapeRoomRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EscapeRoomRuns.
     */
    data: XOR<EscapeRoomRunUpdateManyMutationInput, EscapeRoomRunUncheckedUpdateManyInput>
    /**
     * Filter which EscapeRoomRuns to update
     */
    where?: EscapeRoomRunWhereInput
    /**
     * Limit how many EscapeRoomRuns to update.
     */
    limit?: number
  }

  /**
   * EscapeRoomRun updateManyAndReturn
   */
  export type EscapeRoomRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * The data used to update EscapeRoomRuns.
     */
    data: XOR<EscapeRoomRunUpdateManyMutationInput, EscapeRoomRunUncheckedUpdateManyInput>
    /**
     * Filter which EscapeRoomRuns to update
     */
    where?: EscapeRoomRunWhereInput
    /**
     * Limit how many EscapeRoomRuns to update.
     */
    limit?: number
  }

  /**
   * EscapeRoomRun upsert
   */
  export type EscapeRoomRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * The filter to search for the EscapeRoomRun to update in case it exists.
     */
    where: EscapeRoomRunWhereUniqueInput
    /**
     * In case the EscapeRoomRun found by the `where` argument doesn't exist, create a new EscapeRoomRun with this data.
     */
    create: XOR<EscapeRoomRunCreateInput, EscapeRoomRunUncheckedCreateInput>
    /**
     * In case the EscapeRoomRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscapeRoomRunUpdateInput, EscapeRoomRunUncheckedUpdateInput>
  }

  /**
   * EscapeRoomRun delete
   */
  export type EscapeRoomRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
    /**
     * Filter which EscapeRoomRun to delete.
     */
    where: EscapeRoomRunWhereUniqueInput
  }

  /**
   * EscapeRoomRun deleteMany
   */
  export type EscapeRoomRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscapeRoomRuns to delete
     */
    where?: EscapeRoomRunWhereInput
    /**
     * Limit how many EscapeRoomRuns to delete.
     */
    limit?: number
  }

  /**
   * EscapeRoomRun without action
   */
  export type EscapeRoomRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscapeRoomRun
     */
    select?: EscapeRoomRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscapeRoomRun
     */
    omit?: EscapeRoomRunOmit<ExtArgs> | null
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


  export const SavedOutputScalarFieldEnum: {
    id: 'id',
    name: 'name',
    htmlCode: 'htmlCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavedOutputScalarFieldEnum = (typeof SavedOutputScalarFieldEnum)[keyof typeof SavedOutputScalarFieldEnum]


  export const EscapeRoomRunScalarFieldEnum: {
    id: 'id',
    name: 'name',
    htmlCode: 'htmlCode',
    completedStages: 'completedStages',
    totalStages: 'totalStages',
    timeUsed: 'timeUsed',
    totalTime: 'totalTime',
    isCompleted: 'isCompleted',
    successRate: 'successRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EscapeRoomRunScalarFieldEnum = (typeof EscapeRoomRunScalarFieldEnum)[keyof typeof EscapeRoomRunScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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


  export type SavedOutputWhereInput = {
    AND?: SavedOutputWhereInput | SavedOutputWhereInput[]
    OR?: SavedOutputWhereInput[]
    NOT?: SavedOutputWhereInput | SavedOutputWhereInput[]
    id?: StringFilter<"SavedOutput"> | string
    name?: StringFilter<"SavedOutput"> | string
    htmlCode?: StringFilter<"SavedOutput"> | string
    createdAt?: DateTimeFilter<"SavedOutput"> | Date | string
    updatedAt?: DateTimeFilter<"SavedOutput"> | Date | string
  }

  export type SavedOutputOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedOutputWhereInput | SavedOutputWhereInput[]
    OR?: SavedOutputWhereInput[]
    NOT?: SavedOutputWhereInput | SavedOutputWhereInput[]
    name?: StringFilter<"SavedOutput"> | string
    htmlCode?: StringFilter<"SavedOutput"> | string
    createdAt?: DateTimeFilter<"SavedOutput"> | Date | string
    updatedAt?: DateTimeFilter<"SavedOutput"> | Date | string
  }, "id">

  export type SavedOutputOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavedOutputCountOrderByAggregateInput
    _max?: SavedOutputMaxOrderByAggregateInput
    _min?: SavedOutputMinOrderByAggregateInput
  }

  export type SavedOutputScalarWhereWithAggregatesInput = {
    AND?: SavedOutputScalarWhereWithAggregatesInput | SavedOutputScalarWhereWithAggregatesInput[]
    OR?: SavedOutputScalarWhereWithAggregatesInput[]
    NOT?: SavedOutputScalarWhereWithAggregatesInput | SavedOutputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedOutput"> | string
    name?: StringWithAggregatesFilter<"SavedOutput"> | string
    htmlCode?: StringWithAggregatesFilter<"SavedOutput"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedOutput"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavedOutput"> | Date | string
  }

  export type EscapeRoomRunWhereInput = {
    AND?: EscapeRoomRunWhereInput | EscapeRoomRunWhereInput[]
    OR?: EscapeRoomRunWhereInput[]
    NOT?: EscapeRoomRunWhereInput | EscapeRoomRunWhereInput[]
    id?: StringFilter<"EscapeRoomRun"> | string
    name?: StringFilter<"EscapeRoomRun"> | string
    htmlCode?: StringFilter<"EscapeRoomRun"> | string
    completedStages?: IntNullableListFilter<"EscapeRoomRun">
    totalStages?: IntFilter<"EscapeRoomRun"> | number
    timeUsed?: IntFilter<"EscapeRoomRun"> | number
    totalTime?: IntFilter<"EscapeRoomRun"> | number
    isCompleted?: BoolFilter<"EscapeRoomRun"> | boolean
    successRate?: FloatFilter<"EscapeRoomRun"> | number
    createdAt?: DateTimeFilter<"EscapeRoomRun"> | Date | string
    updatedAt?: DateTimeFilter<"EscapeRoomRun"> | Date | string
  }

  export type EscapeRoomRunOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    completedStages?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    isCompleted?: SortOrder
    successRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EscapeRoomRunWhereInput | EscapeRoomRunWhereInput[]
    OR?: EscapeRoomRunWhereInput[]
    NOT?: EscapeRoomRunWhereInput | EscapeRoomRunWhereInput[]
    name?: StringFilter<"EscapeRoomRun"> | string
    htmlCode?: StringFilter<"EscapeRoomRun"> | string
    completedStages?: IntNullableListFilter<"EscapeRoomRun">
    totalStages?: IntFilter<"EscapeRoomRun"> | number
    timeUsed?: IntFilter<"EscapeRoomRun"> | number
    totalTime?: IntFilter<"EscapeRoomRun"> | number
    isCompleted?: BoolFilter<"EscapeRoomRun"> | boolean
    successRate?: FloatFilter<"EscapeRoomRun"> | number
    createdAt?: DateTimeFilter<"EscapeRoomRun"> | Date | string
    updatedAt?: DateTimeFilter<"EscapeRoomRun"> | Date | string
  }, "id">

  export type EscapeRoomRunOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    completedStages?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    isCompleted?: SortOrder
    successRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EscapeRoomRunCountOrderByAggregateInput
    _avg?: EscapeRoomRunAvgOrderByAggregateInput
    _max?: EscapeRoomRunMaxOrderByAggregateInput
    _min?: EscapeRoomRunMinOrderByAggregateInput
    _sum?: EscapeRoomRunSumOrderByAggregateInput
  }

  export type EscapeRoomRunScalarWhereWithAggregatesInput = {
    AND?: EscapeRoomRunScalarWhereWithAggregatesInput | EscapeRoomRunScalarWhereWithAggregatesInput[]
    OR?: EscapeRoomRunScalarWhereWithAggregatesInput[]
    NOT?: EscapeRoomRunScalarWhereWithAggregatesInput | EscapeRoomRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EscapeRoomRun"> | string
    name?: StringWithAggregatesFilter<"EscapeRoomRun"> | string
    htmlCode?: StringWithAggregatesFilter<"EscapeRoomRun"> | string
    completedStages?: IntNullableListFilter<"EscapeRoomRun">
    totalStages?: IntWithAggregatesFilter<"EscapeRoomRun"> | number
    timeUsed?: IntWithAggregatesFilter<"EscapeRoomRun"> | number
    totalTime?: IntWithAggregatesFilter<"EscapeRoomRun"> | number
    isCompleted?: BoolWithAggregatesFilter<"EscapeRoomRun"> | boolean
    successRate?: FloatWithAggregatesFilter<"EscapeRoomRun"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EscapeRoomRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EscapeRoomRun"> | Date | string
  }

  export type SavedOutputCreateInput = {
    id?: string
    name: string
    htmlCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedOutputUncheckedCreateInput = {
    id?: string
    name: string
    htmlCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedOutputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOutputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOutputCreateManyInput = {
    id?: string
    name: string
    htmlCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedOutputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedOutputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomRunCreateInput = {
    id?: string
    name: string
    htmlCode: string
    completedStages?: EscapeRoomRunCreatecompletedStagesInput | number[]
    totalStages: number
    timeUsed: number
    totalTime: number
    isCompleted?: boolean
    successRate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscapeRoomRunUncheckedCreateInput = {
    id?: string
    name: string
    htmlCode: string
    completedStages?: EscapeRoomRunCreatecompletedStagesInput | number[]
    totalStages: number
    timeUsed: number
    totalTime: number
    isCompleted?: boolean
    successRate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscapeRoomRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    completedStages?: EscapeRoomRunUpdatecompletedStagesInput | number[]
    totalStages?: IntFieldUpdateOperationsInput | number
    timeUsed?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    successRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    completedStages?: EscapeRoomRunUpdatecompletedStagesInput | number[]
    totalStages?: IntFieldUpdateOperationsInput | number
    timeUsed?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    successRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomRunCreateManyInput = {
    id?: string
    name: string
    htmlCode: string
    completedStages?: EscapeRoomRunCreatecompletedStagesInput | number[]
    totalStages: number
    timeUsed: number
    totalTime: number
    isCompleted?: boolean
    successRate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EscapeRoomRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    completedStages?: EscapeRoomRunUpdatecompletedStagesInput | number[]
    totalStages?: IntFieldUpdateOperationsInput | number
    timeUsed?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    successRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscapeRoomRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    htmlCode?: StringFieldUpdateOperationsInput | string
    completedStages?: EscapeRoomRunUpdatecompletedStagesInput | number[]
    totalStages?: IntFieldUpdateOperationsInput | number
    timeUsed?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    successRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SavedOutputCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedOutputMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EscapeRoomRunCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    completedStages?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    isCompleted?: SortOrder
    successRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomRunAvgOrderByAggregateInput = {
    completedStages?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    successRate?: SortOrder
  }

  export type EscapeRoomRunMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    isCompleted?: SortOrder
    successRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomRunMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    htmlCode?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    isCompleted?: SortOrder
    successRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EscapeRoomRunSumOrderByAggregateInput = {
    completedStages?: SortOrder
    totalStages?: SortOrder
    timeUsed?: SortOrder
    totalTime?: SortOrder
    successRate?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EscapeRoomRunCreatecompletedStagesInput = {
    set: number[]
  }

  export type EscapeRoomRunUpdatecompletedStagesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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