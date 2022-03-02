import { HighlightmapModel, CaseLogCreateModel } from '.';

export interface CaseLogModel {
      id: CaseLogCreateModel;
      issues_id: string;
      users_full_name: string;
      users_nickname: string;
      users_certifications: string[];
      diff_log: string;
      interaction_event: string;
      notes: CaseLogCreateModel;
      created: string;
      event_category: string;
      event_category_label: string;
      event_type: string;
      event_type_label: string;
      fromIssueSave: false;
      _highlighted: false;
      _highlightmap: HighlightmapModel;
}
