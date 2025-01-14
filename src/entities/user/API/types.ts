import { UserResponse } from "@supabase/supabase-js";

export type UserQueryNames = 'getUser';


export type GetUserResponse = UserResponse

export type UserMethodNames = UserQueryNames;



export type UserResponses = GetUserResponse