import { LoginForm } from "../../components/forms"
import { Layout } from "../../components/layout"
import { withAuth } from "../../hoc"

const LoginPage = () => {
    return (
        <Layout>
            <LoginForm/>
        </Layout>
    )
}

export const Login = withAuth(LoginPage) 