import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Image } from '../../../models/image.model';

export const adapter: EntityAdapter<Image> = createEntityAdapter<Image>({
   sortComparer: false
});

export const {
   selectIds: selectImageIds,
   selectEntities: selectImageEntities,
   selectAll: selectAllImages
} = adapter.getSelectors();
