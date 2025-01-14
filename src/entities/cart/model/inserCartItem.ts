import { AppThunk } from '@app/store';
import { InsertCartItem } from '@services/Supabase/supabase.types';
import { APIInsertCartItem } from '../API/api';

export const insertCartItem =
  (insertCartItem: InsertCartItem): AppThunk =>
  async (dispatch) => {
    await dispatch(
      APIInsertCartItem({
        insertCartItem: insertCartItem,
      })
    );
  };
