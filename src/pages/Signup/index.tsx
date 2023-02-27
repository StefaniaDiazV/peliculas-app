import { SignupForm } from "../../components/forms"
import { Layout } from "../../components/layout"
import { withAuth } from "../../hoc"

const SignUpPage = () => {
    return (
        <Layout>
            <SignupForm/>
        </Layout>
    )
}

export const SignUp = withAuth(SignUpPage) 