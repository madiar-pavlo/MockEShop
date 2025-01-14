import { RTKMethods } from "@services/RTKQuery/types";
import { UserQueryNames } from "./types";
import { supabase } from "@services/Supabase/supabaseClient";

const userQueries: RTKMethods<UserQueryNames> = {
    getUser: async () => {
        return await supabase.auth.getUser()
    }
}

const userMethods = {
    ...userQueries
}

export default userMethods