// API CORE MW
// -------------------------
// API_REQ
// SET_LOADER
// SET
// FETCH
// API_SUCC
// API_ERR

// NOTIFICATION CORE MW
// ---------------------------
// API_REQ
// SET_LOADER
// SET
// FETCH
// API_SUCC
// API_ERR
// CLEAN

export interface IBaseType {
  type: string;
}



// export type TFeaturePayload = TResponseObject | TErrorObject | IEnrichedNotificationObject | undefined;

// export type IApiRequestMeta = IApiRequestMeta;

// export interface IApiRequestMeta {
//   url: string;
//   body: string | null;
//   method: string;
//   feature: string;
// }

// export interface IFetchRequestMeta extends IApiRequestMeta {
//   dispatch: Dispatch<IApiRequestAction /* | IFeatureAction*/>;
// }

// export interface IApiRequestAction extends IAction {
//   payload: string | null;
//   meta: IApiRequestMeta;
// }

// export interface IFeatureAction extends IAction {
//   payload: TFeaturePayload;
//   meta: { feature: string };
// }

// export interface IFeatureMeta {
//   feature: string;
//   response?: TResponseObject;
//   error?: TErrorObject;
// }

// export interface IDataResponseAction {
//   type: string;
//   payload: any;
//   meta: { feature: string };
// }
// export interface IAPiSuccess {
//   type: string;
//   payload: any;
//   meta: any; // { feature: string };
// }


// IN fetch req -> 
// export interface IfetchRequest {
//   query: string;
//   page?: number;
// }

// // OUT fetch req -> action
// export interface Ifetch_Action {
//   type: string;
//   payload: string;
//   meta?: { page?: number };
// }