import { lang } from '../config/main'
import { baseStimulus } from '../lib/markup/stimuli'
import { jsPsych } from "jspsych-react";

const enterRating = () => {

    return {
        type: 'survey_text',
        questions: [{ prompt: baseStimulus(`<h1>${lang.instructions.enter_rating}</h1>`, true)}],
        on_finish: (data) => {
            data.submit_time = Date.now()
            jsPsych.data.write(data)
        }
      }
}

export default enterRating