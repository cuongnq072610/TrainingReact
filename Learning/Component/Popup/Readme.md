Popup example with default form:

```js
const { Form, FormGroup, Label, Input } = require('reactstrap');
<iframe>
    <Popup
        isOpen
        backdrop='static'
        title={'Header'}
        component={() => (
            <Form>
                <FormGroup>
                    <Label for='formName'>{'Name'}</Label>
                    <Input
                        type='text'
                        name='name'
                        id='formName'
                        placeholder='Enter Name'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='formEmail'>{'Email'}</Label>
                    <Input
                        type='email'
                        name='email'
                        id='formEmail'
                        placeholder='Enter Email Address'
                    />
                </FormGroup>
            </Form>
        )}
        button={{
            primary: {
                title: 'Save',
            },
            secondary: {
                title: 'Cancel',
            },
        }}
        handleExecution={() => {
            alert('Submitted!');
        }}
    />
</iframe>;
```
