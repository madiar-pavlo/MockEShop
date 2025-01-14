import { SupabaseBody } from "@services/RTKQuery/types";

export const isBody = (body: SupabaseBody | undefined) => {
    if(!body){
      throw new Error('body is required');
    }

    return body
}