
/**
*  Predictor for Boro from model/5c936bfc3980b50a4e006388
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictBoro(data) {
    if (data.horaMuestraHour == null) {
        return 1.76262;
    }
    else if (data.horaMuestraHour > 7) {
        if (data.ph == null) {
            return 1.08424;
        }
        else if (data.ph > 7.80137) {
            if (data.durezaTotal == null) {
                return 0.87724;
            }
            else if (data.durezaTotal > 685.33333) {
                if (data.temperatura == null) {
                    return 1.22954;
                }
                else if (data.temperatura > 24.56) {
                    if (data.conductividad == null) {
                        return 1.51667;
                    }
                    else if (data.conductividad > 4430) {
                        if (data.horaMuestraMinute == null) {
                            return 1.688;
                        }
                        else if (data.horaMuestraMinute > 46) {
                            return 1.62667;
                        }
                        else if (data.horaMuestraMinute <= 46) {
                            return 1.78;
                        }
                    }
                    else if (data.conductividad <= 4430) {
                        if (data.durezaTotal > 1151) {
                            if (data.conductividad > 4245) {
                                return 1.44;
                            }
                            else if (data.conductividad <= 4245) {
                                return 1.54;
                            }
                        }
                        else if (data.durezaTotal <= 1151) {
                            if (data.turbidez == null) {
                                return 1.26667;
                            }
                            else if (data.turbidez > 16.4) {
                                if (data.conductividad > 3725) {
                                    return 1.35;
                                }
                                else if (data.conductividad <= 3725) {
                                    return 1.27;
                                }
                            }
                            else if (data.turbidez <= 16.4) {
                                return 1.18;
                            }
                        }
                    }
                }
                else if (data.temperatura <= 24.56) {
                    if (data.durezaTotal > 877.13636) {
                        if (data.cloruros == null) {
                            return 1.23963;
                        }
                        else if (data.cloruros > 660.4625) {
                            if (data.durezaTotal > 1226) {
                                if (data.cloruros > 771) {
                                    return 1.12;
                                }
                                else if (data.cloruros <= 771) {
                                    if (data.turbidez == null) {
                                        return 1.2875;
                                    }
                                    else if (data.turbidez > 8.75) {
                                        if (data.ph > 9.49) {
                                            return 1.26;
                                        }
                                        else if (data.ph <= 9.49) {
                                            if (data.field3DayOfMonth == null) {
                                                return 1.31231;
                                            }
                                            else if (data.field3DayOfMonth > 12) {
                                                if (data.turbidez > 31.15) {
                                                    return 1.25;
                                                }
                                                else if (data.turbidez <= 31.15) {
                                                    if (data.cloruros > 669.3) {
                                                        return 1.3;
                                                    }
                                                    else if (data.cloruros <= 669.3) {
                                                        return 1.33;
                                                    }
                                                }
                                            }
                                            else if (data.field3DayOfMonth <= 12) {
                                                return 1.375;
                                            }
                                        }
                                    }
                                    else if (data.turbidez <= 8.75) {
                                        if (data.conductividad == null) {
                                            return 1.21667;
                                        }
                                        else if (data.conductividad > 4660) {
                                            return 1.17;
                                        }
                                        else if (data.conductividad <= 4660) {
                                            return 1.24;
                                        }
                                    }
                                }
                            }
                            else if (data.durezaTotal <= 1226) {
                                if (data.cloruros > 669.5) {
                                    if (data.temperatura > 19.6) {
                                        return 1.36;
                                    }
                                    else if (data.temperatura <= 19.6) {
                                        return 1.4;
                                    }
                                }
                                else if (data.cloruros <= 669.5) {
                                    if (data.turbidez == null) {
                                        return 1.515;
                                    }
                                    else if (data.turbidez > 32.35) {
                                        if (data.conductividad == null) {
                                            return 1.57;
                                        }
                                        else if (data.conductividad > 4365) {
                                            return 1.55;
                                        }
                                        else if (data.conductividad <= 4365) {
                                            return 1.59;
                                        }
                                    }
                                    else if (data.turbidez <= 32.35) {
                                        return 1.46;
                                    }
                                }
                            }
                        }
                        else if (data.cloruros <= 660.4625) {
                            if (data.durezaTotal > 1351) {
                                if (data.horaMuestraMinute == null) {
                                    return 1.29615;
                                }
                                else if (data.horaMuestraMinute > 22) {
                                    return 1.205;
                                }
                                else if (data.horaMuestraMinute <= 22) {
                                    if (data.horaMuestraMinute > 13) {
                                        return 1.495;
                                    }
                                    else if (data.horaMuestraMinute <= 13) {
                                        if (data.temperatura > 21.25) {
                                            return 1.3;
                                        }
                                        else if (data.temperatura <= 21.25) {
                                            return 1.365;
                                        }
                                    }
                                }
                            }
                            else if (data.durezaTotal <= 1351) {
                                if (data.field3Month == null) {
                                    return 1.19031;
                                }
                                else if (data.field3Month > 10) {
                                    if (data.conductividad == null) {
                                        return 1.338;
                                    }
                                    else if (data.conductividad > 2695) {
                                        return 1.19;
                                    }
                                    else if (data.conductividad <= 2695) {
                                        return 1.56;
                                    }
                                }
                                else if (data.field3Month <= 10) {
                                    if (data.field3DayOfWeek == null) {
                                        return 1.1778;
                                    }
                                    else if (data.field3DayOfWeek > 4) {
                                        if (data.horaMuestraMinute == null) {
                                            return 1.12833;
                                        }
                                        else if (data.horaMuestraMinute > 47) {
                                            if (data.conductividad == null) {
                                                return 1.19571;
                                            }
                                            else if (data.conductividad > 2785) {
                                                return 1.23;
                                            }
                                            else if (data.conductividad <= 2785) {
                                                return 1.17;
                                            }
                                        }
                                        else if (data.horaMuestraMinute <= 47) {
                                            if (data.field3DayOfMonth == null) {
                                                return 1.08545;
                                            }
                                            else if (data.field3DayOfMonth > 19) {
                                                if (data.turbidez == null) {
                                                    return 1.1375;
                                                }
                                                else if (data.turbidez > 16.24) {
                                                    return 1.115;
                                                }
                                                else if (data.turbidez <= 16.24) {
                                                    return 1.16;
                                                }
                                            }
                                            else if (data.field3DayOfMonth <= 19) {
                                                if (data.turbidez == null) {
                                                    return 1.05571;
                                                }
                                                else if (data.turbidez > 14.7) {
                                                    return 1.08333;
                                                }
                                                else if (data.turbidez <= 14.7) {
                                                    return 1.035;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.field3DayOfWeek <= 4) {
                                        if (data.field3Month > 4) {
                                            if (data.ph > 9.195) {
                                                if (data.turbidez == null) {
                                                    return 1.26714;
                                                }
                                                else if (data.turbidez > 17.2) {
                                                    return 1.33;
                                                }
                                                else if (data.turbidez <= 17.2) {
                                                    return 1.22;
                                                }
                                            }
                                            else if (data.ph <= 9.195) {
                                                if (data.temperatura > 20.2) {
                                                    if (data.field3DayOfMonth == null) {
                                                        return 1.10444;
                                                    }
                                                    else if (data.field3DayOfMonth > 23) {
                                                        return 1.01;
                                                    }
                                                    else if (data.field3DayOfMonth <= 23) {
                                                        return 1.11625;
                                                    }
                                                }
                                                else if (data.temperatura <= 20.2) {
                                                    if (data.durezaTotal > 1117.5) {
                                                        return 1.07;
                                                    }
                                                    else if (data.durezaTotal <= 1117.5) {
                                                        if (data.conductividad == null) {
                                                            return 1.19267;
                                                        }
                                                        else if (data.conductividad > 3905) {
                                                            return 1.26;
                                                        }
                                                        else if (data.conductividad <= 3905) {
                                                            if (data.lsi == null) {
                                                                return 1.18231;
                                                            }
                                                            else if (data.lsi > 0.545) {
                                                                if (data.alcalinidad == null) {
                                                                    return 1.18667;
                                                                }
                                                                else if (data.alcalinidad > 31) {
                                                                    return 1.174;
                                                                }
                                                                else if (data.alcalinidad <= 31) {
                                                                    return 1.19571;
                                                                }
                                                            }
                                                            else if (data.lsi <= 0.545) {
                                                                return 1.13;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.field3Month <= 4) {
                                            if (data.temperatura > 20.55) {
                                                if (data.alcalinidad == null) {
                                                    return 1.31333;
                                                }
                                                else if (data.alcalinidad > 39) {
                                                    return 1.38;
                                                }
                                                else if (data.alcalinidad <= 39) {
                                                    return 1.3;
                                                }
                                            }
                                            else if (data.temperatura <= 20.55) {
                                                if (data.horaMuestraMinute == null) {
                                                    return 1.17667;
                                                }
                                                else if (data.horaMuestraMinute > 24) {
                                                    return 1.19;
                                                }
                                                else if (data.horaMuestraMinute <= 24) {
                                                    return 1.15;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.durezaTotal <= 877.13636) {
                        if (data.horaMuestraMinute == null) {
                            return 1.0787;
                        }
                        else if (data.horaMuestraMinute > 8) {
                            if (data.aluminio == null) {
                                return 1.06542;
                            }
                            else if (data.aluminio > 0.0645) {
                                if (data.conductividad == null) {
                                    return 1.11444;
                                }
                                else if (data.conductividad > 3085) {
                                    if (data.conductividad > 3240) {
                                        return 1.21;
                                    }
                                    else if (data.conductividad <= 3240) {
                                        return 1.17;
                                    }
                                }
                                else if (data.conductividad <= 3085) {
                                    if (data.conductividad > 2479) {
                                        return 1.1;
                                    }
                                    else if (data.conductividad <= 2479) {
                                        return 1.06;
                                    }
                                }
                            }
                            else if (data.aluminio <= 0.0645) {
                                if (data.field3DayOfWeek == null) {
                                    return 1.03947;
                                }
                                else if (data.field3DayOfWeek > 4) {
                                    if (data.durezaTotal > 734) {
                                        return 1.006;
                                    }
                                    else if (data.durezaTotal <= 734) {
                                        return 0.957;
                                    }
                                }
                                else if (data.field3DayOfWeek <= 4) {
                                    if (data.horaMuestraMinute > 53) {
                                        return 0.987;
                                    }
                                    else if (data.horaMuestraMinute <= 53) {
                                        if (data.field3DayOfMonth == null) {
                                            return 1.07889;
                                        }
                                        else if (data.field3DayOfMonth > 16) {
                                            if (data.conductividad == null) {
                                                return 1.06875;
                                            }
                                            else if (data.conductividad > 3110) {
                                                return 1.09;
                                            }
                                            else if (data.conductividad <= 3110) {
                                                return 1.056;
                                            }
                                        }
                                        else if (data.field3DayOfMonth <= 16) {
                                            return 1.16;
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.horaMuestraMinute <= 8) {
                            if (data.ph > 8.91) {
                                return 1.09;
                            }
                            else if (data.ph <= 8.91) {
                                if (data.conductividad == null) {
                                    return 1.19;
                                }
                                else if (data.conductividad > 3670) {
                                    return 1.23;
                                }
                                else if (data.conductividad <= 3670) {
                                    return 1.17;
                                }
                            }
                        }
                    }
                }
            }
            else if (data.durezaTotal <= 685.33333) {
                if (data.cloruros == null) {
                    return 0.78689;
                }
                else if (data.cloruros > 169.5) {
                    if (data.horaMuestraMinute == null) {
                        return 0.97445;
                    }
                    else if (data.horaMuestraMinute > 2) {
                        if (data.lsi == null) {
                            return 0.98759;
                        }
                        else if (data.lsi > 0.815) {
                            if (data.conductividad == null) {
                                return 1.0268;
                            }
                            else if (data.conductividad > 2590) {
                                return 0.974;
                            }
                            else if (data.conductividad <= 2590) {
                                return 1.04;
                            }
                        }
                        else if (data.lsi <= 0.815) {
                            if (data.durezaTotal > 584) {
                                if (data.conductividad == null) {
                                    return 0.9464;
                                }
                                else if (data.conductividad > 2292) {
                                    return 0.972;
                                }
                                else if (data.conductividad <= 2292) {
                                    return 0.94;
                                }
                            }
                            else if (data.durezaTotal <= 584) {
                                return 0.989;
                            }
                        }
                    }
                    else if (data.horaMuestraMinute <= 2) {
                        return 0.9;
                    }
                }
                else if (data.cloruros <= 169.5) {
                    if (data.fosfato == null) {
                        return 0.78021;
                    }
                    else if (data.fosfato > 0.13304) {
                        if (data.conductividad == null) {
                            return 0.74578;
                        }
                        else if (data.conductividad > 496) {
                            if (data.field3DayOfMonth == null) {
                                return 0.81041;
                            }
                            else if (data.field3DayOfMonth > 4) {
                                if (data.horaMuestraHour > 8) {
                                    if (data.field3DayOfMonth > 10) {
                                        return 0.80225;
                                    }
                                    else if (data.field3DayOfMonth <= 10) {
                                        return 0.821;
                                    }
                                }
                                else if (data.horaMuestraHour <= 8) {
                                    return 0.885;
                                }
                            }
                            else if (data.field3DayOfMonth <= 4) {
                                if (data.field3DayOfWeek == null) {
                                    return 0.766;
                                }
                                else if (data.field3DayOfWeek > 4) {
                                    return 0.738;
                                }
                                else if (data.field3DayOfWeek <= 4) {
                                    return 0.78467;
                                }
                            }
                        }
                        else if (data.conductividad <= 496) {
                            if (data.conductividad > 365) {
                                if (data.rsi == null) {
                                    return 0.74405;
                                }
                                else if (data.rsi > 7.554) {
                                    if (data.fosfato > 0.145) {
                                        if (data.ph > 8.725) {
                                            return 0.8075;
                                        }
                                        else if (data.ph <= 8.725) {
                                            if (data.field3Month == null) {
                                                return 0.7363;
                                            }
                                            else if (data.field3Month > 1) {
                                                if (data.temperatura == null) {
                                                    return 0.74032;
                                                }
                                                else if (data.temperatura > 16.35) {
                                                    if (data.calcioCa2 == null) {
                                                        return 0.73776;
                                                    }
                                                    else if (data.calcioCa2 > 30.9) {
                                                        return 0.847;
                                                    }
                                                    else if (data.calcioCa2 <= 30.9) {
                                                        if (data.rsi > 8.002) {
                                                            if (data.field3DayOfMonth == null) {
                                                                return 0.74451;
                                                            }
                                                            else if (data.field3DayOfMonth > 23) {
                                                                if (data.conductividad > 383) {
                                                                    return 0.77;
                                                                }
                                                                else if (data.conductividad <= 383) {
                                                                    return 0.721;
                                                                }
                                                            }
                                                            else if (data.field3DayOfMonth <= 23) {
                                                                if (data.std == null) {
                                                                    return 0.73938;
                                                                }
                                                                else if (data.std > 255.5) {
                                                                    return 0.75777;
                                                                }
                                                                else if (data.std <= 255.5) {
                                                                    if (data.lsi == null) {
                                                                        return 0.7343;
                                                                    }
                                                                    else if (data.lsi > -0.345) {
                                                                        if (data.calcioCa2 > 20.9) {
                                                                            if (data.lsi > 0.12) {
                                                                                return 0.72708;
                                                                            }
                                                                            else if (data.lsi <= 0.12) {
                                                                                if (data.aluminio == null) {
                                                                                    return 0.74148;
                                                                                }
                                                                                else if (data.aluminio > 0.0065) {
                                                                                    return 0.74685;
                                                                                }
                                                                                else if (data.aluminio <= 0.0065) {
                                                                                    return 0.73567;
                                                                                }
                                                                            }
                                                                        }
                                                                        else if (data.calcioCa2 <= 20.9) {
                                                                            if (data.field3Month > 9) {
                                                                                return 0.741;
                                                                            }
                                                                            else if (data.field3Month <= 9) {
                                                                                return 0.70829;
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.lsi <= -0.345) {
                                                                        return 0.7755;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else if (data.rsi <= 8.002) {
                                                            if (data.turbidez == null) {
                                                                return 0.72452;
                                                            }
                                                            else if (data.turbidez > 1.01) {
                                                                if (data.field3Month > 3) {
                                                                    return 0.73545;
                                                                }
                                                                else if (data.field3Month <= 3) {
                                                                    return 0.84;
                                                                }
                                                            }
                                                            else if (data.turbidez <= 1.01) {
                                                                if (data.lsi == null) {
                                                                    return 0.71759;
                                                                }
                                                                else if (data.lsi > 0.475) {
                                                                    return 0.636;
                                                                }
                                                                else if (data.lsi <= 0.475) {
                                                                    if (data.lsi > 0.335) {
                                                                        if (data.lsi > 0.395) {
                                                                            return 0.72642;
                                                                        }
                                                                        else if (data.lsi <= 0.395) {
                                                                            if (data.turbidez > 0.715) {
                                                                                return 0.744;
                                                                            }
                                                                            else if (data.turbidez <= 0.715) {
                                                                                return 0.78;
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.lsi <= 0.335) {
                                                                        if (data.fosfato > 0.51) {
                                                                            return 0.682;
                                                                        }
                                                                        else if (data.fosfato <= 0.51) {
                                                                            if (data.field3Month > 3) {
                                                                                return 0.7045;
                                                                            }
                                                                            else if (data.field3Month <= 3) {
                                                                                return 0.719;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.temperatura <= 16.35) {
                                                    if (data.field3DayOfMonth == null) {
                                                        return 0.78457;
                                                    }
                                                    else if (data.field3DayOfMonth > 13) {
                                                        return 0.80575;
                                                    }
                                                    else if (data.field3DayOfMonth <= 13) {
                                                        return 0.75633;
                                                    }
                                                }
                                            }
                                            else if (data.field3Month <= 1) {
                                                if (data.field3DayOfMonth == null) {
                                                    return 0.71176;
                                                }
                                                else if (data.field3DayOfMonth > 12) {
                                                    if (data.turbidez == null) {
                                                        return 0.70125;
                                                    }
                                                    else if (data.turbidez > 0.645) {
                                                        return 0.734;
                                                    }
                                                    else if (data.turbidez <= 0.645) {
                                                        if (data.aluminio == null) {
                                                            return 0.69657;
                                                        }
                                                        else if (data.aluminio > 0.0105) {
                                                            return 0.67767;
                                                        }
                                                        else if (data.aluminio <= 0.0105) {
                                                            return 0.70173;
                                                        }
                                                    }
                                                }
                                                else if (data.field3DayOfMonth <= 12) {
                                                    return 0.7454;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.fosfato <= 0.145) {
                                        if (data.aluminio == null) {
                                            return 0.7855;
                                        }
                                        else if (data.aluminio > 0.0075) {
                                            if (data.aluminio > 0.01) {
                                                return 0.696;
                                            }
                                            else if (data.aluminio <= 0.01) {
                                                return 0.7395;
                                            }
                                        }
                                        else if (data.aluminio <= 0.0075) {
                                            if (data.temperatura == null) {
                                                return 0.80567;
                                            }
                                            else if (data.temperatura > 17.6) {
                                                return 0.8315;
                                            }
                                            else if (data.temperatura <= 17.6) {
                                                if (data.conductividad > 434) {
                                                    return 0.773;
                                                }
                                                else if (data.conductividad <= 434) {
                                                    return 0.803;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.rsi <= 7.554) {
                                    if (data.conductividad > 397) {
                                        return 0.7955;
                                    }
                                    else if (data.conductividad <= 397) {
                                        return 0.843;
                                    }
                                }
                            }
                            else if (data.conductividad <= 365) {
                                if (data.turbidez == null) {
                                    return 0.67959;
                                }
                                else if (data.turbidez > 0.75) {
                                    if (data.rsi == null) {
                                        return 0.70717;
                                    }
                                    else if (data.rsi > 8.385) {
                                        return 0.74;
                                    }
                                    else if (data.rsi <= 8.385) {
                                        return 0.7006;
                                    }
                                }
                                else if (data.turbidez <= 0.75) {
                                    if (data.field3DayOfWeek == null) {
                                        return 0.66455;
                                    }
                                    else if (data.field3DayOfWeek > 3) {
                                        return 0.66889;
                                    }
                                    else if (data.field3DayOfWeek <= 3) {
                                        return 0.645;
                                    }
                                }
                            }
                        }
                    }
                    else if (data.fosfato <= 0.13304) {
                        if (data.turbidez == null) {
                            return 0.8008;
                        }
                        else if (data.turbidez > 0.3505) {
                            if (data.temperatura == null) {
                                return 0.80418;
                            }
                            else if (data.temperatura > 19.72) {
                                if (data.turbidez > 0.76) {
                                    return 0.73967;
                                }
                                else if (data.turbidez <= 0.76) {
                                    return 0.6844;
                                }
                            }
                            else if (data.temperatura <= 19.72) {
                                if (data.cloruros > 115.2) {
                                    if (data.temperatura > 18.35) {
                                        if (data.field3DayOfMonth == null) {
                                            return 0.78507;
                                        }
                                        else if (data.field3DayOfMonth > 27) {
                                            return 0.899;
                                        }
                                        else if (data.field3DayOfMonth <= 27) {
                                            if (data.turbidez > 0.675) {
                                                if (data.horaMuestraHour > 9) {
                                                    if (data.turbidez > 1.015) {
                                                        return 0.837;
                                                    }
                                                    else if (data.turbidez <= 1.015) {
                                                        return 0.77667;
                                                    }
                                                }
                                                else if (data.horaMuestraHour <= 9) {
                                                    if (data.cloruros > 119) {
                                                        return 0.71983;
                                                    }
                                                    else if (data.cloruros <= 119) {
                                                        return 0.757;
                                                    }
                                                }
                                            }
                                            else if (data.turbidez <= 0.675) {
                                                if (data.field3Month == null) {
                                                    return 0.80491;
                                                }
                                                else if (data.field3Month > 4) {
                                                    if (data.horaMuestraMinute == null) {
                                                        return 0.8138;
                                                    }
                                                    else if (data.horaMuestraMinute > 32) {
                                                        return 0.773;
                                                    }
                                                    else if (data.horaMuestraMinute <= 32) {
                                                        if (data.field3DayOfWeek == null) {
                                                            return 0.81833;
                                                        }
                                                        else if (data.field3DayOfWeek > 3) {
                                                            return 0.82414;
                                                        }
                                                        else if (data.field3DayOfWeek <= 3) {
                                                            return 0.798;
                                                        }
                                                    }
                                                }
                                                else if (data.field3Month <= 4) {
                                                    return 0.716;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.temperatura <= 18.35) {
                                        if (data.field3Month == null) {
                                            return 0.82269;
                                        }
                                        else if (data.field3Month > 11) {
                                            if (data.horaMuestraMinute == null) {
                                                return 0.8645;
                                            }
                                            else if (data.horaMuestraMinute > 29) {
                                                if (data.temperatura > 17.45) {
                                                    return 0.8855;
                                                }
                                                else if (data.temperatura <= 17.45) {
                                                    return 0.91433;
                                                }
                                            }
                                            else if (data.horaMuestraMinute <= 29) {
                                                return 0.8178;
                                            }
                                        }
                                        else if (data.field3Month <= 11) {
                                            if (data.horaMuestraMinute == null) {
                                                return 0.81925;
                                            }
                                            else if (data.horaMuestraMinute > 3) {
                                                if (data.cloruros > 120.75) {
                                                    if (data.aluminio == null) {
                                                        return 0.80275;
                                                    }
                                                    else if (data.aluminio > 0.0095) {
                                                        if (data.conductividad == null) {
                                                            return 0.84667;
                                                        }
                                                        else if (data.conductividad > 516) {
                                                            return 0.835;
                                                        }
                                                        else if (data.conductividad <= 516) {
                                                            return 0.87;
                                                        }
                                                    }
                                                    else if (data.aluminio <= 0.0095) {
                                                        if (data.temperatura > 17.95) {
                                                            return 0.745;
                                                        }
                                                        else if (data.temperatura <= 17.95) {
                                                            if (data.calcioCa2 == null) {
                                                                return 0.80347;
                                                            }
                                                            else if (data.calcioCa2 > 22.2) {
                                                                if (data.horaMuestraHour > 8) {
                                                                    if (data.horaMuestraHour > 9) {
                                                                        if (data.field3DayOfWeek == null) {
                                                                            return 0.80954;
                                                                        }
                                                                        else if (data.field3DayOfWeek > 4) {
                                                                            return 0.799;
                                                                        }
                                                                        else if (data.field3DayOfWeek <= 4) {
                                                                            if (data.conductividad == null) {
                                                                                return 0.83325;
                                                                            }
                                                                            else if (data.conductividad > 402) {
                                                                                return 0.84967;
                                                                            }
                                                                            else if (data.conductividad <= 402) {
                                                                                return 0.784;
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.horaMuestraHour <= 9) {
                                                                        if (data.field3DayOfWeek == null) {
                                                                            return 0.775;
                                                                        }
                                                                        else if (data.field3DayOfWeek > 3) {
                                                                            return 0.7842;
                                                                        }
                                                                        else if (data.field3DayOfWeek <= 3) {
                                                                            return 0.752;
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.horaMuestraHour <= 8) {
                                                                    if (data.horaMuestraMinute > 19) {
                                                                        if (data.horaMuestraMinute > 51) {
                                                                            if (data.temperatura > 16.9) {
                                                                                return 0.8145;
                                                                            }
                                                                            else if (data.temperatura <= 16.9) {
                                                                                return 0.79033;
                                                                            }
                                                                        }
                                                                        else if (data.horaMuestraMinute <= 51) {
                                                                            return 0.8215;
                                                                        }
                                                                    }
                                                                    else if (data.horaMuestraMinute <= 19) {
                                                                        return 0.868;
                                                                    }
                                                                }
                                                            }
                                                            else if (data.calcioCa2 <= 22.2) {
                                                                if (data.horaMuestraHour > 8) {
                                                                    return 0.81171;
                                                                }
                                                                else if (data.horaMuestraHour <= 8) {
                                                                    if (data.conductividad == null) {
                                                                        return 0.75433;
                                                                    }
                                                                    else if (data.conductividad > 379) {
                                                                        return 0.743;
                                                                    }
                                                                    else if (data.conductividad <= 379) {
                                                                        return 0.777;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.cloruros <= 120.75) {
                                                    if (data.field3DayOfMonth == null) {
                                                        return 0.82843;
                                                    }
                                                    else if (data.field3DayOfMonth > 8) {
                                                        if (data.turbidez > 0.905) {
                                                            if (data.conductividad == null) {
                                                                return 0.8461;
                                                            }
                                                            else if (data.conductividad > 441) {
                                                                return 0.811;
                                                            }
                                                            else if (data.conductividad <= 441) {
                                                                return 0.86114;
                                                            }
                                                        }
                                                        else if (data.turbidez <= 0.905) {
                                                            if (data.conductividad == null) {
                                                                return 0.81579;
                                                            }
                                                            else if (data.conductividad > 445) {
                                                                return 0.80555;
                                                            }
                                                            else if (data.conductividad <= 445) {
                                                                if (data.aluminio == null) {
                                                                    return 0.82206;
                                                                }
                                                                else if (data.aluminio > 0.0065) {
                                                                    return 0.82673;
                                                                }
                                                                else if (data.aluminio <= 0.0065) {
                                                                    return 0.79867;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.field3DayOfMonth <= 8) {
                                                        return 0.89167;
                                                    }
                                                }
                                            }
                                            else if (data.horaMuestraMinute <= 3) {
                                                if (data.field3DayOfMonth == null) {
                                                    return 0.83522;
                                                }
                                                else if (data.field3DayOfMonth > 24) {
                                                    if (data.cloruros > 124.5) {
                                                        return 0.876;
                                                    }
                                                    else if (data.cloruros <= 124.5) {
                                                        return 0.855;
                                                    }
                                                }
                                                else if (data.field3DayOfMonth <= 24) {
                                                    if (data.turbidez > 0.77) {
                                                        return 0.7981;
                                                    }
                                                    else if (data.turbidez <= 0.77) {
                                                        if (data.turbidez > 0.595) {
                                                            if (data.alcalinidad == null) {
                                                                return 0.85533;
                                                            }
                                                            else if (data.alcalinidad > 61) {
                                                                if (data.rsi == null) {
                                                                    return 0.8376;
                                                                }
                                                                else if (data.rsi > 7.995) {
                                                                    return 0.822;
                                                                }
                                                                else if (data.rsi <= 7.995) {
                                                                    return 0.848;
                                                                }
                                                            }
                                                            else if (data.alcalinidad <= 61) {
                                                                return 0.868;
                                                            }
                                                        }
                                                        else if (data.turbidez <= 0.595) {
                                                            if (data.aluminio == null) {
                                                                return 0.8199;
                                                            }
                                                            else if (data.aluminio > 0.0085) {
                                                                return 0.82586;
                                                            }
                                                            else if (data.aluminio <= 0.0085) {
                                                                return 0.806;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.cloruros <= 115.2) {
                                    if (data.fosfato > 0.075) {
                                        if (data.field3Month == null) {
                                            return 0.76263;
                                        }
                                        else if (data.field3Month > 1) {
                                            if (data.field3DayOfMonth == null) {
                                                return 0.77473;
                                            }
                                            else if (data.field3DayOfMonth > 26) {
                                                return 0.73686;
                                            }
                                            else if (data.field3DayOfMonth <= 26) {
                                                if (data.field3Month > 8) {
                                                    if (data.horaMuestraHour > 9) {
                                                        if (data.ph > 8.27) {
                                                            return 0.77917;
                                                        }
                                                        else if (data.ph <= 8.27) {
                                                            return 0.819;
                                                        }
                                                    }
                                                    else if (data.horaMuestraHour <= 9) {
                                                        return 0.76309;
                                                    }
                                                }
                                                else if (data.field3Month <= 8) {
                                                    if (data.ph > 8.095) {
                                                        if (data.horaMuestraHour > 8) {
                                                            return 0.797;
                                                        }
                                                        else if (data.horaMuestraHour <= 8) {
                                                            if (data.aluminio == null) {
                                                                return 0.763;
                                                            }
                                                            else if (data.aluminio > 0.0085) {
                                                                return 0.78;
                                                            }
                                                            else if (data.aluminio <= 0.0085) {
                                                                return 0.746;
                                                            }
                                                        }
                                                    }
                                                    else if (data.ph <= 8.095) {
                                                        return 0.8225;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.field3Month <= 1) {
                                            if (data.conductividad == null) {
                                                return 0.70063;
                                            }
                                            else if (data.conductividad > 447) {
                                                return 0.70683;
                                            }
                                            else if (data.conductividad <= 447) {
                                                return 0.682;
                                            }
                                        }
                                    }
                                    else if (data.fosfato <= 0.075) {
                                        if (data.conductividad == null) {
                                            return 0.80886;
                                        }
                                        else if (data.conductividad > 488) {
                                            return 0.88533;
                                        }
                                        else if (data.conductividad <= 488) {
                                            if (data.aluminio == null) {
                                                return 0.80365;
                                            }
                                            else if (data.aluminio > 0.0065) {
                                                if (data.horaMuestraMinute == null) {
                                                    return 0.81142;
                                                }
                                                else if (data.horaMuestraMinute > 4) {
                                                    if (data.cloruros > 104.5) {
                                                        if (data.calcioCa2 == null) {
                                                            return 0.82587;
                                                        }
                                                        else if (data.calcioCa2 > 22.2) {
                                                            if (data.conductividad > 465) {
                                                                return 0.87;
                                                            }
                                                            else if (data.conductividad <= 465) {
                                                                if (data.durezaTotal > 63.5) {
                                                                    return 0.82;
                                                                }
                                                                else if (data.durezaTotal <= 63.5) {
                                                                    return 0.78533;
                                                                }
                                                            }
                                                        }
                                                        else if (data.calcioCa2 <= 22.2) {
                                                            if (data.temperatura > 15.45) {
                                                                if (data.cloruros > 113.2) {
                                                                    return 0.785;
                                                                }
                                                                else if (data.cloruros <= 113.2) {
                                                                    if (data.field3DayOfMonth == null) {
                                                                        return 0.83552;
                                                                    }
                                                                    else if (data.field3DayOfMonth > 14) {
                                                                        return 0.824;
                                                                    }
                                                                    else if (data.field3DayOfMonth <= 14) {
                                                                        return 0.84256;
                                                                    }
                                                                }
                                                            }
                                                            else if (data.temperatura <= 15.45) {
                                                                return 0.777;
                                                            }
                                                        }
                                                    }
                                                    else if (data.cloruros <= 104.5) {
                                                        return 0.738;
                                                    }
                                                }
                                                else if (data.horaMuestraMinute <= 4) {
                                                    if (data.field3DayOfWeek == null) {
                                                        return 0.78635;
                                                    }
                                                    else if (data.field3DayOfWeek > 2) {
                                                        if (data.field3Month == null) {
                                                            return 0.79438;
                                                        }
                                                        else if (data.field3Month > 1) {
                                                            return 0.79743;
                                                        }
                                                        else if (data.field3Month <= 1) {
                                                            return 0.773;
                                                        }
                                                    }
                                                    else if (data.field3DayOfWeek <= 2) {
                                                        return 0.768;
                                                    }
                                                }
                                            }
                                            else if (data.aluminio <= 0.0065) {
                                                if (data.ph > 8.445) {
                                                    if (data.rsi == null) {
                                                        return 0.75427;
                                                    }
                                                    else if (data.rsi > 7.72) {
                                                        if (data.temperatura > 15.65) {
                                                            return 0.75588;
                                                        }
                                                        else if (data.temperatura <= 15.65) {
                                                            return 0.724;
                                                        }
                                                    }
                                                    else if (data.rsi <= 7.72) {
                                                        return 0.802;
                                                    }
                                                }
                                                else if (data.ph <= 8.445) {
                                                    if (data.turbidez > 0.85) {
                                                        return 0.781;
                                                    }
                                                    else if (data.turbidez <= 0.85) {
                                                        return 0.828;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.turbidez <= 0.3505) {
                            if (data.aluminio == null) {
                                return 0.71943;
                            }
                            else if (data.aluminio > 0.005) {
                                if (data.lsi == null) {
                                    return 0.68409;
                                }
                                else if (data.lsi > -0.125) {
                                    if (data.field3DayOfWeek == null) {
                                        return 0.67167;
                                    }
                                    else if (data.field3DayOfWeek > 3) {
                                        return 0.656;
                                    }
                                    else if (data.field3DayOfWeek <= 3) {
                                        return 0.69125;
                                    }
                                }
                                else if (data.lsi <= -0.125) {
                                    return 0.74;
                                }
                            }
                            else if (data.aluminio <= 0.005) {
                                return 0.849;
                            }
                        }
                    }
                }
            }
        }
        else if (data.ph <= 7.80137) {
            if (data.horaMuestraHour > 9) {
                if (data.temperatura == null) {
                    return 3.58386;
                }
                else if (data.temperatura > 19.35) {
                    if (data.field3Month == null) {
                        return 1.6923;
                    }
                    else if (data.field3Month > 8) {
                        return 4.46;
                    }
                    else if (data.field3Month <= 8) {
                        if (data.conductividad == null) {
                            return 1.38478;
                        }
                        else if (data.conductividad > 1661) {
                            if (data.durezaTotal == null) {
                                return 1.55;
                            }
                            else if (data.durezaTotal > 1451.05) {
                                if (data.conductividad > 3700) {
                                    return 1.8;
                                }
                                else if (data.conductividad <= 3700) {
                                    return 1.72;
                                }
                            }
                            else if (data.durezaTotal <= 1451.05) {
                                if (data.turbidez == null) {
                                    return 1.466;
                                }
                                else if (data.turbidez > 21.05) {
                                    if (data.turbidez > 24.83) {
                                        return 1.495;
                                    }
                                    else if (data.turbidez <= 24.83) {
                                        return 1.57;
                                    }
                                }
                                else if (data.turbidez <= 21.05) {
                                    if (data.conductividad > 3475) {
                                        return 1.34;
                                    }
                                    else if (data.conductividad <= 3475) {
                                        return 1.43;
                                    }
                                }
                            }
                        }
                        else if (data.conductividad <= 1661) {
                            if (data.conductividad > 436) {
                                return 0.742;
                            }
                            else if (data.conductividad <= 436) {
                                return 0.871;
                            }
                        }
                    }
                }
                else if (data.temperatura <= 19.35) {
                    if (data.turbidez == null) {
                        return 4.34048;
                    }
                    else if (data.turbidez > 0.555) {
                        if (data.horaMuestraMinute == null) {
                            return 4.65217;
                        }
                        else if (data.horaMuestraMinute > 41) {
                            return 3.33;
                        }
                        else if (data.horaMuestraMinute <= 41) {
                            if (data.aluminio == null) {
                                return 4.71227;
                            }
                            else if (data.aluminio > 0.0445) {
                                if (data.horaMuestraMinute > 12) {
                                    if (data.turbidez > 1.63) {
                                        return 4.22;
                                    }
                                    else if (data.turbidez <= 1.63) {
                                        return 3.76;
                                    }
                                }
                                else if (data.horaMuestraMinute <= 12) {
                                    if (data.field3Month == null) {
                                        return 4.61182;
                                    }
                                    else if (data.field3Month > 1) {
                                        if (data.turbidez > 0.865) {
                                            return 4.77;
                                        }
                                        else if (data.turbidez <= 0.865) {
                                            return 4.86;
                                        }
                                    }
                                    else if (data.field3Month <= 1) {
                                        if (data.turbidez > 1.31) {
                                            return 4.48;
                                        }
                                        else if (data.turbidez <= 1.31) {
                                            return 4.56;
                                        }
                                    }
                                }
                            }
                            else if (data.aluminio <= 0.0445) {
                                if (data.field3DayOfMonth == null) {
                                    return 4.99556;
                                }
                                else if (data.field3DayOfMonth > 18) {
                                    if (data.turbidez > 3.255) {
                                        return 5.12;
                                    }
                                    else if (data.turbidez <= 3.255) {
                                        return 5.02;
                                    }
                                }
                                else if (data.field3DayOfMonth <= 18) {
                                    if (data.turbidez > 5.415) {
                                        return 4.78;
                                    }
                                    else if (data.turbidez <= 5.415) {
                                        return 4.83;
                                    }
                                }
                            }
                        }
                    }
                    else if (data.turbidez <= 0.555) {
                        return 0.756;
                    }
                }
            }
            else if (data.horaMuestraHour <= 9) {
                if (data.field3DayOfWeek == null) {
                    return 1.35044;
                }
                else if (data.field3DayOfWeek > 6) {
                    if (data.turbidez == null) {
                        return 2.69327;
                    }
                    else if (data.turbidez > 0.505) {
                        if (data.ph > 7.285) {
                            if (data.conductividad == null) {
                                return 1.0165;
                            }
                            else if (data.conductividad > 1483) {
                                if (data.conductividad > 2655) {
                                    return 1.11;
                                }
                                else if (data.conductividad <= 2655) {
                                    return 1.04;
                                }
                            }
                            else if (data.conductividad <= 1483) {
                                return 0.806;
                            }
                        }
                        else if (data.ph <= 7.285) {
                            return 1.33;
                        }
                    }
                    else if (data.turbidez <= 0.505) {
                        return 4.58;
                    }
                }
                else if (data.field3DayOfWeek <= 6) {
                    if (data.conductividad == null) {
                        return 1.28565;
                    }
                    else if (data.conductividad > 2686) {
                        if (data.horaMuestraMinute == null) {
                            return 1.42982;
                        }
                        else if (data.horaMuestraMinute > 46) {
                            if (data.conductividad > 5080) {
                                if (data.conductividad > 5405) {
                                    return 1.77;
                                }
                                else if (data.conductividad <= 5405) {
                                    return 1.88;
                                }
                            }
                            else if (data.conductividad <= 5080) {
                                if (data.durezaTotal == null) {
                                    return 1.5565;
                                }
                                else if (data.durezaTotal > 776) {
                                    if (data.durezaTotal > 876) {
                                        if (data.field3DayOfMonth == null) {
                                            return 1.56563;
                                        }
                                        else if (data.field3DayOfMonth > 21) {
                                            if (data.durezaTotal > 1426) {
                                                return 1.7;
                                            }
                                            else if (data.durezaTotal <= 1426) {
                                                if (data.ph > 6.695) {
                                                    return 1.605;
                                                }
                                                else if (data.ph <= 6.695) {
                                                    return 1.54;
                                                }
                                            }
                                        }
                                        else if (data.field3DayOfMonth <= 21) {
                                            if (data.turbidez == null) {
                                                return 1.5225;
                                            }
                                            else if (data.turbidez > 15.32) {
                                                if (data.turbidez > 38.35) {
                                                    return 1.51667;
                                                }
                                                else if (data.turbidez <= 38.35) {
                                                    if (data.conductividad > 4060) {
                                                        return 1.47;
                                                    }
                                                    else if (data.conductividad <= 4060) {
                                                        return 1.43;
                                                    }
                                                }
                                            }
                                            else if (data.turbidez <= 15.32) {
                                                return 1.57667;
                                            }
                                        }
                                    }
                                    else if (data.durezaTotal <= 876) {
                                        if (data.turbidez == null) {
                                            return 1.36333;
                                        }
                                        else if (data.turbidez > 34.25) {
                                            return 1.47;
                                        }
                                        else if (data.turbidez <= 34.25) {
                                            if (data.conductividad > 3165) {
                                                return 1.29;
                                            }
                                            else if (data.conductividad <= 3165) {
                                                return 1.33;
                                            }
                                        }
                                    }
                                }
                                else if (data.durezaTotal <= 776) {
                                    return 1.99;
                                }
                            }
                        }
                        else if (data.horaMuestraMinute <= 46) {
                            if (data.turbidez == null) {
                                return 1.38809;
                            }
                            else if (data.turbidez > 45.963) {
                                if (data.field3DayOfMonth == null) {
                                    return 1.59882;
                                }
                                else if (data.field3DayOfMonth > 29) {
                                    return 1.25;
                                }
                                else if (data.field3DayOfMonth <= 29) {
                                    if (data.horaMuestraMinute > 8) {
                                        if (data.turbidez > 69.35) {
                                            if (data.field3DayOfMonth > 11) {
                                                return 1.61;
                                            }
                                            else if (data.field3DayOfMonth <= 11) {
                                                return 1.54667;
                                            }
                                        }
                                        else if (data.turbidez <= 69.35) {
                                            if (data.field3DayOfWeek > 2) {
                                                return 1.88;
                                            }
                                            else if (data.field3DayOfWeek <= 2) {
                                                if (data.conductividad > 3635) {
                                                    if (data.conductividad > 3790) {
                                                        return 1.64;
                                                    }
                                                    else if (data.conductividad <= 3790) {
                                                        return 1.68;
                                                    }
                                                }
                                                else if (data.conductividad <= 3635) {
                                                    return 1.725;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.horaMuestraMinute <= 8) {
                                        return 1.41;
                                    }
                                }
                            }
                            else if (data.turbidez <= 45.963) {
                                if (data.cloruros == null) {
                                    return 1.35038;
                                }
                                else if (data.cloruros > 695.5) {
                                    if (data.cloruros > 775.5) {
                                        if (data.conductividad > 5015) {
                                            return 1.15;
                                        }
                                        else if (data.conductividad <= 5015) {
                                            return 1.26;
                                        }
                                    }
                                    else if (data.cloruros <= 775.5) {
                                        if (data.field3DayOfWeek > 1) {
                                            if (data.field3DayOfMonth == null) {
                                                return 1.565;
                                            }
                                            else if (data.field3DayOfMonth > 28) {
                                                return 1.3;
                                            }
                                            else if (data.field3DayOfMonth <= 28) {
                                                if (data.cloruros > 744.5) {
                                                    if (data.conductividad > 4535) {
                                                        return 1.72;
                                                    }
                                                    else if (data.conductividad <= 4535) {
                                                        return 1.63;
                                                    }
                                                }
                                                else if (data.cloruros <= 744.5) {
                                                    if (data.conductividad > 4315) {
                                                        return 1.59;
                                                    }
                                                    else if (data.conductividad <= 4315) {
                                                        return 1.55;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.field3DayOfWeek <= 1) {
                                            if (data.conductividad > 4405) {
                                                return 1.88;
                                            }
                                            else if (data.conductividad <= 4405) {
                                                return 1.93;
                                            }
                                        }
                                    }
                                }
                                else if (data.cloruros <= 695.5) {
                                    if (data.ph > 7.585) {
                                        if (data.turbidez > 15.575) {
                                            if (data.field3DayOfMonth == null) {
                                                return 1.18167;
                                            }
                                            else if (data.field3DayOfMonth > 20) {
                                                return 1.225;
                                            }
                                            else if (data.field3DayOfMonth <= 20) {
                                                if (data.conductividad > 3460) {
                                                    return 1.14;
                                                }
                                                else if (data.conductividad <= 3460) {
                                                    return 1.18;
                                                }
                                            }
                                        }
                                        else if (data.turbidez <= 15.575) {
                                            if (data.temperatura == null) {
                                                return 1.102;
                                            }
                                            else if (data.temperatura > 21.7) {
                                                return 1.03;
                                            }
                                            else if (data.temperatura <= 21.7) {
                                                return 1.12;
                                            }
                                        }
                                    }
                                    else if (data.ph <= 7.585) {
                                        if (data.std == null) {
                                            return 1.34769;
                                        }
                                        else if (data.std > 2612.33333) {
                                            if (data.turbidez > 30.9) {
                                                return 1.35;
                                            }
                                            else if (data.turbidez <= 30.9) {
                                                if (data.temperatura == null) {
                                                    return 1.491;
                                                }
                                                else if (data.temperatura > 21.9) {
                                                    if (data.horaMuestraMinute > 33) {
                                                        return 1.49667;
                                                    }
                                                    else if (data.horaMuestraMinute <= 33) {
                                                        if (data.conductividad > 4105) {
                                                            return 1.59;
                                                        }
                                                        else if (data.conductividad <= 4105) {
                                                            return 1.49;
                                                        }
                                                    }
                                                }
                                                else if (data.temperatura <= 21.9) {
                                                    return 1.4375;
                                                }
                                            }
                                        }
                                        else if (data.std <= 2612.33333) {
                                            if (data.field3Month == null) {
                                                return 1.32239;
                                            }
                                            else if (data.field3Month > 9) {
                                                if (data.cloruros > 465.5) {
                                                    if (data.cloruros > 634) {
                                                        if (data.horaMuestraMinute > 39) {
                                                            return 1.36333;
                                                        }
                                                        else if (data.horaMuestraMinute <= 39) {
                                                            return 1.29;
                                                        }
                                                    }
                                                    else if (data.cloruros <= 634) {
                                                        if (data.conductividad > 2775) {
                                                            if (data.horaMuestraMinute > 13) {
                                                                return 1.13714;
                                                            }
                                                            else if (data.horaMuestraMinute <= 13) {
                                                                return 1.2;
                                                            }
                                                        }
                                                        else if (data.conductividad <= 2775) {
                                                            return 0.986;
                                                        }
                                                    }
                                                }
                                                else if (data.cloruros <= 465.5) {
                                                    if (data.turbidez > 27.35) {
                                                        return 1.62;
                                                    }
                                                    else if (data.turbidez <= 27.35) {
                                                        return 1.37333;
                                                    }
                                                }
                                            }
                                            else if (data.field3Month <= 9) {
                                                if (data.ph > 7.025) {
                                                    if (data.cloruros > 514) {
                                                        if (data.horaMuestraMinute > 31) {
                                                            if (data.durezaTotal == null) {
                                                                return 1.472;
                                                            }
                                                            else if (data.durezaTotal > 950.5) {
                                                                if (data.conductividad > 3500) {
                                                                    return 1.46;
                                                                }
                                                                else if (data.conductividad <= 3500) {
                                                                    return 1.42;
                                                                }
                                                            }
                                                            else if (data.durezaTotal <= 950.5) {
                                                                return 1.53;
                                                            }
                                                        }
                                                        else if (data.horaMuestraMinute <= 31) {
                                                            if (data.temperatura == null) {
                                                                return 1.32857;
                                                            }
                                                            else if (data.temperatura > 21.45) {
                                                                return 1.358;
                                                            }
                                                            else if (data.temperatura <= 21.45) {
                                                                if (data.conductividad > 3340) {
                                                                    return 1.28;
                                                                }
                                                                else if (data.conductividad <= 3340) {
                                                                    return 1.23;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.cloruros <= 514) {
                                                        if (data.field3Month > 2) {
                                                            if (data.field3DayOfWeek > 2) {
                                                                if (data.field3DayOfWeek > 4) {
                                                                    return 1.2475;
                                                                }
                                                                else if (data.field3DayOfWeek <= 4) {
                                                                    return 1.31;
                                                                }
                                                            }
                                                            else if (data.field3DayOfWeek <= 2) {
                                                                return 1.38;
                                                            }
                                                        }
                                                        else if (data.field3Month <= 2) {
                                                            return 1.13;
                                                        }
                                                    }
                                                }
                                                else if (data.ph <= 7.025) {
                                                    if (data.field3DayOfWeek > 4) {
                                                        return 1.94;
                                                    }
                                                    else if (data.field3DayOfWeek <= 4) {
                                                        if (data.ph > 6.78) {
                                                            if (data.temperatura == null) {
                                                                return 1.50833;
                                                            }
                                                            else if (data.temperatura > 22.25) {
                                                                if (data.conductividad > 3240) {
                                                                    return 1.51;
                                                                }
                                                                else if (data.conductividad <= 3240) {
                                                                    return 1.47;
                                                                }
                                                            }
                                                            else if (data.temperatura <= 22.25) {
                                                                return 1.58;
                                                            }
                                                        }
                                                        else if (data.ph <= 6.78) {
                                                            if (data.field3DayOfMonth == null) {
                                                                return 1.30167;
                                                            }
                                                            else if (data.field3DayOfMonth > 7) {
                                                                if (data.field3DayOfWeek > 2) {
                                                                    return 1.34;
                                                                }
                                                                else if (data.field3DayOfWeek <= 2) {
                                                                    return 1.29667;
                                                                }
                                                            }
                                                            else if (data.field3DayOfMonth <= 7) {
                                                                return 1.24;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.conductividad <= 2686) {
                        if (data.cloruros == null) {
                            return 1.03826;
                        }
                        else if (data.cloruros > 174) {
                            if (data.horaMuestraMinute == null) {
                                return 1.12919;
                            }
                            else if (data.horaMuestraMinute > 18) {
                                if (data.field3Month == null) {
                                    return 1.08236;
                                }
                                else if (data.field3Month > 6) {
                                    if (data.turbidez == null) {
                                        return 0.99729;
                                    }
                                    else if (data.turbidez > 28.2) {
                                        return 1.24;
                                    }
                                    else if (data.turbidez <= 28.2) {
                                        if (data.cloruros > 319) {
                                            if (data.ph > 7.475) {
                                                return 0.98567;
                                            }
                                            else if (data.ph <= 7.475) {
                                                return 1.08;
                                            }
                                        }
                                        else if (data.cloruros <= 319) {
                                            if (data.conductividad > 1880) {
                                                return 0.915;
                                            }
                                            else if (data.conductividad <= 1880) {
                                                return 0.869;
                                            }
                                        }
                                    }
                                }
                                else if (data.field3Month <= 6) {
                                    if (data.cloruros > 465.5) {
                                        if (data.ph > 7.715) {
                                            return 1.05;
                                        }
                                        else if (data.ph <= 7.715) {
                                            if (data.cloruros > 509.5) {
                                                return 1.11;
                                            }
                                            else if (data.cloruros <= 509.5) {
                                                if (data.ph > 7.555) {
                                                    return 1.18;
                                                }
                                                else if (data.ph <= 7.555) {
                                                    return 1.208;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.cloruros <= 465.5) {
                                        if (data.lsi == null) {
                                            return 1.09688;
                                        }
                                        else if (data.lsi > -0.03) {
                                            return 1.34;
                                        }
                                        else if (data.lsi <= -0.03) {
                                            if (data.cloruros > 279.5) {
                                                if (data.lsi > -0.26) {
                                                    if (data.horaMuestraMinute > 40) {
                                                        if (data.conductividad > 2012) {
                                                            return 1.15;
                                                        }
                                                        else if (data.conductividad <= 2012) {
                                                            return 1.11;
                                                        }
                                                    }
                                                    else if (data.horaMuestraMinute <= 40) {
                                                        if (data.alcalinidad == null) {
                                                            return 1.072;
                                                        }
                                                        else if (data.alcalinidad > 43) {
                                                            return 1.05;
                                                        }
                                                        else if (data.alcalinidad <= 43) {
                                                            return 1.0775;
                                                        }
                                                    }
                                                }
                                                else if (data.lsi <= -0.26) {
                                                    return 1.01233;
                                                }
                                            }
                                            else if (data.cloruros <= 279.5) {
                                                return 1.29;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.horaMuestraMinute <= 18) {
                                if (data.alcalinidad == null) {
                                    return 1.22286;
                                }
                                else if (data.alcalinidad > 43) {
                                    if (data.field3DayOfMonth == null) {
                                        return 1.135;
                                    }
                                    else if (data.field3DayOfMonth > 10) {
                                        if (data.rsi == null) {
                                            return 1.16286;
                                        }
                                        else if (data.rsi > 7.845) {
                                            return 1.12;
                                        }
                                        else if (data.rsi <= 7.845) {
                                            return 1.18;
                                        }
                                    }
                                    else if (data.field3DayOfMonth <= 10) {
                                        return 1.07;
                                    }
                                }
                                else if (data.alcalinidad <= 43) {
                                    if (data.turbidez == null) {
                                        return 1.313;
                                    }
                                    else if (data.turbidez > 17.75) {
                                        if (data.conductividad > 1818) {
                                            return 1.44333;
                                        }
                                        else if (data.conductividad <= 1818) {
                                            return 1.39;
                                        }
                                    }
                                    else if (data.turbidez <= 17.75) {
                                        if (data.lsi == null) {
                                            return 1.235;
                                        }
                                        else if (data.lsi > -0.3) {
                                            return 1.2825;
                                        }
                                        else if (data.lsi <= -0.3) {
                                            return 1.14;
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.cloruros <= 174) {
                            if (data.cloruros > 111.5) {
                                if (data.temperatura == null) {
                                    return 0.83355;
                                }
                                else if (data.temperatura > 18.75) {
                                    if (data.conductividad > 480) {
                                        return 0.865;
                                    }
                                    else if (data.conductividad <= 480) {
                                        return 0.838;
                                    }
                                }
                                else if (data.temperatura <= 18.75) {
                                    if (data.fosfato == null) {
                                        return 0.82681;
                                    }
                                    else if (data.fosfato > 0.065) {
                                        if (data.horaMuestraMinute == null) {
                                            return 0.84357;
                                        }
                                        else if (data.horaMuestraMinute > 10) {
                                            return 0.8358;
                                        }
                                        else if (data.horaMuestraMinute <= 10) {
                                            return 0.863;
                                        }
                                    }
                                    else if (data.fosfato <= 0.065) {
                                        if (data.turbidez == null) {
                                            return 0.81378;
                                        }
                                        else if (data.turbidez > 0.885) {
                                            return 0.801;
                                        }
                                        else if (data.turbidez <= 0.885) {
                                            return 0.82017;
                                        }
                                    }
                                }
                            }
                            else if (data.cloruros <= 111.5) {
                                return 0.7932;
                            }
                        }
                    }
                }
            }
        }
    }
    else if (data.horaMuestraHour <= 7) {
        if (data.ph == null) {
            return 4.62437;
        }
        else if (data.ph > 7.45375) {
            if (data.temperatura == null) {
                return 4.63814;
            }
            else if (data.temperatura > 17.17143) {
                if (data.field3DayOfMonth == null) {
                    return 4.50573;
                }
                else if (data.field3DayOfMonth > 4) {
                    if (data.field3Month == null) {
                        return 4.56138;
                    }
                    else if (data.field3Month > 4) {
                        if (data.ph > 7.715) {
                            if (data.horaMuestraMinute == null) {
                                return 4.56419;
                            }
                            else if (data.horaMuestraMinute > 7) {
                                if (data.field3DayOfMonth > 27) {
                                    return 4.88;
                                }
                                else if (data.field3DayOfMonth <= 27) {
                                    if (data.ph > 7.74) {
                                        if (data.field3Month > 7) {
                                            if (data.turbidez == null) {
                                                return 4.71333;
                                            }
                                            else if (data.turbidez > 0.885) {
                                                return 4.74;
                                            }
                                            else if (data.turbidez <= 0.885) {
                                                return 4.66;
                                            }
                                        }
                                        else if (data.field3Month <= 7) {
                                            if (data.horaMuestraMinute > 22) {
                                                return 4.6;
                                            }
                                            else if (data.horaMuestraMinute <= 22) {
                                                return 4.71;
                                            }
                                        }
                                    }
                                    else if (data.ph <= 7.74) {
                                        return 4.8;
                                    }
                                }
                            }
                            else if (data.horaMuestraMinute <= 7) {
                                if (data.turbidez == null) {
                                    return 4.464;
                                }
                                else if (data.turbidez > 1.79) {
                                    if (data.turbidez > 3.02) {
                                        if (data.turbidez > 5.12) {
                                            return 4.16;
                                        }
                                        else if (data.turbidez <= 5.12) {
                                            if (data.aluminio == null) {
                                                return 4.672;
                                            }
                                            else if (data.aluminio > 0.0995) {
                                                return 4.6;
                                            }
                                            else if (data.aluminio <= 0.0995) {
                                                return 4.78;
                                            }
                                        }
                                    }
                                    else if (data.turbidez <= 3.02) {
                                        return 4.0425;
                                    }
                                }
                                else if (data.turbidez <= 1.79) {
                                    if (data.ph > 7.73) {
                                        if (data.temperatura > 19.05) {
                                            return 4.61333;
                                        }
                                        else if (data.temperatura <= 19.05) {
                                            if (data.field3Month > 5) {
                                                if (data.turbidez > 1.195) {
                                                    return 4.62;
                                                }
                                                else if (data.turbidez <= 1.195) {
                                                    return 4.66;
                                                }
                                            }
                                            else if (data.field3Month <= 5) {
                                                return 4.84;
                                            }
                                        }
                                    }
                                    else if (data.ph <= 7.73) {
                                        return 4.19;
                                    }
                                }
                            }
                        }
                        else if (data.ph <= 7.715) {
                            if (data.temperatura > 18.4) {
                                if (data.turbidez == null) {
                                    return 4.82524;
                                }
                                else if (data.turbidez > 1.615) {
                                    if (data.turbidez > 1.95) {
                                        if (data.ph > 7.57) {
                                            if (data.ph > 7.6) {
                                                if (data.ph > 7.645) {
                                                    if (data.turbidez > 3.855) {
                                                        return 4.7;
                                                    }
                                                    else if (data.turbidez <= 3.855) {
                                                        return 4.79;
                                                    }
                                                }
                                                else if (data.ph <= 7.645) {
                                                    if (data.temperatura > 18.75) {
                                                        if (data.temperatura > 18.95) {
                                                            return 4.88;
                                                        }
                                                        else if (data.temperatura <= 18.95) {
                                                            return 4.82;
                                                        }
                                                    }
                                                    else if (data.temperatura <= 18.75) {
                                                        if (data.turbidez > 4.835) {
                                                            return 4.96;
                                                        }
                                                        else if (data.turbidez <= 4.835) {
                                                            return 4.9;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.ph <= 7.6) {
                                                if (data.field3DayOfMonth > 12) {
                                                    if (data.turbidez > 5.515) {
                                                        return 4.69;
                                                    }
                                                    else if (data.turbidez <= 5.515) {
                                                        return 4.76;
                                                    }
                                                }
                                                else if (data.field3DayOfMonth <= 12) {
                                                    return 4.58;
                                                }
                                            }
                                        }
                                        else if (data.ph <= 7.57) {
                                            if (data.temperatura > 19.15) {
                                                if (data.turbidez > 5.265) {
                                                    return 4.9;
                                                }
                                                else if (data.turbidez <= 5.265) {
                                                    return 4.82;
                                                }
                                            }
                                            else if (data.temperatura <= 19.15) {
                                                if (data.turbidez > 3.47) {
                                                    return 5.1;
                                                }
                                                else if (data.turbidez <= 3.47) {
                                                    return 5.015;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.turbidez <= 1.95) {
                                        return 5.46;
                                    }
                                }
                                else if (data.turbidez <= 1.615) {
                                    if (data.turbidez > 0.735) {
                                        if (data.ph > 7.705) {
                                            return 4.79;
                                        }
                                        else if (data.ph <= 7.705) {
                                            if (data.turbidez > 1.205) {
                                                return 4.66;
                                            }
                                            else if (data.turbidez <= 1.205) {
                                                return 4.6175;
                                            }
                                        }
                                    }
                                    else if (data.turbidez <= 0.735) {
                                        if (data.ph > 7.535) {
                                            if (data.field3DayOfWeek == null) {
                                                return 4.80143;
                                            }
                                            else if (data.field3DayOfWeek > 3) {
                                                if (data.turbidez > 0.535) {
                                                    return 4.83;
                                                }
                                                else if (data.turbidez <= 0.535) {
                                                    return 4.8;
                                                }
                                            }
                                            else if (data.field3DayOfWeek <= 3) {
                                                return 4.75;
                                            }
                                        }
                                        else if (data.ph <= 7.535) {
                                            return 4.89;
                                        }
                                    }
                                }
                            }
                            else if (data.temperatura <= 18.4) {
                                if (data.field3Month > 5) {
                                    if (data.turbidez == null) {
                                        return 4.70333;
                                    }
                                    else if (data.turbidez > 2.195) {
                                        if (data.horaMuestraMinute == null) {
                                            return 4.65625;
                                        }
                                        else if (data.horaMuestraMinute > 15) {
                                            return 4.75;
                                        }
                                        else if (data.horaMuestraMinute <= 15) {
                                            if (data.turbidez > 3.99) {
                                                return 4.65;
                                            }
                                            else if (data.turbidez <= 3.99) {
                                                return 4.6;
                                            }
                                        }
                                    }
                                    else if (data.turbidez <= 2.195) {
                                        if (data.field3DayOfMonth > 21) {
                                            if (data.turbidez > 1.515) {
                                                return 4.84;
                                            }
                                            else if (data.turbidez <= 1.515) {
                                                return 4.88;
                                            }
                                        }
                                        else if (data.field3DayOfMonth <= 21) {
                                            return 4.63;
                                        }
                                    }
                                }
                                else if (data.field3Month <= 5) {
                                    return 4.29;
                                }
                            }
                        }
                    }
                    else if (data.field3Month <= 4) {
                        if (data.field3Month > 2) {
                            if (data.field3DayOfMonth > 10) {
                                if (data.field3DayOfMonth > 29) {
                                    if (data.turbidez == null) {
                                        return 3.70667;
                                    }
                                    else if (data.turbidez > 0.435) {
                                        return 3.72;
                                    }
                                    else if (data.turbidez <= 0.435) {
                                        return 3.68;
                                    }
                                }
                                else if (data.field3DayOfMonth <= 29) {
                                    if (data.temperatura > 19.75) {
                                        if (data.temperatura > 20.4) {
                                            return 3.65;
                                        }
                                        else if (data.temperatura <= 20.4) {
                                            if (data.turbidez == null) {
                                                return 3.83;
                                            }
                                            else if (data.turbidez > 3.04) {
                                                return 3.79;
                                            }
                                            else if (data.turbidez <= 3.04) {
                                                return 3.91;
                                            }
                                        }
                                    }
                                    else if (data.temperatura <= 19.75) {
                                        if (data.temperatura > 18.05) {
                                            if (data.aluminio == null) {
                                                return 4.12182;
                                            }
                                            else if (data.aluminio > 0.0585) {
                                                if (data.field3DayOfMonth > 14) {
                                                    return 3.9;
                                                }
                                                else if (data.field3DayOfMonth <= 14) {
                                                    return 4.18;
                                                }
                                            }
                                            else if (data.aluminio <= 0.0585) {
                                                if (data.field3DayOfMonth > 19) {
                                                    return 4.4;
                                                }
                                                else if (data.field3DayOfMonth <= 19) {
                                                    if (data.turbidez == null) {
                                                        return 4.1475;
                                                    }
                                                    else if (data.turbidez > 3.245) {
                                                        if (data.turbidez > 4.56) {
                                                            return 4.14;
                                                        }
                                                        else if (data.turbidez <= 4.56) {
                                                            return 4.1;
                                                        }
                                                    }
                                                    else if (data.turbidez <= 3.245) {
                                                        return 4.21;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.temperatura <= 18.05) {
                                            return 3.96;
                                        }
                                    }
                                }
                            }
                            else if (data.field3DayOfMonth <= 10) {
                                if (data.field3DayOfMonth > 5) {
                                    if (data.field3DayOfWeek == null) {
                                        return 4.83833;
                                    }
                                    else if (data.field3DayOfWeek > 3) {
                                        if (data.field3DayOfMonth > 7) {
                                            return 4.89;
                                        }
                                        else if (data.field3DayOfMonth <= 7) {
                                            return 4.98;
                                        }
                                    }
                                    else if (data.field3DayOfWeek <= 3) {
                                        if (data.turbidez == null) {
                                            return 4.69;
                                        }
                                        else if (data.turbidez > 2.13) {
                                            return 4.65;
                                        }
                                        else if (data.turbidez <= 2.13) {
                                            return 4.73;
                                        }
                                    }
                                }
                                else if (data.field3DayOfMonth <= 5) {
                                    if (data.turbidez == null) {
                                        return 3.9;
                                    }
                                    else if (data.turbidez > 6.88) {
                                        return 3.84;
                                    }
                                    else if (data.turbidez <= 6.88) {
                                        return 3.96;
                                    }
                                }
                            }
                        }
                        else if (data.field3Month <= 2) {
                            if (data.temperatura > 19.3) {
                                if (data.turbidez == null) {
                                    return 4.52286;
                                }
                                else if (data.turbidez > 3.775) {
                                    return 4.99;
                                }
                                else if (data.turbidez <= 3.775) {
                                    if (data.aluminio == null) {
                                        return 4.445;
                                    }
                                    else if (data.aluminio > 0.067) {
                                        if (data.turbidez > 1.53) {
                                            return 4.5;
                                        }
                                        else if (data.turbidez <= 1.53) {
                                            return 4.55;
                                        }
                                    }
                                    else if (data.aluminio <= 0.067) {
                                        if (data.temperatura > 19.45) {
                                            if (data.turbidez > 0.425) {
                                                return 4.38;
                                            }
                                            else if (data.turbidez <= 0.425) {
                                                return 4.43;
                                            }
                                        }
                                        else if (data.temperatura <= 19.45) {
                                            return 4.31;
                                        }
                                    }
                                }
                            }
                            else if (data.temperatura <= 19.3) {
                                if (data.turbidez == null) {
                                    return 4.74167;
                                }
                                else if (data.turbidez > 0.495) {
                                    if (data.turbidez > 5.92) {
                                        return 4.89;
                                    }
                                    else if (data.turbidez <= 5.92) {
                                        if (data.field3DayOfWeek == null) {
                                            return 4.6425;
                                        }
                                        else if (data.field3DayOfWeek > 6) {
                                            return 4.75;
                                        }
                                        else if (data.field3DayOfWeek <= 6) {
                                            if (data.ph > 7.665) {
                                                if (data.turbidez > 2.9) {
                                                    return 4.64;
                                                }
                                                else if (data.turbidez <= 2.9) {
                                                    return 4.705;
                                                }
                                            }
                                            else if (data.ph <= 7.665) {
                                                if (data.field3DayOfWeek > 4) {
                                                    return 4.57;
                                                }
                                                else if (data.field3DayOfWeek <= 4) {
                                                    return 4.51;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.turbidez <= 0.495) {
                                    if (data.turbidez > 0.415) {
                                        return 4.91;
                                    }
                                    else if (data.turbidez <= 0.415) {
                                        return 5.07;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.field3DayOfMonth <= 4) {
                    if (data.field3Month == null) {
                        return 4.10158;
                    }
                    else if (data.field3Month > 6) {
                        if (data.field3DayOfMonth > 3) {
                            if (data.aluminio == null) {
                                return 4.0575;
                            }
                            else if (data.aluminio > 0.078) {
                                return 3.88;
                            }
                            else if (data.aluminio <= 0.078) {
                                if (data.turbidez == null) {
                                    return 4.15;
                                }
                                else if (data.turbidez > 0.665) {
                                    return 4.17;
                                }
                                else if (data.turbidez <= 0.665) {
                                    return 4.11;
                                }
                            }
                        }
                        else if (data.field3DayOfMonth <= 3) {
                            if (data.temperatura > 18.45) {
                                return 3;
                            }
                            else if (data.temperatura <= 18.45) {
                                return 3.05;
                            }
                        }
                    }
                    else if (data.field3Month <= 6) {
                        if (data.horaMuestraMinute == null) {
                            return 4.5525;
                        }
                        else if (data.horaMuestraMinute > 15) {
                            if (data.turbidez == null) {
                                return 4.015;
                            }
                            else if (data.turbidez > 2.89) {
                                return 4.42;
                            }
                            else if (data.turbidez <= 2.89) {
                                return 3.61;
                            }
                        }
                        else if (data.horaMuestraMinute <= 15) {
                            if (data.turbidez == null) {
                                return 4.73167;
                            }
                            else if (data.turbidez > 1.435) {
                                if (data.turbidez > 1.755) {
                                    return 4.56;
                                }
                                else if (data.turbidez <= 1.755) {
                                    return 5.115;
                                }
                            }
                            else if (data.turbidez <= 1.435) {
                                if (data.turbidez > 0.455) {
                                    return 4.515;
                                }
                                else if (data.turbidez <= 0.455) {
                                    return 4.57;
                                }
                            }
                        }
                    }
                }
            }
            else if (data.temperatura <= 17.17143) {
                if (data.turbidez == null) {
                    return 4.898;
                }
                else if (data.turbidez > 3.92208) {
                    if (data.temperatura > 16.05) {
                        if (data.aluminio == null) {
                            return 4.60818;
                        }
                        else if (data.aluminio > 0.0515) {
                            if (data.turbidez > 10.95) {
                                return 4.92;
                            }
                            else if (data.turbidez <= 10.95) {
                                return 4.78;
                            }
                        }
                        else if (data.aluminio <= 0.0515) {
                            if (data.temperatura > 16.65) {
                                return 4.37;
                            }
                            else if (data.temperatura <= 16.65) {
                                if (data.field3Month == null) {
                                    return 4.5775;
                                }
                                else if (data.field3Month > 4) {
                                    return 4.61333;
                                }
                                else if (data.field3Month <= 4) {
                                    return 4.47;
                                }
                            }
                        }
                    }
                    else if (data.temperatura <= 16.05) {
                        if (data.field3DayOfWeek == null) {
                            return 4.79615;
                        }
                        else if (data.field3DayOfWeek > 4) {
                            if (data.temperatura > 15.25) {
                                if (data.field3DayOfMonth == null) {
                                    return 4.72;
                                }
                                else if (data.field3DayOfMonth > 19) {
                                    return 4.76;
                                }
                                else if (data.field3DayOfMonth <= 19) {
                                    if (data.aluminio == null) {
                                        return 4.70667;
                                    }
                                    else if (data.aluminio > 0.025) {
                                        return 4.7;
                                    }
                                    else if (data.aluminio <= 0.025) {
                                        return 4.74;
                                    }
                                }
                            }
                            else if (data.temperatura <= 15.25) {
                                if (data.turbidez > 7) {
                                    return 4.64;
                                }
                                else if (data.turbidez <= 7) {
                                    return 4.61;
                                }
                            }
                        }
                        else if (data.field3DayOfWeek <= 4) {
                            if (data.horaMuestraMinute == null) {
                                return 4.88857;
                            }
                            else if (data.horaMuestraMinute > 15) {
                                if (data.field3DayOfWeek > 3) {
                                    return 4.99333;
                                }
                                else if (data.field3DayOfWeek <= 3) {
                                    return 5.02;
                                }
                            }
                            else if (data.horaMuestraMinute <= 15) {
                                if (data.temperatura > 15.55) {
                                    return 4.52;
                                }
                                else if (data.temperatura <= 15.55) {
                                    if (data.ph > 7.675) {
                                        return 4.89333;
                                    }
                                    else if (data.ph <= 7.675) {
                                        return 4.844;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.turbidez <= 3.92208) {
                    if (data.turbidez > 3.845) {
                        return 6.4;
                    }
                    else if (data.turbidez <= 3.845) {
                        if (data.field3DayOfWeek == null) {
                            return 4.96707;
                        }
                        else if (data.field3DayOfWeek > 4) {
                            if (data.temperatura > 15.4) {
                                if (data.ph > 7.645) {
                                    if (data.turbidez > 1.61) {
                                        return 4.66;
                                    }
                                    else if (data.turbidez <= 1.61) {
                                        return 4.76;
                                    }
                                }
                                else if (data.ph <= 7.645) {
                                    if (data.ph > 7.585) {
                                        return 4.86;
                                    }
                                    else if (data.ph <= 7.585) {
                                        if (data.temperatura > 15.8) {
                                            return 4.92667;
                                        }
                                        else if (data.temperatura <= 15.8) {
                                            return 4.99;
                                        }
                                    }
                                }
                            }
                            else if (data.temperatura <= 15.4) {
                                if (data.ph > 7.87) {
                                    return 4.94;
                                }
                                else if (data.ph <= 7.87) {
                                    if (data.turbidez > 1.415) {
                                        return 6.42;
                                    }
                                    else if (data.turbidez <= 1.415) {
                                        return 6.68;
                                    }
                                }
                            }
                        }
                        else if (data.field3DayOfWeek <= 4) {
                            if (data.turbidez > 0.5) {
                                if (data.ph > 7.615) {
                                    if (data.turbidez > 1.515) {
                                        if (data.field3Month == null) {
                                            return 4.698;
                                        }
                                        else if (data.field3Month > 9) {
                                            return 4.74;
                                        }
                                        else if (data.field3Month <= 9) {
                                            if (data.turbidez > 3.42) {
                                                return 4.66;
                                            }
                                            else if (data.turbidez <= 3.42) {
                                                return 4.61;
                                            }
                                        }
                                    }
                                    else if (data.turbidez <= 1.515) {
                                        if (data.aluminio == null) {
                                            return 4.81;
                                        }
                                        else if (data.aluminio > 0.044) {
                                            return 4.78;
                                        }
                                        else if (data.aluminio <= 0.044) {
                                            return 4.9;
                                        }
                                    }
                                }
                                else if (data.ph <= 7.615) {
                                    if (data.field3Month == null) {
                                        return 4.8925;
                                    }
                                    else if (data.field3Month > 6) {
                                        if (data.field3DayOfMonth == null) {
                                            return 4.92222;
                                        }
                                        else if (data.field3DayOfMonth > 12) {
                                            if (data.ph > 7.54) {
                                                if (data.temperatura > 15.55) {
                                                    if (data.turbidez > 1.87) {
                                                        return 4.86;
                                                    }
                                                    else if (data.turbidez <= 1.87) {
                                                        return 4.91;
                                                    }
                                                }
                                                else if (data.temperatura <= 15.55) {
                                                    return 4.8;
                                                }
                                            }
                                            else if (data.ph <= 7.54) {
                                                return 4.65;
                                            }
                                        }
                                        else if (data.field3DayOfMonth <= 12) {
                                            if (data.horaMuestraMinute == null) {
                                                return 5.001;
                                            }
                                            else if (data.horaMuestraMinute > 15) {
                                                if (data.turbidez > 2.27) {
                                                    if (data.turbidez > 3.145) {
                                                        return 5.02;
                                                    }
                                                    else if (data.turbidez <= 3.145) {
                                                        return 5.06;
                                                    }
                                                }
                                                else if (data.turbidez <= 2.27) {
                                                    return 5.12;
                                                }
                                            }
                                            else if (data.horaMuestraMinute <= 15) {
                                                return 4.95833;
                                            }
                                        }
                                    }
                                    else if (data.field3Month <= 6) {
                                        if (data.turbidez > 1.255) {
                                            return 4.6;
                                        }
                                        else if (data.turbidez <= 1.255) {
                                            return 4.65;
                                        }
                                    }
                                }
                            }
                            else if (data.turbidez <= 0.5) {
                                return 4.3;
                            }
                        }
                    }
                }
            }
        }
        else if (data.ph <= 7.45375) {
            return 1.36;
        }
    }
    return null;
}