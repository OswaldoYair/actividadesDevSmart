/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const languageStrings = {
    en: {
        translation: {
            WELCOME_MESSAGE: 'Hello, welcome to this calculator with addition, subtraction, multiplication and division, what operation do you want to perform?',
            HELP_MESSAGE: 'You can say hello to me! How can I help?',
            GOODBYE_MESSAGE: 'Goodbye!',
            REFLECTOR_MESSAGE: 'You just triggered %s',
            FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MESSAGE: 'Sorry, there was an error. Please try again.'
        }
    },
    es: {
        translation: {
            WELCOME_MESSAGE: 'Hola, bienvenido a esta calculadora con suma, resta, multiplicacion y division,  que operacion quieres realizar?',
            SUMA_MX: 'Suma Español',
            RESTA_MX: 'Resta Español',
            MULTIPLICACION_MX: 'Multiplicacion Español',
            DIVISION_MX: 'Division Español',
            HELP_MESSAGE: 'Puedes decirme "hola", "hola mundo", "di hola mundo". Intenta decirlo',
            GOODBYE_MESSAGE: 'Adiós!',
            REFLECTOR_MESSAGE: 'Acabas de activar %s',
            FALLBACK_MESSAGE: 'Lo siento, No entendi lo que dijiste. Por favor inténtalo otra vez.',
            ERROR_MESSAGE: 'Lo siento, ha ocurrido un problema. Por favor inténtalo otra vez.'
        }
    }
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('WELCOME_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const RealizarSuma = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentSuma';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('SUMA_MX');
        const { slots } = handlerInput.requestEnvelope.request.intent;
        const num1 = parseFloat(slots.varUno.value);
        const num2 = parseFloat(slots.varDos.value);
        
        if(speechText === "Suma Español"){
            if(num1 > 0){
            const resultado = (num1 + num2).toFixed(2);
            
            const speakOutput = 'la suma de ' + num1 + ' + ' + num2 + ' es de: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Ingresa solo numeros positivos, prueba a poner, "suma 10 mas 20"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        else{
            if(num1 > 0){
            const resultado = (num1 + num2).toFixed(2);
            
            const speakOutput = 'the sum of ' + num1 + ' + ' + num2 + ' it is: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Enter only positive numbers, try putting, "sum 10 and 20"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
    }
}

const RealizarResta = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentResta';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('RESTA_MX');
        
        const { slots } = handlerInput.requestEnvelope.request.intent;
        const num1 = parseFloat(slots.varUno.value);
        const num2 = parseFloat(slots.varDos.value);
        
        if(speechText === "Resta Español"){
            if(num1 > 0){
            const resultado = (num1 - num2).toFixed(2);
            const speakOutput = 'la resta de ' + num1 + ' - ' + num2 + ' es de: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Ingresa solo numeros positivos, prueba a poner, "resta 30 menos 15"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        else{
            if(num1 > 0){
            const resultado = (num1 - num2).toFixed(2);
            const speakOutput = 'the remainder of ' + num1 + ' - ' + num2 + ' it is: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Enter only positive numbers, try putting, "subtract 30 and 15"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        
    }
}

const RealizarMultiplicacion = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentMultiplicacion';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('MULTIPLICACION_MX');
        
        const { slots } = handlerInput.requestEnvelope.request.intent;
        const num1 = parseFloat(slots.varUno.value);
        const num2 = parseFloat(slots.varDos.value);
        
        if(speechText === "Multiplicacion Español"){
            if(num1 > 0 && num2 > 0){
            const resultado = (num1 * num2).toFixed(2);
            const speakOutput = 'la multiplicacion de ' + num1 + ' x ' + num2 + ' es de: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Ingresa solo numeros positivos, prueba a poner, "multiplica 6 por 9"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        else{
            if(num1 > 0 && num2 > 0){
            const resultado = (num1 * num2).toFixed(2);
            const speakOutput = 'the multiplication of ' + num1 + ' x ' + num2 + ' it is: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Enter only positive numbers, try putting, "multiply 6 and 9"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        
        
    }
}

const RealizarDivision = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'intentDivision';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('DIVISION_MX');
        
        const { slots } = handlerInput.requestEnvelope.request.intent;
        const num1 = parseFloat(slots.varUno.value);
        const num2 = parseFloat(slots.varDos.value);
        
        if(speechText === "Division Español"){
            if(num1 > 0 && num2 > 0){
            const resultado = (num1 / num2).toFixed(2);
            const speakOutput = 'la division de ' + num1 + ' / ' + num2 + ' es de: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Ingresa solo numeros positivos, prueba a poner, "divide 35 entre 7"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        else{
            if(num1 > 0 && num2 > 0){
            const resultado = (num1 / num2).toFixed(2);
            const speakOutput = 'the division of ' + num1 + ' / ' + num2 + ' it is: ' + resultado;
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt(speakOutput)
                .getResponse();
            }
            else{
                const speakOutput = 'Enter only positive numbers, try putting, "divide 35 and 7"'
                return handlerInput.responseBuilder
                    .speak(speakOutput)
                    //.reprompt(speakOutput)
                    .getResponse();
            }
        }
        
        
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('GOODBYE_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('FALLBACK_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('REFLECTOR_MESSAGE', intentName);

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ERROR_MESSAGE');


        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        RealizarSuma,
        RealizarResta,
        RealizarMultiplicacion,
        RealizarDivision,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(LoggingRequestInterceptor,LocalizationInterceptor)
    .addResponseInterceptors(LoggingResponseInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();