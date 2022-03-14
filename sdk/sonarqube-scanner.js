const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
// serverUrl: 'http://localhost:9000',
serverUrl: 'https://8080-cs-543085140216-default.cs-asia-southeast1-yelo.cloudshell.dev',

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
