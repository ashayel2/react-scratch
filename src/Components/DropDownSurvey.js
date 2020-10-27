
import React,{Component} from 'react'

import * as Survey from 'survey-react'




class DropDownSurvey extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = () =>{
        this.setState ({
            isCompleted: true
        })
    }

    render() {


        var json = {
            questions: [
                {
                    type: "dropdown",
                    name: "car",
                    title: "What car are you driving?",
                    isRequired: true,
                    colCount: 0,
                    choices: [
                        "None",
                        "Ford",
                        "Vauxhall",
                        "Volkswagen",
                        "Nissan",
                        "Audi",
                        "Mercedes-Benz",
                        "BMW",
                        "Peugeot",
                        "Toyota",
                        "Citroen"
                    ]
                }
            ]
        };

        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey
            json={json}
            /* showCompletedPage = {false} */
            onComplete = {this.onCompleteComponent}
            />
        ) : null;
        
        var onSurveyCompletion = this.state.isCompleted ? (
            <div>
                Thanks for completing the survey !!
            </div>
        ) : null;


        return (
            <div className="DropDownSurvey">
                <div>
                    {surveyRender}
                    {onSurveyCompletion}
                </div>
            </div>


    
        );
    }
    
}


export default DropDownSurvey