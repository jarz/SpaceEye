module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/test'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/test/.+\\.spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/fileMock.js',
        '\\.(s?css|sass)$': '<rootDir>/mocks/styleMock.js'
    }
}
