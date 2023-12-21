import * as Yup from 'yup'
import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
import boleto from '../../assets/boleto.png'
import cartao from '../../assets/cartao.png'
import { useFormik } from 'formik'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatorio'),
      email: Yup.string()
        .email('E-mail invalido')
        .required('Campo obrigatorio'),
      deliveryEmail: Yup.string()
        .email('E-mail invalido')
        .required('Campo obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mais sao diferentes')
        .required('Campo obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('Campo obrigatorio'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Campo obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }
  return (
    <form className="container" onSubmit={form.handleSubmit}>
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullname', form.errors.fullname)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                type="email"
                id="deliveryEmail"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                type="email"
                id="confirmDeliveryEmail"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
            </InputGroup>
          </Row>
        </>
      </Card>

      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input
                      type="text"
                      id="cardOwner"
                      name="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input
                      type="text"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </small>
                  </InputGroup>
                </Row>

                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número no cartão</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    >
                      <option value="">1X de R$ 200</option>
                      <option value="">2X de R$ 100</option>
                      <option value="">3X de R$ 67</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação de código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </form>
  )
}

export default Checkout
