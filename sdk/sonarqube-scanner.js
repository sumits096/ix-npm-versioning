const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
// serverUrl: 'http://localhost:9000',
serverUrl: 'http://127.0.0.1:9000',

login: "admin",
password: "boomtown",
options : {
'sonar.sources': './src',
"sonar.exclusions": "**/tests/**",
"sonar.tests": "./tests",
"sonar.test.inclusions": "./tests/**/*",
'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
'sonar.testExecutionReportPaths': 'test-report.xml',
'sonar.eslint.reportPaths': 'eslint-report.json'
}
}, () => {});
