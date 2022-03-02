import 'automapper-ts';
import { UploadFile } from '../../core/entity';
import { UploadFileModel } from '../../core/models';
export declare class UploadFilesMap {
    static fromBTUploadFiles(model: UploadFileModel): UploadFile;
    static fromBTUploadFilesList(files?: UploadFileModel[]): UploadFile[];
    static toBTUploadFileModel(files: UploadFile[]): UploadFileModel[];
    static toBTUploadFiles(model: UploadFile): UploadFileModel;
}
