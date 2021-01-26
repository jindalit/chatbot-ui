export default {
  baseUrl: 'http://149.129.191.22:8081/chatboat/webapi/',
  login: 'chat/validate',
  signup: 'chat/registration',
  chat: 'chat/track',
  questionList: 'survey/getSurveyQuestionList',
  submitQuestion: 'survey/submitSurvey',
  pulseScore: 'dashbord/getCompanyPulseScoreView',
  companyMood: 'dashbord/getOverallCompanyMood',
  genderWise: 'dashbord/getGenderWiseView',
  associateResponseView: 'dashbord/getAssociateResponseView',
  flightRiskAnalysis: 'dashbord/getFlightRiskAnalysis',
  chatQuestion: 'chat/searchQuestions',
  unitPulseView: 'dashbord/getUnitPulseView',
  enterpriseEmployeeRisk: 'dashbord/getEnterpriseEmployeeRisk',
  gradeWiseHighFlightRisk: 'dashbord/getGradeWiseHighFlightRisk',
  businessUnitWiseHighFlightRisk: 'dashbord/getBusinessUnitWiseHighFlightRisk'
}
