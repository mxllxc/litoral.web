import { Form } from 'react-bootstrap';
import * as S from './styles'

const Filter = () => {
    return (
        <S.Container>
            <S.Content>
                <section>
                    <h2>O que voce procura?</h2>
                    <Form.Check type="radio" aria-label="radio 1" label="Carro" />
                </section>
            </S.Content>
        </S.Container>
    )
}

export default Filter;