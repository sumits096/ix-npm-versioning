import 'automapper-ts';
import { UploadFile } from '../../core/entity';
import { UploadFileModel } from '../../core/models';

export class UploadFilesMap {
    /**
     * Return entity files from boomtown model
     * @param model boomtown upload file model.
     * @returns
     */
    static fromBTUploadFiles(model: UploadFileModel): UploadFile {
        automapper
            .createMap('BTUploadFile', 'UploadFile')
            .forMember('objectId', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('object_id'));

        return automapper.map('BTUploadFile', 'UploadFile', model) as UploadFile;
    }

    /**
     * Return entity upload file from boomtown model
     * @param files boomtown Upload file model.
     * @returns
     */
    static fromBTUploadFilesList(files?: UploadFileModel[]): UploadFile[] {
        const model = files ? files : ([] as UploadFileModel[]);

        return model.map(function transform(file: UploadFileModel) {
            return UploadFilesMap.fromBTUploadFiles(file);
        });
    }

    /**
     * Return boomtown upload file model from entity upload file model
     * @param files array of entity upload file model.
     * @returns
     */
    static toBTUploadFileModel(files: UploadFile[]): UploadFileModel[] {
        const model = files ? files : ([] as UploadFile[]);

        return model.map(function transform(file: UploadFile) {
            return UploadFilesMap.toBTUploadFiles(file);
        });
    }

    /**
     * Return entity files from boomtown model
     * @param model boomtown upload file model.
     * @returns
     */
    static toBTUploadFiles(model: UploadFile): UploadFileModel {
        automapper
            .createMap('UploadFile', 'BTUploadFile')
            .forMember('object_id', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('objectId'));

        return automapper.map('UploadFile', 'UploadFile', model) as UploadFile;
    }
}
