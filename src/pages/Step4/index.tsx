import { useNavigate, Link } from 'react-router-dom';
import { Container, LinkStyle } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export const Step4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }, [])

    return (
        <Theme>
            <Container>
                <h1>Cadastro finalizado!</h1>
                <h3>Nome: <span>{state.name}</span></h3> 
                <h3>Email: <span>{state.email}</span></h3>
                <h3>Github: <span>{state.github}</span></h3>
                <hr />
                {state.level === 0 &&
                    <SelectOption
                        title="Sou iniciante"
                        description="Comecei a programar a menos de 2 anos."
                        icon="👶"
                        selected={state.level === 0}
                    />
                }
                {state.level === 1 &&
                    <SelectOption
                        title="Sou programador"
                        description="Já programo há 2 anos  ou mais."
                        icon="😎"
                        selected={state.level === 1}
                    />
                }

            </Container>
            <LinkStyle>
                <Link to="/step3" className="backButton">Voltar</Link>
            </LinkStyle>
        </Theme>
    )
}
