# 1.Jest
### 1.1.Define
    - Testing Framework
    - Offical support by FB
    - Support React, React Native
    - Snapshot testing
    - Auto mocking
### 1.2.Overview
    - Using matcher
        +toBe()
        +toEqual()
    - Test Truthiness
        +toBeNull()
        +toBeDefined()
        +toBeUndefined()
        +toBeTruthy()
        +toBeFalsy()
    - Test Number
        +toBeGreaterThan()
        +toBeGreaterThanOrEqual()
        +toBeLessThan()
        +toBeLessThanOrEqual()
        +toBe()
        +toEqual()
    - Test String
        +toMatch()
    - Test Array
        +toContain()
    - Test Exception
        +toThrow()
    - DOM testing we use enzyme
# 2.Snapshot Testing
### 2.1.Define
    - Testing for component to check if the component has been changed
    - It will check with one file's name is snapshot. The file will create for the first time run test. 