import { DevelopmentToolModel } from './development_tool_model';
import { EducationalBackgroundModel } from './educational_background_model';
import { KnowledgementModel } from './knowledgement_model';
import { LanguageModel } from './language_model';
import { ProfessionalExperienceModel } from './professional_experience_model';

export class DataModel {
  name: String | null = null;
  addressLine: String | null = null;
  addressLocalRef: String | null = null;
  phone: String | null = null;
  email: String | null = null;
  linkedIn: String | null = null;
  gitHub: String | null = null;
  qualities: String[] = [];
  aboutMeTitle: String | null = null;
  aboutMe: String | null = null;
  experienceTitle: String | null = null;
  professionalXps: String[] = [];
  developmentToolsTitle: String | null = null;
  developmentTools: DevelopmentToolModel[] = [];
  knowledgementTitle: String | null = null;
  knowledgements: KnowledgementModel[] = [];
  languageTitle: String | null = null;
  languages: LanguageModel[] = [];
  educationalBackgroundTitle: String | null = null;
  educationalBackgrounds: EducationalBackgroundModel[] = [];
  professionalExperienceTitle: String | null = null;
  professionalExperiences: ProfessionalExperienceModel[] = [];
}
