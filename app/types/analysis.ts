export default interface AnalysisResult {
  summary: string;
  decisions: string[];
  actions: string[];
  risks: string[];
  dependencies: string[];
  recommendations: string[];
  email: string;
}