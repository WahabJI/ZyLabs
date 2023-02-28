function updateScore() {
	//verify one button from each property is selected which are the names of the radio button and are: AV, AC, PR, UI, scope, conf, integ, avail, health and sens
        const AV = document.querySelector('input[name="AV"]:checked');    
        const AC = document.querySelector('input[name="AC"]:checked');
        const PR = document.querySelector('input[name="PR"]:checked');
        const UI = document.querySelector('input[name="UI"]:checked');
        const scope = document.querySelector('input[name="scope"]:checked');
        const conf = document.querySelector('input[name="conf"]:checked');
        const integ = document.querySelector('input[name="integ"]:checked');
        const avail = document.querySelector('input[name="avail"]:checked');
        const health = document.querySelector('input[name="health"]:checked');
        const sens = document.querySelector('input[name="sens"]:checked');

        //if one of the radio buttons is not selected, alert the user to select one from each property
        if (!AV || !AC || !PR || !UI || !scope || !conf || !integ || !avail || !health || !sens) {
            document.getElementById('warning').style.display = 'block';
            document.getElementById('score').innerText = '';
            return;
        }
        
        //if one button is selected from each property, set the div with id warning to none
        
        document.getElementById("warning").style.display = "none";
        // compute the vulnerability score
        // the formula is vulnScore = ScopeStatus * ((3.326258289 * ScoreBase)+ (1.1 * ScoreExploitability))
        // if scoreBase is 0, then the vulnScore is 0
        // ScoreBase = BaseConfidentialityImpact * BaseIntegrityImpact * BaseAvailabilityImpact
        var scoreBase = 0.00;
        var scoreExploitability = 0.00;
        var scopeStatus = 0.00;
        var BaseConfidentiality = 0.00;
        var BaseIntegrity = 0.00;
        var BaseAvailability = 0.00;
        var vulnScore = 0.00;
        var AttackVector = 0.00;
        var AttackComplexity = 0.00;
        var PrivilegesRequired = 0.00;
        var UserInteraction = 0.00;
        document.getElementById("score").innerHTML = conf.value;
        if(scope.value == "scope_U"){
            scopeStatus = 1.00;
        }
        else{
            scopeStatus = 1.08;
        }

        //calculating BaseConfidentialityImpact
        if(conf.value == "conf_N" && (sens.value == "sens_N" || sen.value == "sens_L" || sens.value == "sens_H")){
            BaseConfidentiality = 0.00;
        }
        else if(conf.value == "conf_L"){
            if(sens.value == "sens_N"){
                BaseConfidentiality = 0.22;
            }
            else if(sens.value == "sens_L"){
                BaseConfidentiality = 0.65;
            }
            else if(sens.value == "sens_H"){
                BaseConfidentiality = 0.85;
            }
        }
        else if(conf.value == "conf_H"){
            if(sens.value == "sens_N"){
                BaseConfidentiality = 0.56;
            }
            else if(sens.value == "sens_L"){
                BaseConfidentiality = 0.75;
            }
            else if(sens.value == "sens_H"){
                BaseConfidentiality = 0.95;
            }
        }

        //calculating BaseIntegrityImpact
        if(integ.value == "integ_N"){
            if(health.value == "health_N"){
                BaseIntegrity = 0.00;
            }
            else if(health.value == "health_L"){
                BaseIntegrity = 0.55;
            }
            else if(health.value == "health_H"){
                BaseIntegrity = 0.85;
            }
        }
        else if(integ.value == "integ_L"){
            if(health.value == "health_N"){
                BaseIntegrity = 0.22;
            }
            else if(health.value == "health_L"){
                BaseIntegrity = 0.60;
            }
            else if(health.value == "health_H"){
                BaseIntegrity = 0.90;
            }
        }
        else if(integ.value == "integ_H"){
            if(health.value == "health_N"){
                BaseIntegrity = 0.56;
            }
            else if(health.value == "health_L"){
                BaseIntegrity = 0.75;
            }
            else if(health.value == "health_H"){
                BaseIntegrity = 0.95;
            }
        }

        //calculating BaseAvailabilityImpact
        if(avail.value == "avail_N"){
            if(health.value == "health_N"){
                BaseAvailability = 0.00;
            }
            else if(health.value == "health_L"){
                BaseAvailability = 0.55;
            }
            else if(health.value == "health_H"){
                BaseAvailability = 0.85;
            }
        }
        else if(avail.value == "avail_L"){
            if(health.value == "health_N"){
                BaseAvailability = 0.22;
            }
            else if(health.value == "health_L"){
                BaseAvailability = 0.60;
            }
            else if(health.value == "health_H"){
                BaseAvailability = 0.90;
            }
        }
        else if(avail.value == "avail_H"){
            if(health.value == "health_N"){
                BaseAvailability = 0.56;
            }
            else if(health.value == "health_L"){
                BaseAvailability = 0.65;
            }
            else if(health.value == "health_H"){
                BaseAvailability = 0.95;
            }
        }
        // calculating ScoreBase
        scoreBase = BaseConfidentiality + BaseIntegrity + BaseAvailability;

        //calculating AttackVector
        if(AV.value == "AV_N"){
            AttackVector = 0.85;
        }
        else if(AV.value == "AV_A"){
            AttackVector = 0.62;
        }
        else if(AV.value == "AV_L"){
            AttackVector = 0.55;
        }
        else if(AV.value == "AV_P"){
            AttackVector = 0.20;
        }

        //calculating AttackComplexity
        if(AC.value == "AC_L"){
            AttackComplexity = 0.77;
        }
        else{
            AttackComplexity = 0.44;
        }

        //calculating PrivilegesRequired
        if(PR.value == "PR_N"){
            PrivilegesRequired = 0.85;
        }
        else if(PR.value == "PR_L"){
            PrivilegesRequired = 0.62;
        }
        else{
            PrivilegesRequired = 0.27;
        }

        //calculating UserInteraction
        if(UI.value == "UI_N"){
            UserInteraction = 0.85;
        }
        else{
            UserInteraction = 0.62;
        }

        //calculating ScoreExploitability
        scoreExploitability = AttackVector * AttackComplexity * PrivilegesRequired * UserInteraction;

    vulnScore = scopeStatus * ((3.326258289 * scoreBase)+ (1.1 * scoreExploitability));
    vulnScore = Math.ceil(vulnScore * 10) / 10;
        if(vulnScore > 10.00){
            vulnScore = 10.00;
        }
        else if(scoreBase == 0.00){
            vulnScore = 0.00;
        }
        

    
    document.getElementById("score").innerHTML = vulnScore.toFixed(1);
    
    //add a click or change listener to each radio button
}
const radios = document.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
            radio.addEventListener('click', updateScore);
            });