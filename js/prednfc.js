/**
*  Predictor for Tiempo max (s) from model/5c8764aadb8b1d198f00024a
*  Predictive model by BigML - Machine Learning Made Easy
*/
function predictTiempoMaxS(data) {
    if (data.fechaYear == null) {
        return 12.89836;
    }
    else if (data.fechaYear > 2013) {
        if (data.intervaloTiempo == null) {
            return 8.58665;
        }
        else if (data.intervaloTiempo > 14.33425) {
            if (data.m == null) {
                return 5.89667;
            }
            else if (data.m > 9) {
                if (data.h == null) {
                    return 11.4138;
                }
                else if (data.h > 6) {
                    if (data.intervaloVel == null) {
                        return 16.03577;
                    }
                    else if (data.intervaloVel > 0.25) {
                        if (data.h > 16) {
                            if (data.h > 22) {
                                return 12.08455;
                            }
                            else if (data.h <= 22) {
                                return 15.3624;
                            }
                        }
                        else if (data.h <= 16) {
                            if (data.h > 7) {
                                if (data.intervaloTiempo > 27) {
                                    if (data.intervaloTiempo > 42.45) {
                                        if (data.velMinMS == null) {
                                            return 22.6725;
                                        }
                                        else if (data.velMinMS > 6.88) {
                                            return 17.725;
                                        }
                                        else if (data.velMinMS <= 6.88) {
                                            return 27.62;
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 42.45) {
                                        if (data.pesoKg == null) {
                                            return 15.4471;
                                        }
                                        else if (data.pesoKg > 1015.2) {
                                            if (data.intervaloTiempo > 32.85) {
                                                return 15.76286;
                                            }
                                            else if (data.intervaloTiempo <= 32.85) {
                                                return 20.0225;
                                            }
                                        }
                                        else if (data.pesoKg <= 1015.2) {
                                            return 13.69923;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 27) {
                                    if (data.h > 11) {
                                        return 18.58891;
                                    }
                                    else if (data.h <= 11) {
                                        if (data.velMedMS == null) {
                                            return 22.15986;
                                        }
                                        else if (data.velMedMS > 6.995) {
                                            return 13.94;
                                        }
                                        else if (data.velMedMS <= 6.995) {
                                            return 22.51725;
                                        }
                                    }
                                }
                            }
                            else if (data.h <= 7) {
                                if (data.intervaloVel > 0.45) {
                                    if (data.sem == null) {
                                        return 15.9753;
                                    }
                                    else if (data.sem > 6) {
                                        return 8.45;
                                    }
                                    else if (data.sem <= 6) {
                                        if (data.sem > 1) {
                                            return 16.41475;
                                        }
                                        else if (data.sem <= 1) {
                                            if (data.velMinMS == null) {
                                                return 12.05667;
                                            }
                                            else if (data.velMinMS > 6.925) {
                                                return 8.87;
                                            }
                                            else if (data.velMinMS <= 6.925) {
                                                return 18.43;
                                            }
                                        }
                                    }
                                }
                                else if (data.intervaloVel <= 0.45) {
                                    return 7.968;
                                }
                            }
                        }
                    }
                    else if (data.intervaloVel <= 0.25) {
                        if (data.h > 7) {
                            if (data.h > 17) {
                                if (data.pesoKg == null) {
                                    return 12.80342;
                                }
                                else if (data.pesoKg > 1035.45) {
                                    return 7.30333;
                                }
                                else if (data.pesoKg <= 1035.45) {
                                    if (data.h > 22) {
                                        return 11.93941;
                                    }
                                    else if (data.h <= 22) {
                                        return 14.53611;
                                    }
                                }
                            }
                            else if (data.h <= 17) {
                                if (data.velMaxMS == null) {
                                    return 17.23353;
                                }
                                else if (data.velMaxMS > 7.01) {
                                    return 10.34;
                                }
                                else if (data.velMaxMS <= 7.01) {
                                    if (data.fechaMonth == null) {
                                        return 19.35462;
                                    }
                                    else if (data.fechaMonth > 11) {
                                        return 23.0125;
                                    }
                                    else if (data.fechaMonth <= 11) {
                                        return 17.72889;
                                    }
                                }
                            }
                        }
                        else if (data.h <= 7) {
                            return 6.44519;
                        }
                    }
                }
                else if (data.h <= 6) {
                    if (data.h > 0) {
                        if (data.intervaloVel == null) {
                            return 6.61986;
                        }
                        else if (data.intervaloVel > 0.75) {
                            if (data.h > 5) {
                                return 10.2575;
                            }
                            else if (data.h <= 5) {
                                return 17.398;
                            }
                        }
                        else if (data.intervaloVel <= 0.75) {
                            if (data.intervaloTiempo > 26.92119) {
                                if (data.tsDayOfMonth == null) {
                                    return 7.37087;
                                }
                                else if (data.tsDayOfMonth > 10) {
                                    if (data.presinNeumticosPa == null) {
                                        return 6.82351;
                                    }
                                    else if (data.presinNeumticosPa > -2.49) {
                                        if (data.intervaloTiempo > 88.4) {
                                            return 15.765;
                                        }
                                        else if (data.intervaloTiempo <= 88.4) {
                                            return 6.83126;
                                        }
                                    }
                                    else if (data.presinNeumticosPa <= -2.49) {
                                        return 3.05;
                                    }
                                }
                                else if (data.tsDayOfMonth <= 10) {
                                    if (data.carburanteL == null) {
                                        return 9.30105;
                                    }
                                    else if (data.carburanteL > 0.5) {
                                        if (data.fechaDayOfWeek == null) {
                                            return 9.02919;
                                        }
                                        else if (data.fechaDayOfWeek > 4) {
                                            if (data.tempSueloC == null) {
                                                return 10.69267;
                                            }
                                            else if (data.tempSueloC > 69.2) {
                                                if (data.intervaloTiempo > 50.2) {
                                                    return 16.735;
                                                }
                                                else if (data.intervaloTiempo <= 50.2) {
                                                    return 10.885;
                                                }
                                            }
                                            else if (data.tempSueloC <= 69.2) {
                                                return 6.02333;
                                            }
                                        }
                                        else if (data.fechaDayOfWeek <= 4) {
                                            return 7.895;
                                        }
                                    }
                                    else if (data.carburanteL <= 0.5) {
                                        return 19.36;
                                    }
                                }
                            }
                            else if (data.intervaloTiempo <= 26.92119) {
                                if (data.h > 1) {
                                    if (data.tsDayOfMonth == null) {
                                        return 4.87427;
                                    }
                                    else if (data.tsDayOfMonth > 10) {
                                        return 4.45609;
                                    }
                                    else if (data.tsDayOfMonth <= 10) {
                                        if (data.intervaloTiempo > 19.9) {
                                            return 7.67;
                                        }
                                        else if (data.intervaloTiempo <= 19.9) {
                                            return 4.17889;
                                        }
                                    }
                                }
                                else if (data.h <= 1) {
                                    return 6.75771;
                                }
                            }
                        }
                    }
                    else if (data.h <= 0) {
                        if (data.tempSueloC == null) {
                            return 10.13207;
                        }
                        else if (data.tempSueloC > 44.85) {
                            return 10.03791;
                        }
                        else if (data.tempSueloC <= 44.85) {
                            return 18.23;
                        }
                    }
                }
            }
            else if (data.m <= 9) {
                if (data.intervaloTiempo > 54.17267) {
                    if (data.intervaloVel == null) {
                        return 2.97611;
                    }
                    else if (data.intervaloVel > 0.85) {
                        if (data.h == null) {
                            return 8.36528;
                        }
                        else if (data.h > 5) {
                            if (data.m > 7) {
                                if (data.tempSueloC == null) {
                                    return 1.8914;
                                }
                                else if (data.tempSueloC > 35) {
                                    return 1.668;
                                }
                                else if (data.tempSueloC <= 35) {
                                    if (data.fechaDayOfWeek == null) {
                                        return 8.035;
                                    }
                                    else if (data.fechaDayOfWeek > 2) {
                                        return 0.34;
                                    }
                                    else if (data.fechaDayOfWeek <= 2) {
                                        return 15.73;
                                    }
                                }
                            }
                            else if (data.m <= 7) {
                                if (data.pesoKg == null) {
                                    return 5.72717;
                                }
                                else if (data.pesoKg > 1017.5) {
                                    if (data.presinNeumticosPa == null) {
                                        return 8.22857;
                                    }
                                    else if (data.presinNeumticosPa > 11.5) {
                                        return 15.55667;
                                    }
                                    else if (data.presinNeumticosPa <= 11.5) {
                                        if (data.presinNeumticosPa > -5) {
                                            return 5.187;
                                        }
                                        else if (data.presinNeumticosPa <= -5) {
                                            return 16.66;
                                        }
                                    }
                                }
                                else if (data.pesoKg <= 1017.5) {
                                    if (data.fechaDayOfWeek == null) {
                                        return 4.63281;
                                    }
                                    else if (data.fechaDayOfWeek > 5) {
                                        if (data.presinNeumticosPa == null) {
                                            return 9.048;
                                        }
                                        else if (data.presinNeumticosPa > 20.7) {
                                            return 16.645;
                                        }
                                        else if (data.presinNeumticosPa <= 20.7) {
                                            return 3.98333;
                                        }
                                    }
                                    else if (data.fechaDayOfWeek <= 5) {
                                        return 3.81519;
                                    }
                                }
                            }
                        }
                        else if (data.h <= 5) {
                            if (data.m > 6) {
                                if (data.intervaloTiempo > 72.405) {
                                    if (data.h > 4) {
                                        if (data.intervaloVel > 1.35) {
                                            if (data.velMinMS == null) {
                                                return 14.66636;
                                            }
                                            else if (data.velMinMS > 6.34) {
                                                return 15.29737;
                                            }
                                            else if (data.velMinMS <= 6.34) {
                                                return 10.67;
                                            }
                                        }
                                        else if (data.intervaloVel <= 1.35) {
                                            return 10.38;
                                        }
                                    }
                                    else if (data.h <= 4) {
                                        if (data.fechaMonth == null) {
                                            return 11.05316;
                                        }
                                        else if (data.fechaMonth > 7) {
                                            if (data.h > 2) {
                                                if (data.velMinMS == null) {
                                                    return 12.62116;
                                                }
                                                else if (data.velMinMS > 6.585) {
                                                    return 13.71731;
                                                }
                                                else if (data.velMinMS <= 6.585) {
                                                    return 10.94471;
                                                }
                                            }
                                            else if (data.h <= 2) {
                                                return 10.185;
                                            }
                                        }
                                        else if (data.fechaMonth <= 7) {
                                            return 9.56611;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 72.405) {
                                    if (data.h > 3) {
                                        if (data.fechaYear > 2014) {
                                            return 17.07857;
                                        }
                                        else if (data.fechaYear <= 2014) {
                                            return 21.79;
                                        }
                                    }
                                    else if (data.h <= 3) {
                                        return 10.485;
                                    }
                                }
                            }
                            else if (data.m <= 6) {
                                if (data.fechaDayOfWeek == null) {
                                    return 6.09174;
                                }
                                else if (data.fechaDayOfWeek > 4) {
                                    return 4.358;
                                }
                                else if (data.fechaDayOfWeek <= 4) {
                                    return 7.42538;
                                }
                            }
                        }
                    }
                    else if (data.intervaloVel <= 0.85) {
                        if (data.intervaloVel > 0.45) {
                            if (data.velMaxMS == null) {
                                return 3.68722;
                            }
                            else if (data.velMaxMS > 6.85621) {
                                if (data.h == null) {
                                    return 4.96163;
                                }
                                else if (data.h > 1) {
                                    if (data.h > 5) {
                                        if (data.tsDayOfMonth == null) {
                                            return 4.57114;
                                        }
                                        else if (data.tsDayOfMonth > 29) {
                                            return 18.68;
                                        }
                                        else if (data.tsDayOfMonth <= 29) {
                                            if (data.h > 6) {
                                                return 4.70952;
                                            }
                                            else if (data.h <= 6) {
                                                return 1.33;
                                            }
                                        }
                                    }
                                    else if (data.h <= 5) {
                                        if (data.m > 7) {
                                            if (data.presinNeumticosPa == null) {
                                                return 12.985;
                                            }
                                            else if (data.presinNeumticosPa > 12.5) {
                                                if (data.fechaDayOfWeek == null) {
                                                    return 15.3275;
                                                }
                                                else if (data.fechaDayOfWeek > 2) {
                                                    return 13.645;
                                                }
                                                else if (data.fechaDayOfWeek <= 2) {
                                                    return 20.375;
                                                }
                                            }
                                            else if (data.presinNeumticosPa <= 12.5) {
                                                if (data.presinNeumticosPa > 8.5) {
                                                    return 10.33333;
                                                }
                                                else if (data.presinNeumticosPa <= 8.5) {
                                                    return 2.2;
                                                }
                                            }
                                        }
                                        else if (data.m <= 7) {
                                            if (data.fechaMonth == null) {
                                                return 5.52458;
                                            }
                                            else if (data.fechaMonth > 3) {
                                                if (data.intervaloVel > 0.65) {
                                                    return 7.78733;
                                                }
                                                else if (data.intervaloVel <= 0.65) {
                                                    return 5.37462;
                                                }
                                            }
                                            else if (data.fechaMonth <= 3) {
                                                return 1.23286;
                                            }
                                        }
                                    }
                                }
                                else if (data.h <= 1) {
                                    return 1.76267;
                                }
                            }
                            else if (data.velMaxMS <= 6.85621) {
                                if (data.h == null) {
                                    return 2.46623;
                                }
                                else if (data.h > 5) {
                                    if (data.pesoKg == null) {
                                        return 2.04482;
                                    }
                                    else if (data.pesoKg > 998.7) {
                                        if (data.m > 6) {
                                            return 1.57037;
                                        }
                                        else if (data.m <= 6) {
                                            return 3.39581;
                                        }
                                    }
                                    else if (data.pesoKg <= 998.7) {
                                        return 10.93;
                                    }
                                }
                                else if (data.h <= 5) {
                                    if (data.intervaloTiempo > 176.45) {
                                        if (data.intervaloVel > 0.55) {
                                            return 8.6175;
                                        }
                                        else if (data.intervaloVel <= 0.55) {
                                            return 3.33;
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 176.45) {
                                        if (data.velMedMS == null) {
                                            return 2.86471;
                                        }
                                        else if (data.velMedMS > 6.765) {
                                            return 1.11;
                                        }
                                        else if (data.velMedMS <= 6.765) {
                                            return 4.42444;
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.intervaloVel <= 0.45) {
                            if (data.m > 4) {
                                if (data.intervaloTiempo > 70.83441) {
                                    if (data.h == null) {
                                        return 1.94877;
                                    }
                                    else if (data.h > 12) {
                                        if (data.intervaloTiempo > 280) {
                                            return 6.875;
                                        }
                                        else if (data.intervaloTiempo <= 280) {
                                            if (data.fechaYear > 2014) {
                                                return 0.98158;
                                            }
                                            else if (data.fechaYear <= 2014) {
                                                return 2.13458;
                                            }
                                        }
                                    }
                                    else if (data.h <= 12) {
                                        if (data.h > 4) {
                                            if (data.intervaloTiempo > 74.96036) {
                                                return 2.74408;
                                            }
                                            else if (data.intervaloTiempo <= 74.96036) {
                                                if (data.intervaloTiempo > 71.75) {
                                                    if (data.m > 8) {
                                                        return 10.81;
                                                    }
                                                    else if (data.m <= 8) {
                                                        return 2.34;
                                                    }
                                                }
                                                else if (data.intervaloTiempo <= 71.75) {
                                                    return 10.56;
                                                }
                                            }
                                        }
                                        else if (data.h <= 4) {
                                            if (data.tsDayOfMonth == null) {
                                                return 1.9115;
                                            }
                                            else if (data.tsDayOfMonth > 28) {
                                                if (data.h > 1) {
                                                    if (data.carburanteL == null) {
                                                        return 7.76167;
                                                    }
                                                    else if (data.carburanteL > 12.35) {
                                                        return 4.38667;
                                                    }
                                                    else if (data.carburanteL <= 12.35) {
                                                        return 11.13667;
                                                    }
                                                }
                                                else if (data.h <= 1) {
                                                    return 1.73;
                                                }
                                            }
                                            else if (data.tsDayOfMonth <= 28) {
                                                return 1.78782;
                                            }
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 70.83441) {
                                    if (data.fechaYear > 2014) {
                                        return 2.29598;
                                    }
                                    else if (data.fechaYear <= 2014) {
                                        if (data.m > 7) {
                                            if (data.intervaloVel > 0.25) {
                                                return 15.2075;
                                            }
                                            else if (data.intervaloVel <= 0.25) {
                                                return 9.44211;
                                            }
                                        }
                                        else if (data.m <= 7) {
                                            if (data.h == null) {
                                                return 3.0383;
                                            }
                                            else if (data.h > 6) {
                                                if (data.m > 6) {
                                                    if (data.tsDayOfMonth == null) {
                                                        return 8.2;
                                                    }
                                                    else if (data.tsDayOfMonth > 23) {
                                                        return 15.855;
                                                    }
                                                    else if (data.tsDayOfMonth <= 23) {
                                                        return 5.64833;
                                                    }
                                                }
                                                else if (data.m <= 6) {
                                                    return 3.71025;
                                                }
                                            }
                                            else if (data.h <= 6) {
                                                return 1.5563;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 4) {
                                if (data.h == null) {
                                    return 1.24252;
                                }
                                else if (data.h > 6) {
                                    if (data.intervaloTiempo > 75.62778) {
                                        return 1.47919;
                                    }
                                    else if (data.intervaloTiempo <= 75.62778) {
                                        if (data.intervaloVel > 0.35) {
                                            if (data.h > 9) {
                                                return 2.73333;
                                            }
                                            else if (data.h <= 9) {
                                                return 7.81;
                                            }
                                        }
                                        else if (data.intervaloVel <= 0.35) {
                                            return 2.59843;
                                        }
                                    }
                                }
                                else if (data.h <= 6) {
                                    if (data.h > 0) {
                                        return 0.78832;
                                    }
                                    else if (data.h <= 0) {
                                        return 1.77228;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.intervaloTiempo <= 54.17267) {
                    if (data.intervaloVel == null) {
                        return 6.29887;
                    }
                    else if (data.intervaloVel > 0.35) {
                        if (data.h == null) {
                            return 8.76502;
                        }
                        else if (data.h > 10) {
                            if (data.intervaloTiempo > 24.48667) {
                                if (data.intervaloTiempo > 43.53333) {
                                    return 3.11167;
                                }
                                else if (data.intervaloTiempo <= 43.53333) {
                                    if (data.tsDayOfMonth == null) {
                                        return 5.14977;
                                    }
                                    else if (data.tsDayOfMonth > 29) {
                                        if (data.presinNeumticosPa == null) {
                                            return 9.8;
                                        }
                                        else if (data.presinNeumticosPa > 18.5) {
                                            return 17.27667;
                                        }
                                        else if (data.presinNeumticosPa <= 18.5) {
                                            return 5.314;
                                        }
                                    }
                                    else if (data.tsDayOfMonth <= 29) {
                                        if (data.m > 7) {
                                            if (data.fechaYear > 2014) {
                                                return 3.126;
                                            }
                                            else if (data.fechaYear <= 2014) {
                                                return 26.89;
                                            }
                                        }
                                        else if (data.m <= 7) {
                                            if (data.fechaYear > 2014) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 6.8918;
                                                }
                                                else if (data.presinNeumticosPa > 9.5) {
                                                    return 8.48208;
                                                }
                                                else if (data.presinNeumticosPa <= 9.5) {
                                                    return 5.86027;
                                                }
                                            }
                                            else if (data.fechaYear <= 2014) {
                                                return 4.33961;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.intervaloTiempo <= 24.48667) {
                                if (data.tsDayOfMonth == null) {
                                    return 7.20649;
                                }
                                else if (data.tsDayOfMonth > 1) {
                                    if (data.h > 12) {
                                        if (data.fechaYear > 2014) {
                                            if (data.m > 7) {
                                                if (data.intervaloVel > 0.85) {
                                                    if (data.presinNeumticosPa == null) {
                                                        return 13.3975;
                                                    }
                                                    else if (data.presinNeumticosPa > 23.5) {
                                                        return 2.67;
                                                    }
                                                    else if (data.presinNeumticosPa <= 23.5) {
                                                        return 16.97333;
                                                    }
                                                }
                                                else if (data.intervaloVel <= 0.85) {
                                                    return 2.37769;
                                                }
                                            }
                                            else if (data.m <= 7) {
                                                if (data.tsDayOfMonth > 3) {
                                                    return 7.68282;
                                                }
                                                else if (data.tsDayOfMonth <= 3) {
                                                    if (data.intervaloTiempo > 18.35) {
                                                        return 6.66333;
                                                    }
                                                    else if (data.intervaloTiempo <= 18.35) {
                                                        return 11.88571;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.fechaYear <= 2014) {
                                            if (data.m > 1) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 5.56;
                                                }
                                                else if (data.presinNeumticosPa > 21.9) {
                                                    if (data.tempSueloC == null) {
                                                        return 14.736;
                                                    }
                                                    else if (data.tempSueloC > 47) {
                                                        return 8.775;
                                                    }
                                                    else if (data.tempSueloC <= 47) {
                                                        return 18.71;
                                                    }
                                                }
                                                else if (data.presinNeumticosPa <= 21.9) {
                                                    if (data.intervaloVel > 0.95) {
                                                        if (data.fechaDayOfWeek == null) {
                                                            return 13.995;
                                                        }
                                                        else if (data.fechaDayOfWeek > 2) {
                                                            return 21.47;
                                                        }
                                                        else if (data.fechaDayOfWeek <= 2) {
                                                            return 6.52;
                                                        }
                                                    }
                                                    else if (data.intervaloVel <= 0.95) {
                                                        if (data.m > 2) {
                                                            return 4.20297;
                                                        }
                                                        else if (data.m <= 2) {
                                                            if (data.h > 16) {
                                                                return 5.15308;
                                                            }
                                                            else if (data.h <= 16) {
                                                                if (data.presinNeumticosPa > 4.65) {
                                                                    return 6.814;
                                                                }
                                                                else if (data.presinNeumticosPa <= 4.65) {
                                                                    if (data.fechaDayOfWeek == null) {
                                                                        return 13.495;
                                                                    }
                                                                    else if (data.fechaDayOfWeek > 3) {
                                                                        return 6.9;
                                                                    }
                                                                    else if (data.fechaDayOfWeek <= 3) {
                                                                        return 20.09;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.m <= 1) {
                                                return 21.555;
                                            }
                                        }
                                    }
                                    else if (data.h <= 12) {
                                        if (data.fechaMonth == null) {
                                            return 9.61514;
                                        }
                                        else if (data.fechaMonth > 8) {
                                            if (data.velMaxMS == null) {
                                                return 5.25571;
                                            }
                                            else if (data.velMaxMS > 6.835) {
                                                return 12.14;
                                            }
                                            else if (data.velMaxMS <= 6.835) {
                                                return 4.10833;
                                            }
                                        }
                                        else if (data.fechaMonth <= 8) {
                                            if (data.m > 7) {
                                                if (data.fechaYear > 2014) {
                                                    return 4.11;
                                                }
                                                else if (data.fechaYear <= 2014) {
                                                    return 21.99333;
                                                }
                                            }
                                            else if (data.m <= 7) {
                                                if (data.fechaYear > 2014) {
                                                    return 11.96538;
                                                }
                                                else if (data.fechaYear <= 2014) {
                                                    return 6.73636;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.tsDayOfMonth <= 1) {
                                    if (data.presinNeumticosPa == null) {
                                        return 15.426;
                                    }
                                    else if (data.presinNeumticosPa > 7.85) {
                                        return 12.4925;
                                    }
                                    else if (data.presinNeumticosPa <= 7.85) {
                                        return 27.16;
                                    }
                                }
                            }
                        }
                        else if (data.h <= 10) {
                            if (data.h > 1) {
                                if (data.m > 1) {
                                    if (data.m > 7) {
                                        if (data.fechaYear > 2014) {
                                            if (data.h > 6) {
                                                if (data.velMaxMS == null) {
                                                    return 6.33746;
                                                }
                                                else if (data.velMaxMS > 6.58) {
                                                    if (data.presinNeumticosPa == null) {
                                                        return 5.77807;
                                                    }
                                                    else if (data.presinNeumticosPa > 8.675) {
                                                        if (data.h > 7) {
                                                            return 5.95477;
                                                        }
                                                        else if (data.h <= 7) {
                                                            return 1.51571;
                                                        }
                                                    }
                                                    else if (data.presinNeumticosPa <= 8.675) {
                                                        if (data.tsDayOfMonth == null) {
                                                            return 9.455;
                                                        }
                                                        else if (data.tsDayOfMonth > 24) {
                                                            return 15.47;
                                                        }
                                                        else if (data.tsDayOfMonth <= 24) {
                                                            return 6.4475;
                                                        }
                                                    }
                                                }
                                                else if (data.velMaxMS <= 6.58) {
                                                    return 22.28;
                                                }
                                            }
                                            else if (data.h <= 6) {
                                                return 17.66333;
                                            }
                                        }
                                        else if (data.fechaYear <= 2014) {
                                            if (data.h > 3) {
                                                if (data.h > 7) {
                                                    if (data.intervaloTiempo > 17.9) {
                                                        if (data.m > 8) {
                                                            return 18.77357;
                                                        }
                                                        else if (data.m <= 8) {
                                                            return 16.20933;
                                                        }
                                                    }
                                                    else if (data.intervaloTiempo <= 17.9) {
                                                        if (data.fechaMonth == null) {
                                                            return 20.572;
                                                        }
                                                        else if (data.fechaMonth > 8) {
                                                            return 22.58143;
                                                        }
                                                        else if (data.fechaMonth <= 8) {
                                                            return 18.81375;
                                                        }
                                                    }
                                                }
                                                else if (data.h <= 7) {
                                                    if (data.tsDayOfMonth == null) {
                                                        return 15.30921;
                                                    }
                                                    else if (data.tsDayOfMonth > 8) {
                                                        if (data.fechaMonth == null) {
                                                            return 15.98029;
                                                        }
                                                        else if (data.fechaMonth > 6) {
                                                            if (data.carburanteL == null) {
                                                                return 15.48167;
                                                            }
                                                            else if (data.carburanteL > 3.85) {
                                                                if (data.intervaloTiempo > 15.45) {
                                                                    if (data.h > 5) {
                                                                        return 14.88391;
                                                                    }
                                                                    else if (data.h <= 5) {
                                                                        return 17.09929;
                                                                    }
                                                                }
                                                                else if (data.intervaloTiempo <= 15.45) {
                                                                    return 7.79;
                                                                }
                                                            }
                                                            else if (data.carburanteL <= 3.85) {
                                                                return 12.5;
                                                            }
                                                        }
                                                        else if (data.fechaMonth <= 6) {
                                                            return 18.972;
                                                        }
                                                    }
                                                    else if (data.tsDayOfMonth <= 8) {
                                                        if (data.presinNeumticosPa == null) {
                                                            return 12.69944;
                                                        }
                                                        else if (data.presinNeumticosPa > 13.5) {
                                                            return 13.80385;
                                                        }
                                                        else if (data.presinNeumticosPa <= 13.5) {
                                                            return 9.828;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.h <= 3) {
                                                return 11.614;
                                            }
                                        }
                                    }
                                    else if (data.m <= 7) {
                                        if (data.fechaYear > 2014) {
                                            if (data.intervaloTiempo > 28.68) {
                                                if (data.tempSueloC == null) {
                                                    return 9.15699;
                                                }
                                                else if (data.tempSueloC > 43.25) {
                                                    if (data.presinNeumticosPa == null) {
                                                        return 8.93931;
                                                    }
                                                    else if (data.presinNeumticosPa > -8.2) {
                                                        if (data.fechaMonth == null) {
                                                            return 9.0229;
                                                        }
                                                        else if (data.fechaMonth > 1) {
                                                            if (data.velMedMS == null) {
                                                                return 9.1399;
                                                            }
                                                            else if (data.velMedMS > 6.77625) {
                                                                return 8.84094;
                                                            }
                                                            else if (data.velMedMS <= 6.77625) {
                                                                if (data.fechaMonth > 4) {
                                                                    if (data.velMinMS == null) {
                                                                        return 10.24;
                                                                    }
                                                                    else if (data.velMinMS > 6.575) {
                                                                        return 11.73375;
                                                                    }
                                                                    else if (data.velMinMS <= 6.575) {
                                                                        if (data.velMedMS > 6.48) {
                                                                            return 5.25;
                                                                        }
                                                                        else if (data.velMedMS <= 6.48) {
                                                                            return 13.26;
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.fechaMonth <= 4) {
                                                                    return 21.35;
                                                                }
                                                            }
                                                        }
                                                        else if (data.fechaMonth <= 1) {
                                                            return 3.29;
                                                        }
                                                    }
                                                    else if (data.presinNeumticosPa <= -8.2) {
                                                        return 0.58;
                                                    }
                                                }
                                                else if (data.tempSueloC <= 43.25) {
                                                    return 20.15;
                                                }
                                            }
                                            else if (data.intervaloTiempo <= 28.68) {
                                                if (data.h > 6) {
                                                    if (data.m > 3) {
                                                        if (data.velMedMS == null) {
                                                            return 11.85611;
                                                        }
                                                        else if (data.velMedMS > 6.925) {
                                                            return 10.18867;
                                                        }
                                                        else if (data.velMedMS <= 6.925) {
                                                            return 12.49744;
                                                        }
                                                    }
                                                    else if (data.m <= 3) {
                                                        if (data.intervaloTiempo > 21.45) {
                                                            return 12.09143;
                                                        }
                                                        else if (data.intervaloTiempo <= 21.45) {
                                                            return 14.667;
                                                        }
                                                    }
                                                }
                                                else if (data.h <= 6) {
                                                    if (data.retrasoDeArranqueS == null) {
                                                        return 7.14375;
                                                    }
                                                    else if (data.retrasoDeArranqueS > 4.4) {
                                                        return 0.54;
                                                    }
                                                    else if (data.retrasoDeArranqueS <= 4.4) {
                                                        return 8.08714;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.fechaYear <= 2014) {
                                            if (data.tsDayOfMonth == null) {
                                                return 7.73769;
                                            }
                                            else if (data.tsDayOfMonth > 2) {
                                                if (data.m > 6) {
                                                    if (data.tsDayOfMonth > 24) {
                                                        if (data.velMaxMS == null) {
                                                            return 13.88333;
                                                        }
                                                        else if (data.velMaxMS > 6.955) {
                                                            return 9.31333;
                                                        }
                                                        else if (data.velMaxMS <= 6.955) {
                                                            return 16.93;
                                                        }
                                                    }
                                                    else if (data.tsDayOfMonth <= 24) {
                                                        if (data.h > 7) {
                                                            return 7.81818;
                                                        }
                                                        else if (data.h <= 7) {
                                                            return 4.12833;
                                                        }
                                                    }
                                                }
                                                else if (data.m <= 6) {
                                                    if (data.h > 6) {
                                                        if (data.intervaloTiempo > 35.18) {
                                                            return 5.89229;
                                                        }
                                                        else if (data.intervaloTiempo <= 35.18) {
                                                            return 7.4457;
                                                        }
                                                    }
                                                    else if (data.h <= 6) {
                                                        if (data.velMedMS == null) {
                                                            return 3.89667;
                                                        }
                                                        else if (data.velMedMS > 6.875) {
                                                            return 1.64333;
                                                        }
                                                        else if (data.velMedMS <= 6.875) {
                                                            return 10.65667;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.tsDayOfMonth <= 2) {
                                                if (data.fechaMonth == null) {
                                                    return 12.01688;
                                                }
                                                else if (data.fechaMonth > 5) {
                                                    return 6.55636;
                                                }
                                                else if (data.fechaMonth <= 5) {
                                                    if (data.h > 8) {
                                                        return 28.485;
                                                    }
                                                    else if (data.h <= 8) {
                                                        return 21.06;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.m <= 1) {
                                    if (data.fechaYear > 2014) {
                                        if (data.h > 7) {
                                            return 11.42579;
                                        }
                                        else if (data.h <= 7) {
                                            if (data.velMedMS == null) {
                                                return 5.22857;
                                            }
                                            else if (data.velMedMS > 6.935) {
                                                return 7.168;
                                            }
                                            else if (data.velMedMS <= 6.935) {
                                                return 0.38;
                                            }
                                        }
                                    }
                                    else if (data.fechaYear <= 2014) {
                                        if (data.intervaloVel > 0.75) {
                                            if (data.velMinMS == null) {
                                                return 23.84909;
                                            }
                                            else if (data.velMinMS > 6.755) {
                                                return 21.78357;
                                            }
                                            else if (data.velMinMS <= 6.755) {
                                                return 27.46375;
                                            }
                                        }
                                        else if (data.intervaloVel <= 0.75) {
                                            return 16.13727;
                                        }
                                    }
                                }
                            }
                            else if (data.h <= 1) {
                                if (data.intervaloTiempo > 25.4) {
                                    if (data.velMaxMS == null) {
                                        return 2.74129;
                                    }
                                    else if (data.velMaxMS > 6.895) {
                                        return 3.66955;
                                    }
                                    else if (data.velMaxMS <= 6.895) {
                                        return 0.47222;
                                    }
                                }
                                else if (data.intervaloTiempo <= 25.4) {
                                    if (data.tempSueloC == null) {
                                        return 7.43419;
                                    }
                                    else if (data.tempSueloC > 93.5) {
                                        if (data.pesoKg == null) {
                                            return 13.57333;
                                        }
                                        else if (data.pesoKg > 1016.3) {
                                            return 3.65;
                                        }
                                        else if (data.pesoKg <= 1016.3) {
                                            return 15.558;
                                        }
                                    }
                                    else if (data.tempSueloC <= 93.5) {
                                        if (data.velMedMS == null) {
                                            return 5.9608;
                                        }
                                        else if (data.velMedMS > 6.785) {
                                            if (data.intervaloTiempo > 17.95) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 6.01941;
                                                }
                                                else if (data.presinNeumticosPa > 5) {
                                                    return 8.08889;
                                                }
                                                else if (data.presinNeumticosPa <= 5) {
                                                    return 3.69125;
                                                }
                                            }
                                            else if (data.intervaloTiempo <= 17.95) {
                                                return 11.1075;
                                            }
                                        }
                                        else if (data.velMedMS <= 6.785) {
                                            return 0.565;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.intervaloVel <= 0.35) {
                        if (data.h == null) {
                            return 5.2906;
                        }
                        else if (data.h > 5) {
                            if (data.intervaloTiempo > 21.22239) {
                                if (data.h > 12) {
                                    if (data.intervaloTiempo > 32.70588) {
                                        if (data.velMedMS == null) {
                                            return 3.43516;
                                        }
                                        else if (data.velMedMS > 6.995) {
                                            if (data.m > 8) {
                                                return 16.78;
                                            }
                                            else if (data.m <= 8) {
                                                if (data.pesoKg == null) {
                                                    return 8.034;
                                                }
                                                else if (data.pesoKg > 1017.3) {
                                                    return 15.51;
                                                }
                                                else if (data.pesoKg <= 1017.3) {
                                                    return 6.165;
                                                }
                                            }
                                        }
                                        else if (data.velMedMS <= 6.995) {
                                            if (data.h > 16) {
                                                if (data.velMaxMS == null) {
                                                    return 3.0587;
                                                }
                                                else if (data.velMaxMS > 6.865) {
                                                    return 3.72812;
                                                }
                                                else if (data.velMaxMS <= 6.865) {
                                                    return 2.56052;
                                                }
                                            }
                                            else if (data.h <= 16) {
                                                if (data.m > 7) {
                                                    return 2.18625;
                                                }
                                                else if (data.m <= 7) {
                                                    if (data.tempSueloC == null) {
                                                        return 5.10034;
                                                    }
                                                    else if (data.tempSueloC > 46.50833) {
                                                        return 3.95484;
                                                    }
                                                    else if (data.tempSueloC <= 46.50833) {
                                                        return 6.41556;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 32.70588) {
                                        if (data.velMaxMS == null) {
                                            return 4.84352;
                                        }
                                        else if (data.velMaxMS > 6.8543) {
                                            if (data.fechaMonth == null) {
                                                return 5.2449;
                                            }
                                            else if (data.fechaMonth > 6) {
                                                if (data.tsDayOfMonth == null) {
                                                    return 5.99027;
                                                }
                                                else if (data.tsDayOfMonth > 25) {
                                                    if (data.fechaDayOfWeek == null) {
                                                        return 10.55;
                                                    }
                                                    else if (data.fechaDayOfWeek > 6) {
                                                        return 3.47;
                                                    }
                                                    else if (data.fechaDayOfWeek <= 6) {
                                                        return 16.61857;
                                                    }
                                                }
                                                else if (data.tsDayOfMonth <= 25) {
                                                    if (data.retrasoDeArranqueS == null) {
                                                        return 5.55759;
                                                    }
                                                    else if (data.retrasoDeArranqueS > 1.55) {
                                                        if (data.velMedMS == null) {
                                                            return 13.19333;
                                                        }
                                                        else if (data.velMedMS > 6.91) {
                                                            return 16.515;
                                                        }
                                                        else if (data.velMedMS <= 6.91) {
                                                            return 6.55;
                                                        }
                                                    }
                                                    else if (data.retrasoDeArranqueS <= 1.55) {
                                                        if (data.intervaloVel > 0.15) {
                                                            if (data.presinNeumticosPa == null) {
                                                                return 6.4271;
                                                            }
                                                            else if (data.presinNeumticosPa > 27.5) {
                                                                if (data.fechaDayOfWeek == null) {
                                                                    return 12.47333;
                                                                }
                                                                else if (data.fechaDayOfWeek > 4) {
                                                                    return 15.855;
                                                                }
                                                                else if (data.fechaDayOfWeek <= 4) {
                                                                    return 5.71;
                                                                }
                                                            }
                                                            else if (data.presinNeumticosPa <= 27.5) {
                                                                if (data.intervaloTiempo > 26.25833) {
                                                                    if (data.m > 8) {
                                                                        return 16.69;
                                                                    }
                                                                    else if (data.m <= 8) {
                                                                        if (data.carburanteL == null) {
                                                                            return 6.7;
                                                                        }
                                                                        else if (data.carburanteL > 5.85) {
                                                                            return 5.79909;
                                                                        }
                                                                        else if (data.carburanteL <= 5.85) {
                                                                            if (data.h > 13) {
                                                                                return 5.8075;
                                                                            }
                                                                            else if (data.h <= 13) {
                                                                                return 18.395;
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.intervaloTiempo <= 26.25833) {
                                                                    if (data.m > 7) {
                                                                        return 3.00375;
                                                                    }
                                                                    else if (data.m <= 7) {
                                                                        return 5.75143;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else if (data.intervaloVel <= 0.15) {
                                                            if (data.pesoKg == null) {
                                                                return 4.28215;
                                                            }
                                                            else if (data.pesoKg > 1017.15) {
                                                                return 5.25214;
                                                            }
                                                            else if (data.pesoKg <= 1017.15) {
                                                                return 3.54811;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.fechaMonth <= 6) {
                                                if (data.fechaYear > 2014) {
                                                    if (data.fechaMonth > 3) {
                                                        return 6.36843;
                                                    }
                                                    else if (data.fechaMonth <= 3) {
                                                        return 4.40678;
                                                    }
                                                }
                                                else if (data.fechaYear <= 2014) {
                                                    if (data.m > 8) {
                                                        return 13.09;
                                                    }
                                                    else if (data.m <= 8) {
                                                        return 3.9949;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.velMaxMS <= 6.8543) {
                                            if (data.tsDayOfMonth == null) {
                                                return 4.16898;
                                            }
                                            else if (data.tsDayOfMonth > 30) {
                                                if (data.fechaDayOfWeek == null) {
                                                    return 11.63667;
                                                }
                                                else if (data.fechaDayOfWeek > 3) {
                                                    return 21.6;
                                                }
                                                else if (data.fechaDayOfWeek <= 3) {
                                                    return 6.655;
                                                }
                                            }
                                            else if (data.tsDayOfMonth <= 30) {
                                                if (data.fechaYear > 2014) {
                                                    if (data.m > 6) {
                                                        return 3.10743;
                                                    }
                                                    else if (data.m <= 6) {
                                                        if (data.m > 4) {
                                                            return 7.14944;
                                                        }
                                                        else if (data.m <= 4) {
                                                            return 5.122;
                                                        }
                                                    }
                                                }
                                                else if (data.fechaYear <= 2014) {
                                                    return 3.59096;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.h <= 12) {
                                    if (data.intervaloVel > 0.15) {
                                        if (data.velMaxMS == null) {
                                            return 7.67718;
                                        }
                                        else if (data.velMaxMS > 6.68597) {
                                            if (data.presinNeumticosPa == null) {
                                                return 8.0724;
                                            }
                                            else if (data.presinNeumticosPa > 12.86233) {
                                                if (data.h > 11) {
                                                    if (data.tsDayOfMonth == null) {
                                                        return 7.35917;
                                                    }
                                                    else if (data.tsDayOfMonth > 27) {
                                                        return 14.15;
                                                    }
                                                    else if (data.tsDayOfMonth <= 27) {
                                                        if (data.tsDayOfMonth > 14) {
                                                            return 5.13545;
                                                        }
                                                        else if (data.tsDayOfMonth <= 14) {
                                                            if (data.velMaxMS > 6.765) {
                                                                return 9.81875;
                                                            }
                                                            else if (data.velMaxMS <= 6.765) {
                                                                return 4.42667;
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.h <= 11) {
                                                    if (data.velMedMS == null) {
                                                        return 10.42879;
                                                    }
                                                    else if (data.velMedMS > 6.985) {
                                                        if (data.fechaYear > 2014) {
                                                            return 5.64;
                                                        }
                                                        else if (data.fechaYear <= 2014) {
                                                            return 10.41167;
                                                        }
                                                    }
                                                    else if (data.velMedMS <= 6.985) {
                                                        if (data.tempSueloC == null) {
                                                            return 11.1675;
                                                        }
                                                        else if (data.tempSueloC > 67.5) {
                                                            if (data.h > 10) {
                                                                return 9.27667;
                                                            }
                                                            else if (data.h <= 10) {
                                                                if (data.h > 6) {
                                                                    if (data.carburanteL == null) {
                                                                        return 15.11267;
                                                                    }
                                                                    else if (data.carburanteL > 8.5) {
                                                                        return 17.18667;
                                                                    }
                                                                    else if (data.carburanteL <= 8.5) {
                                                                        return 12.00167;
                                                                    }
                                                                }
                                                                else if (data.h <= 6) {
                                                                    if (data.intervaloVel > 0.25) {
                                                                        return 11.657;
                                                                    }
                                                                    else if (data.intervaloVel <= 0.25) {
                                                                        return 6.44;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        else if (data.tempSueloC <= 67.5) {
                                                            if (data.fechaMonth == null) {
                                                                return 8.976;
                                                            }
                                                            else if (data.fechaMonth > 6) {
                                                                return 6.18333;
                                                            }
                                                            else if (data.fechaMonth <= 6) {
                                                                return 13.165;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.presinNeumticosPa <= 12.86233) {
                                                if (data.m > 7) {
                                                    if (data.fechaYear > 2014) {
                                                        return 5.4125;
                                                    }
                                                    else if (data.fechaYear <= 2014) {
                                                        return 11.52;
                                                    }
                                                }
                                                else if (data.m <= 7) {
                                                    if (data.carburanteL == null) {
                                                        return 6.7027;
                                                    }
                                                    else if (data.carburanteL > 19.65) {
                                                        if (data.m > 5) {
                                                            return 16.78667;
                                                        }
                                                        else if (data.m <= 5) {
                                                            if (data.pesoKg == null) {
                                                                return 7.78958;
                                                            }
                                                            else if (data.pesoKg > 1005.95) {
                                                                if (data.pesoKg > 1033.3) {
                                                                    return 17;
                                                                }
                                                                else if (data.pesoKg <= 1033.3) {
                                                                    return 6.73952;
                                                                }
                                                            }
                                                            else if (data.pesoKg <= 1005.95) {
                                                                if (data.presinNeumticosPa > 2.9) {
                                                                    return 20.47;
                                                                }
                                                                else if (data.presinNeumticosPa <= 2.9) {
                                                                    return 7.95;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    else if (data.carburanteL <= 19.65) {
                                                        if (data.fechaMonth == null) {
                                                            return 6.13364;
                                                        }
                                                        else if (data.fechaMonth > 1) {
                                                            if (data.h > 7) {
                                                                return 6.43917;
                                                            }
                                                            else if (data.h <= 7) {
                                                                if (data.fechaMonth > 6) {
                                                                    if (data.intervaloTiempo > 44.45) {
                                                                        return 16.53;
                                                                    }
                                                                    else if (data.intervaloTiempo <= 44.45) {
                                                                        return 5.404;
                                                                    }
                                                                }
                                                                else if (data.fechaMonth <= 6) {
                                                                    return 3.73696;
                                                                }
                                                            }
                                                        }
                                                        else if (data.fechaMonth <= 1) {
                                                            return 9.138;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.velMaxMS <= 6.68597) {
                                            return 4.88667;
                                        }
                                    }
                                    else if (data.intervaloVel <= 0.15) {
                                        if (data.h > 7) {
                                            return 5.97554;
                                        }
                                        else if (data.h <= 7) {
                                            if (data.m > 7) {
                                                if (data.fechaYear > 2014) {
                                                    return 1.7;
                                                }
                                                else if (data.fechaYear <= 2014) {
                                                    return 8.951;
                                                }
                                            }
                                            else if (data.m <= 7) {
                                                return 2.37246;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.intervaloTiempo <= 21.22239) {
                                if (data.m > 7) {
                                    if (data.fechaYear > 2014) {
                                        return 4.47373;
                                    }
                                    else if (data.fechaYear <= 2014) {
                                        if (data.h > 7) {
                                            if (data.h > 12) {
                                                if (data.h > 16) {
                                                    return 12.94733;
                                                }
                                                else if (data.h <= 16) {
                                                    if (data.velMedMS == null) {
                                                        return 15.58591;
                                                    }
                                                    else if (data.velMedMS > 6.915) {
                                                        return 13.62;
                                                    }
                                                    else if (data.velMedMS <= 6.915) {
                                                        return 16.94692;
                                                    }
                                                }
                                            }
                                            else if (data.h <= 12) {
                                                return 19.755;
                                            }
                                        }
                                        else if (data.h <= 7) {
                                            return 5.686;
                                        }
                                    }
                                }
                                else if (data.m <= 7) {
                                    if (data.h > 12) {
                                        if (data.fechaYear > 2014) {
                                            if (data.h > 17) {
                                                return 6.20636;
                                            }
                                            else if (data.h <= 17) {
                                                return 7.51269;
                                            }
                                        }
                                        else if (data.fechaYear <= 2014) {
                                            if (data.m > 6) {
                                                if (data.tsDayOfMonth == null) {
                                                    return 6.92873;
                                                }
                                                else if (data.tsDayOfMonth > 23) {
                                                    if (data.h > 15) {
                                                        return 14.0875;
                                                    }
                                                    else if (data.h <= 15) {
                                                        return 20.33;
                                                    }
                                                }
                                                else if (data.tsDayOfMonth <= 23) {
                                                    return 4.9514;
                                                }
                                            }
                                            else if (data.m <= 6) {
                                                if (data.tsDayOfMonth == null) {
                                                    return 4.50441;
                                                }
                                                else if (data.tsDayOfMonth > 1) {
                                                    if (data.h > 16) {
                                                        return 3.95833;
                                                    }
                                                    else if (data.h <= 16) {
                                                        return 5.14518;
                                                    }
                                                }
                                                else if (data.tsDayOfMonth <= 1) {
                                                    return 16.85;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.h <= 12) {
                                        if (data.tsDayOfMonth == null) {
                                            return 8.72122;
                                        }
                                        else if (data.tsDayOfMonth > 28) {
                                            if (data.m > 5) {
                                                if (data.intervaloVel > 0.15) {
                                                    if (data.fechaYear > 2014) {
                                                        return 10.91;
                                                    }
                                                    else if (data.fechaYear <= 2014) {
                                                        return 18.37;
                                                    }
                                                }
                                                else if (data.intervaloVel <= 0.15) {
                                                    return 22.67;
                                                }
                                            }
                                            else if (data.m <= 5) {
                                                return 9.53222;
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 28) {
                                            if (data.fechaYear > 2014) {
                                                if (data.h > 7) {
                                                    if (data.h > 11) {
                                                        return 8.927;
                                                    }
                                                    else if (data.h <= 11) {
                                                        if (data.pesoKg == null) {
                                                            return 11.04423;
                                                        }
                                                        else if (data.pesoKg > 1010.65) {
                                                            return 11.3866;
                                                        }
                                                        else if (data.pesoKg <= 1010.65) {
                                                            return 7.826;
                                                        }
                                                    }
                                                }
                                                else if (data.h <= 7) {
                                                    if (data.intervaloVel > 0.15) {
                                                        return 8.06667;
                                                    }
                                                    else if (data.intervaloVel <= 0.15) {
                                                        return 2.98875;
                                                    }
                                                }
                                            }
                                            else if (data.fechaYear <= 2014) {
                                                if (data.m > 1) {
                                                    if (data.presinNeumticosPa == null) {
                                                        return 7.23639;
                                                    }
                                                    else if (data.presinNeumticosPa > 20.9) {
                                                        return 17.67;
                                                    }
                                                    else if (data.presinNeumticosPa <= 20.9) {
                                                        if (data.intervaloTiempo > 18.75167) {
                                                            if (data.h > 6) {
                                                                return 6.39643;
                                                            }
                                                            else if (data.h <= 6) {
                                                                return 1.19;
                                                            }
                                                        }
                                                        else if (data.intervaloTiempo <= 18.75167) {
                                                            if (data.velMedMS == null) {
                                                                return 7.73333;
                                                            }
                                                            else if (data.velMedMS > 6.96) {
                                                                if (data.intervaloVel > 0.2) {
                                                                    return 13.924;
                                                                }
                                                                else if (data.intervaloVel <= 0.2) {
                                                                    return 4.22;
                                                                }
                                                            }
                                                            else if (data.velMedMS <= 6.96) {
                                                                return 7.33565;
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.m <= 1) {
                                                    return 12.47429;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.h <= 5) {
                            if (data.m > 7) {
                                if (data.fechaYear > 2014) {
                                    return 1.53571;
                                }
                                else if (data.fechaYear <= 2014) {
                                    if (data.h > 0) {
                                        if (data.tsDayOfMonth == null) {
                                            return 7.90438;
                                        }
                                        else if (data.tsDayOfMonth > 19) {
                                            if (data.m > 8) {
                                                if (data.h > 1) {
                                                    return 11.16588;
                                                }
                                                else if (data.h <= 1) {
                                                    return 6.82429;
                                                }
                                            }
                                            else if (data.m <= 8) {
                                                return 7.29579;
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 19) {
                                            return 7.11478;
                                        }
                                    }
                                    else if (data.h <= 0) {
                                        return 10.30162;
                                    }
                                }
                            }
                            else if (data.m <= 7) {
                                if (data.h > 1) {
                                    if (data.m > 6) {
                                        if (data.intervaloTiempo > 50.3) {
                                            return 8.92667;
                                        }
                                        else if (data.intervaloTiempo <= 50.3) {
                                            if (data.tsDayOfMonth == null) {
                                                return 3.09441;
                                            }
                                            else if (data.tsDayOfMonth > 24) {
                                                return 5.57429;
                                            }
                                            else if (data.tsDayOfMonth <= 24) {
                                                return 2.45148;
                                            }
                                        }
                                    }
                                    else if (data.m <= 6) {
                                        return 1.0595;
                                    }
                                }
                                else if (data.h <= 1) {
                                    if (data.velMedMS == null) {
                                        return 4.15114;
                                    }
                                    else if (data.velMedMS > 6.835) {
                                        if (data.intervaloTiempo > 17.98442) {
                                            if (data.m > 6) {
                                                if (data.tsDayOfMonth == null) {
                                                    return 5.49139;
                                                }
                                                else if (data.tsDayOfMonth > 23) {
                                                    if (data.fechaYear > 2014) {
                                                        return 3.23;
                                                    }
                                                    else if (data.fechaYear <= 2014) {
                                                        return 10.11545;
                                                    }
                                                }
                                                else if (data.tsDayOfMonth <= 23) {
                                                    return 3.47652;
                                                }
                                            }
                                            else if (data.m <= 6) {
                                                if (data.h > 0) {
                                                    return 2.84413;
                                                }
                                                else if (data.h <= 0) {
                                                    return 4.47947;
                                                }
                                            }
                                        }
                                        else if (data.intervaloTiempo <= 17.98442) {
                                            if (data.m > 1) {
                                                if (data.tempSueloC == null) {
                                                    return 5.95125;
                                                }
                                                else if (data.tempSueloC > 71.2) {
                                                    return 4.96813;
                                                }
                                                else if (data.tempSueloC <= 71.2) {
                                                    return 7.9175;
                                                }
                                            }
                                            else if (data.m <= 1) {
                                                return 12.78833;
                                            }
                                        }
                                    }
                                    else if (data.velMedMS <= 6.835) {
                                        return 0.82381;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (data.intervaloTiempo <= 14.33425) {
            if (data.h == null) {
                return 11.94285;
            }
            else if (data.h > 7) {
                if (data.m == null) {
                    return 13.49908;
                }
                else if (data.m > 8) {
                    if (data.h > 16) {
                        if (data.h > 22) {
                            return 11.38468;
                        }
                        else if (data.h <= 22) {
                            if (data.tsDayOfMonth == null) {
                                return 13.6516;
                            }
                            else if (data.tsDayOfMonth > 9) {
                                if (data.h > 20) {
                                    if (data.sem == null) {
                                        return 14.4811;
                                    }
                                    else if (data.sem > 5) {
                                        return 13.30916;
                                    }
                                    else if (data.sem <= 5) {
                                        if (data.carburanteL == null) {
                                            return 15.12612;
                                        }
                                        else if (data.carburanteL > 43.9) {
                                            if (data.fechaDayOfWeek == null) {
                                                return 8.49;
                                            }
                                            else if (data.fechaDayOfWeek > 4) {
                                                return 14.65;
                                            }
                                            else if (data.fechaDayOfWeek <= 4) {
                                                return 2.33;
                                            }
                                        }
                                        else if (data.carburanteL <= 43.9) {
                                            return 15.23063;
                                        }
                                    }
                                }
                                else if (data.h <= 20) {
                                    if (data.h > 17) {
                                        if (data.pesoKg == null) {
                                            return 13.25135;
                                        }
                                        else if (data.pesoKg > 1035.5) {
                                            if (data.velMinMS == null) {
                                                return 9.595;
                                            }
                                            else if (data.velMinMS > 6.875) {
                                                return 13.2;
                                            }
                                            else if (data.velMinMS <= 6.875) {
                                                return 5.99;
                                            }
                                        }
                                        else if (data.pesoKg <= 1035.5) {
                                            return 13.29302;
                                        }
                                    }
                                    else if (data.h <= 17) {
                                        return 14.22327;
                                    }
                                }
                            }
                            else if (data.tsDayOfMonth <= 9) {
                                if (data.fechaYear > 2014) {
                                    return 1.836;
                                }
                                else if (data.fechaYear <= 2014) {
                                    return 13.07647;
                                }
                            }
                        }
                    }
                    else if (data.h <= 16) {
                        if (data.h > 11) {
                            if (data.m > 10) {
                                if (data.tsDayOfMonth == null) {
                                    return 18.1694;
                                }
                                else if (data.tsDayOfMonth > 29) {
                                    if (data.retrasoDeArranqueS == null) {
                                        return 13.96333;
                                    }
                                    else if (data.retrasoDeArranqueS > 0.05) {
                                        return 19.55;
                                    }
                                    else if (data.retrasoDeArranqueS <= 0.05) {
                                        return 11.17;
                                    }
                                }
                                else if (data.tsDayOfMonth <= 29) {
                                    if (data.pesoKg == null) {
                                        return 18.35496;
                                    }
                                    else if (data.pesoKg > 1034.14583) {
                                        if (data.h > 12) {
                                            return 20.406;
                                        }
                                        else if (data.h <= 12) {
                                            return 27.5;
                                        }
                                    }
                                    else if (data.pesoKg <= 1034.14583) {
                                        if (data.intervaloVel == null) {
                                            return 18.2122;
                                        }
                                        else if (data.intervaloVel > 0.15) {
                                            if (data.presinNeumticosPa == null) {
                                                return 18.79017;
                                            }
                                            else if (data.presinNeumticosPa > 7.81071) {
                                                if (data.h > 14) {
                                                    if (data.sem == null) {
                                                        return 19.01778;
                                                    }
                                                    else if (data.sem > 1) {
                                                        if (data.h > 15) {
                                                            return 18.37;
                                                        }
                                                        else if (data.h <= 15) {
                                                            return 20.21722;
                                                        }
                                                    }
                                                    else if (data.sem <= 1) {
                                                        return 16.16333;
                                                    }
                                                }
                                                else if (data.h <= 14) {
                                                    return 17.77;
                                                }
                                            }
                                            else if (data.presinNeumticosPa <= 7.81071) {
                                                if (data.velMinMS == null) {
                                                    return 20.73281;
                                                }
                                                else if (data.velMinMS > 6.83) {
                                                    return 19.08158;
                                                }
                                                else if (data.velMinMS <= 6.83) {
                                                    if (data.tsDayOfMonth > 20) {
                                                        return 27.92333;
                                                    }
                                                    else if (data.tsDayOfMonth <= 20) {
                                                        return 21.713;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.intervaloVel <= 0.15) {
                                            return 16.95181;
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 10) {
                                if (data.intervaloVel == null) {
                                    return 16.88051;
                                }
                                else if (data.intervaloVel > 0.55) {
                                    return 18.19818;
                                }
                                else if (data.intervaloVel <= 0.55) {
                                    if (data.velMedMS == null) {
                                        return 16.32303;
                                    }
                                    else if (data.velMedMS > 6.93396) {
                                        if (data.tempSueloC == null) {
                                            return 14.19579;
                                        }
                                        else if (data.tempSueloC > 29.7) {
                                            return 14.76611;
                                        }
                                        else if (data.tempSueloC <= 29.7) {
                                            return 3.93;
                                        }
                                    }
                                    else if (data.velMedMS <= 6.93396) {
                                        if (data.h > 14) {
                                            if (data.tsDayOfMonth == null) {
                                                return 17.52151;
                                            }
                                            else if (data.tsDayOfMonth > 13) {
                                                return 18.62914;
                                            }
                                            else if (data.tsDayOfMonth <= 13) {
                                                return 16.50132;
                                            }
                                        }
                                        else if (data.h <= 14) {
                                            if (data.h > 12) {
                                                if (data.velMedMS > 6.45667) {
                                                    return 15.46989;
                                                }
                                                else if (data.velMedMS <= 6.45667) {
                                                    return 0.56;
                                                }
                                            }
                                            else if (data.h <= 12) {
                                                return 17.32375;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.h <= 11) {
                            if (data.m > 9) {
                                if (data.sem == null) {
                                    return 22.49094;
                                }
                                else if (data.sem > 6) {
                                    return 25.04556;
                                }
                                else if (data.sem <= 6) {
                                    if (data.sem > 2) {
                                        if (data.h > 10) {
                                            if (data.intervaloTiempo > 2.9) {
                                                if (data.pesoKg == null) {
                                                    return 20.43508;
                                                }
                                                else if (data.pesoKg > 1034.1) {
                                                    if (data.sem > 4) {
                                                        return 30.785;
                                                    }
                                                    else if (data.sem <= 4) {
                                                        return 17.57;
                                                    }
                                                }
                                                else if (data.pesoKg <= 1034.1) {
                                                    return 20.17246;
                                                }
                                            }
                                            else if (data.intervaloTiempo <= 2.9) {
                                                return 28.88;
                                            }
                                        }
                                        else if (data.h <= 10) {
                                            return 22.21282;
                                        }
                                    }
                                    else if (data.sem <= 2) {
                                        if (data.pesoKg == null) {
                                            return 23.30057;
                                        }
                                        else if (data.pesoKg > 1024.9125) {
                                            return 25.74667;
                                        }
                                        else if (data.pesoKg <= 1024.9125) {
                                            if (data.tsDayOfMonth == null) {
                                                return 22.79097;
                                            }
                                            else if (data.tsDayOfMonth > 27) {
                                                return 26.64333;
                                            }
                                            else if (data.tsDayOfMonth <= 27) {
                                                return 22.62348;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 9) {
                                if (data.fechaYear > 2014) {
                                    if (data.tsDayOfMonth == null) {
                                        return 12.80214;
                                    }
                                    else if (data.tsDayOfMonth > 27) {
                                        return 20.33571;
                                    }
                                    else if (data.tsDayOfMonth <= 27) {
                                        return 5.26857;
                                    }
                                }
                                else if (data.fechaYear <= 2014) {
                                    return 21.13458;
                                }
                            }
                        }
                    }
                }
                else if (data.m <= 8) {
                    if (data.m > 1) {
                        if (data.h > 12) {
                            if (data.m > 7) {
                                if (data.fechaYear > 2014) {
                                    return 4.6804;
                                }
                                else if (data.fechaYear <= 2014) {
                                    if (data.h > 16) {
                                        return 11.46148;
                                    }
                                    else if (data.h <= 16) {
                                        if (data.velMinMS == null) {
                                            return 13.84619;
                                        }
                                        else if (data.velMinMS > 6.935) {
                                            return 11.76937;
                                        }
                                        else if (data.velMinMS <= 6.935) {
                                            return 14.33485;
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 7) {
                                if (data.tsDayOfMonth == null) {
                                    return 8.17438;
                                }
                                else if (data.tsDayOfMonth > 3) {
                                    if (data.fechaYear > 2014) {
                                        if (data.m > 2) {
                                            if (data.h > 16) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 6.65728;
                                                }
                                                else if (data.presinNeumticosPa > 5.375) {
                                                    return 6.40575;
                                                }
                                                else if (data.presinNeumticosPa <= 5.375) {
                                                    return 10.97765;
                                                }
                                            }
                                            else if (data.h <= 16) {
                                                if (data.velMinMS == null) {
                                                    return 8.3928;
                                                }
                                                else if (data.velMinMS > 6.875) {
                                                    return 7.60584;
                                                }
                                                else if (data.velMinMS <= 6.875) {
                                                    if (data.presinNeumticosPa == null) {
                                                        return 8.88956;
                                                    }
                                                    else if (data.presinNeumticosPa > 5.65) {
                                                        if (data.h > 14) {
                                                            return 9.31349;
                                                        }
                                                        else if (data.h <= 14) {
                                                            return 8.19405;
                                                        }
                                                    }
                                                    else if (data.presinNeumticosPa <= 5.65) {
                                                        return 14.31667;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.m <= 2) {
                                            if (data.h > 16) {
                                                return 10.67262;
                                            }
                                            else if (data.h <= 16) {
                                                return 13.02764;
                                            }
                                        }
                                    }
                                    else if (data.fechaYear <= 2014) {
                                        if (data.m > 6) {
                                            if (data.tsDayOfMonth > 23) {
                                                if (data.h > 18) {
                                                    return 11.65833;
                                                }
                                                else if (data.h <= 18) {
                                                    return 14.39263;
                                                }
                                            }
                                            else if (data.tsDayOfMonth <= 23) {
                                                return 5.12651;
                                            }
                                        }
                                        else if (data.m <= 6) {
                                            if (data.pesoKg == null) {
                                                return 5.44529;
                                            }
                                            else if (data.pesoKg > 1010.52667) {
                                                if (data.h > 16) {
                                                    if (data.velMaxMS == null) {
                                                        return 4.28207;
                                                    }
                                                    else if (data.velMaxMS > 6.68) {
                                                        return 4.44081;
                                                    }
                                                    else if (data.velMaxMS <= 6.68) {
                                                        return 0.758;
                                                    }
                                                }
                                                else if (data.h <= 16) {
                                                    return 5.62639;
                                                }
                                            }
                                            else if (data.pesoKg <= 1010.52667) {
                                                if (data.fechaMonth == null) {
                                                    return 8.50973;
                                                }
                                                else if (data.fechaMonth > 4) {
                                                    if (data.sem == null) {
                                                        return 10.1408;
                                                    }
                                                    else if (data.sem > 3) {
                                                        return 5.095;
                                                    }
                                                    else if (data.sem <= 3) {
                                                        return 10.57957;
                                                    }
                                                }
                                                else if (data.fechaMonth <= 4) {
                                                    return 5.11167;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.tsDayOfMonth <= 3) {
                                    if (data.fechaMonth == null) {
                                        return 10.69347;
                                    }
                                    else if (data.fechaMonth > 4) {
                                        if (data.fechaYear > 2014) {
                                            if (data.h > 16) {
                                                return 10.59228;
                                            }
                                            else if (data.h <= 16) {
                                                if (data.retrasoDeArranqueS == null) {
                                                    return 12.51106;
                                                }
                                                else if (data.retrasoDeArranqueS > 0.45) {
                                                    return 5.935;
                                                }
                                                else if (data.retrasoDeArranqueS <= 0.45) {
                                                    return 12.80333;
                                                }
                                            }
                                        }
                                        else if (data.fechaYear <= 2014) {
                                            if (data.h > 16) {
                                                return 4.66162;
                                            }
                                            else if (data.h <= 16) {
                                                return 6.60077;
                                            }
                                        }
                                    }
                                    else if (data.fechaMonth <= 4) {
                                        if (data.m > 2) {
                                            if (data.fechaYear > 2014) {
                                                if (data.h > 16) {
                                                    return 10.55955;
                                                }
                                                else if (data.h <= 16) {
                                                    return 13.11818;
                                                }
                                            }
                                            else if (data.fechaYear <= 2014) {
                                                if (data.fechaDayOfWeek == null) {
                                                    return 3.7875;
                                                }
                                                else if (data.fechaDayOfWeek > 4) {
                                                    return 0.17333;
                                                }
                                                else if (data.fechaDayOfWeek <= 4) {
                                                    return 5.956;
                                                }
                                            }
                                        }
                                        else if (data.m <= 2) {
                                            if (data.retrasoDeArranqueS == null) {
                                                return 18.79857;
                                            }
                                            else if (data.retrasoDeArranqueS > 0.65) {
                                                if (data.fechaYear > 2014) {
                                                    return 7.712;
                                                }
                                                else if (data.fechaYear <= 2014) {
                                                    return 12.84667;
                                                }
                                            }
                                            else if (data.retrasoDeArranqueS <= 0.65) {
                                                if (data.velMaxMS == null) {
                                                    return 21.51296;
                                                }
                                                else if (data.velMaxMS > 6.855) {
                                                    if (data.carburanteL == null) {
                                                        return 18.76273;
                                                    }
                                                    else if (data.carburanteL > 29.3) {
                                                        return 15.09333;
                                                    }
                                                    else if (data.carburanteL <= 29.3) {
                                                        return 20.13875;
                                                    }
                                                }
                                                else if (data.velMaxMS <= 6.855) {
                                                    return 23.40375;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.h <= 12) {
                            if (data.m > 7) {
                                if (data.fechaYear > 2014) {
                                    return 7.0948;
                                }
                                else if (data.fechaYear <= 2014) {
                                    if (data.h > 11) {
                                        return 16.29368;
                                    }
                                    else if (data.h <= 11) {
                                        return 19.52192;
                                    }
                                }
                            }
                            else if (data.m <= 7) {
                                if (data.fechaYear > 2014) {
                                    if (data.m > 3) {
                                        if (data.h > 11) {
                                            return 9.11923;
                                        }
                                        else if (data.h <= 11) {
                                            if (data.h > 10) {
                                                return 10.86379;
                                            }
                                            else if (data.h <= 10) {
                                                return 12.01199;
                                            }
                                        }
                                    }
                                    else if (data.m <= 3) {
                                        if (data.pesoKg == null) {
                                            return 15.13692;
                                        }
                                        else if (data.pesoKg > 1020.5) {
                                            if (data.tsDayOfMonth == null) {
                                                return 15.84968;
                                            }
                                            else if (data.tsDayOfMonth > 28) {
                                                return 11.92;
                                            }
                                            else if (data.tsDayOfMonth <= 28) {
                                                if (data.h > 10) {
                                                    if (data.sem == null) {
                                                        return 14.87542;
                                                    }
                                                    else if (data.sem > 1) {
                                                        return 14.51116;
                                                    }
                                                    else if (data.sem <= 1) {
                                                        return 18.008;
                                                    }
                                                }
                                                else if (data.h <= 10) {
                                                    return 16.94191;
                                                }
                                            }
                                        }
                                        else if (data.pesoKg <= 1020.5) {
                                            if (data.fechaMonth == null) {
                                                return 13.23109;
                                            }
                                            else if (data.fechaMonth > 2) {
                                                if (data.fechaMonth > 5) {
                                                    return 14.816;
                                                }
                                                else if (data.fechaMonth <= 5) {
                                                    if (data.pesoKg > 1020.15) {
                                                        return 18.51;
                                                    }
                                                    else if (data.pesoKg <= 1020.15) {
                                                        return 9.875;
                                                    }
                                                }
                                            }
                                            else if (data.fechaMonth <= 2) {
                                                if (data.tsDayOfMonth == null) {
                                                    return 14.91833;
                                                }
                                                else if (data.tsDayOfMonth > 8) {
                                                    return 16.32882;
                                                }
                                                else if (data.tsDayOfMonth <= 8) {
                                                    return 11.49286;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.fechaYear <= 2014) {
                                    if (data.intervaloTiempo > 4.00833) {
                                        if (data.m > 6) {
                                            if (data.tsDayOfMonth == null) {
                                                return 11.73483;
                                            }
                                            else if (data.tsDayOfMonth > 23) {
                                                return 19.86842;
                                            }
                                            else if (data.tsDayOfMonth <= 23) {
                                                return 7.96561;
                                            }
                                        }
                                        else if (data.m <= 6) {
                                            if (data.tsDayOfMonth == null) {
                                                return 8.33182;
                                            }
                                            else if (data.tsDayOfMonth > 2) {
                                                if (data.intervaloTiempo > 8.56833) {
                                                    return 7.34811;
                                                }
                                                else if (data.intervaloTiempo <= 8.56833) {
                                                    if (data.pesoKg == null) {
                                                        return 8.75125;
                                                    }
                                                    else if (data.pesoKg > 1009.3) {
                                                        return 8.2646;
                                                    }
                                                    else if (data.pesoKg <= 1009.3) {
                                                        return 12.15778;
                                                    }
                                                }
                                            }
                                            else if (data.tsDayOfMonth <= 2) {
                                                if (data.fechaMonth == null) {
                                                    return 12.02259;
                                                }
                                                else if (data.fechaMonth > 5) {
                                                    return 7.99952;
                                                }
                                                else if (data.fechaMonth <= 5) {
                                                    if (data.tempSueloC == null) {
                                                        return 26.10333;
                                                    }
                                                    else if (data.tempSueloC > 87.5) {
                                                        return 20.02;
                                                    }
                                                    else if (data.tempSueloC <= 87.5) {
                                                        return 29.145;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 4.00833) {
                                        if (data.m > 2) {
                                            if (data.carburanteL == null) {
                                                return 10.06167;
                                            }
                                            else if (data.carburanteL > 9.8) {
                                                return 16.945;
                                            }
                                            else if (data.carburanteL <= 9.8) {
                                                return 6.62;
                                            }
                                        }
                                        else if (data.m <= 2) {
                                            return 29.81667;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.m <= 1) {
                        if (data.fechaYear > 2014) {
                            if (data.h > 12) {
                                if (data.h > 16) {
                                    return 6.08421;
                                }
                                else if (data.h <= 16) {
                                    if (data.carburanteL == null) {
                                        return 8.50093;
                                    }
                                    else if (data.carburanteL > 11) {
                                        return 7.45481;
                                    }
                                    else if (data.carburanteL <= 11) {
                                        return 9.54704;
                                    }
                                }
                            }
                            else if (data.h <= 12) {
                                if (data.carburanteL == null) {
                                    return 11.54094;
                                }
                                else if (data.carburanteL > 8.93333) {
                                    if (data.tsDayOfMonth == null) {
                                        return 10.00568;
                                    }
                                    else if (data.tsDayOfMonth > 17) {
                                        if (data.fechaDayOfWeek == null) {
                                            return 10.81893;
                                        }
                                        else if (data.fechaDayOfWeek > 5) {
                                            return 13.23714;
                                        }
                                        else if (data.fechaDayOfWeek <= 5) {
                                            return 10.01286;
                                        }
                                    }
                                    else if (data.tsDayOfMonth <= 17) {
                                        return 7.47556;
                                    }
                                }
                                else if (data.carburanteL <= 8.93333) {
                                    if (data.fechaMonth == null) {
                                        return 13.64481;
                                    }
                                    else if (data.fechaMonth > 6) {
                                        return 12.02818;
                                    }
                                    else if (data.fechaMonth <= 6) {
                                        if (data.tempSueloC == null) {
                                            return 14.75625;
                                        }
                                        else if (data.tempSueloC > 72.5) {
                                            return 11.7575;
                                        }
                                        else if (data.tempSueloC <= 72.5) {
                                            return 15.75583;
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.fechaYear <= 2014) {
                            if (data.h > 16) {
                                if (data.velMinMS == null) {
                                    return 20.06176;
                                }
                                else if (data.velMinMS > 6.805) {
                                    if (data.tsDayOfMonth == null) {
                                        return 18.63868;
                                    }
                                    else if (data.tsDayOfMonth > 7) {
                                        return 19.61842;
                                    }
                                    else if (data.tsDayOfMonth <= 7) {
                                        return 17.39767;
                                    }
                                }
                                else if (data.velMinMS <= 6.805) {
                                    if (data.velMinMS > 6.765) {
                                        return 20.34453;
                                    }
                                    else if (data.velMinMS <= 6.765) {
                                        return 21.73082;
                                    }
                                }
                            }
                            else if (data.h <= 16) {
                                if (data.h > 11) {
                                    if (data.velMinMS == null) {
                                        return 24.83554;
                                    }
                                    else if (data.velMinMS > 6.685) {
                                        if (data.tsDayOfMonth == null) {
                                            return 23.48125;
                                        }
                                        else if (data.tsDayOfMonth > 7) {
                                            if (data.velMinMS > 6.755) {
                                                return 23.02833;
                                            }
                                            else if (data.velMinMS <= 6.755) {
                                                return 25.194;
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 7) {
                                            if (data.velMedMS == null) {
                                                return 21.83048;
                                            }
                                            else if (data.velMedMS > 6.77) {
                                                return 19.73;
                                            }
                                            else if (data.velMedMS <= 6.77) {
                                                return 22.88071;
                                            }
                                        }
                                    }
                                    else if (data.velMinMS <= 6.685) {
                                        if (data.h > 12) {
                                            return 25.88646;
                                        }
                                        else if (data.h <= 12) {
                                            return 28.86111;
                                        }
                                    }
                                }
                                else if (data.h <= 11) {
                                    if (data.velMinMS == null) {
                                        return 28.12646;
                                    }
                                    else if (data.velMinMS > 6.92) {
                                        return 10.32;
                                    }
                                    else if (data.velMinMS <= 6.92) {
                                        if (data.h > 8) {
                                            if (data.velMaxMS == null) {
                                                return 28.8571;
                                            }
                                            else if (data.velMaxMS > 6.705) {
                                                return 28.24184;
                                            }
                                            else if (data.velMaxMS <= 6.705) {
                                                return 30.3645;
                                            }
                                        }
                                        else if (data.h <= 8) {
                                            return 25.40917;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (data.h <= 7) {
                if (data.m == null) {
                    return 5.06918;
                }
                else if (data.m > 2) {
                    if (data.h > 1) {
                        if (data.intervaloVel == null) {
                            return 3.21256;
                        }
                        else if (data.intervaloVel > 0.55) {
                            if (data.intervaloTiempo > 9.25) {
                                if (data.tsDayOfMonth == null) {
                                    return 9.15429;
                                }
                                else if (data.tsDayOfMonth > 12) {
                                    return 7.25;
                                }
                                else if (data.tsDayOfMonth <= 12) {
                                    return 11.69333;
                                }
                            }
                            else if (data.intervaloTiempo <= 9.25) {
                                return 2.885;
                            }
                        }
                        else if (data.intervaloVel <= 0.55) {
                            if (data.m > 7) {
                                if (data.velMinMS == null) {
                                    return 3.53473;
                                }
                                else if (data.velMinMS > 6.73) {
                                    if (data.fechaYear > 2014) {
                                        if (data.m > 9) {
                                            return 3.66277;
                                        }
                                        else if (data.m <= 9) {
                                            return 0.91611;
                                        }
                                    }
                                    else if (data.fechaYear <= 2014) {
                                        if (data.intervaloVel > 0.35) {
                                            if (data.velMedMS == null) {
                                                return 10.715;
                                            }
                                            else if (data.velMedMS > 6.945) {
                                                return 2.98;
                                            }
                                            else if (data.velMedMS <= 6.945) {
                                                return 13.29333;
                                            }
                                        }
                                        else if (data.intervaloVel <= 0.35) {
                                            if (data.m > 9) {
                                                return 3.49802;
                                            }
                                            else if (data.m <= 9) {
                                                return 5.27808;
                                            }
                                        }
                                    }
                                }
                                else if (data.velMinMS <= 6.73) {
                                    return 16.12;
                                }
                            }
                            else if (data.m <= 7) {
                                if (data.fechaYear > 2014) {
                                    if (data.tsDayOfMonth == null) {
                                        return 3.32597;
                                    }
                                    else if (data.tsDayOfMonth > 16) {
                                        if (data.velMaxMS == null) {
                                            return 0.96362;
                                        }
                                        else if (data.velMaxMS > 6.835) {
                                            return 0.77174;
                                        }
                                        else if (data.velMaxMS <= 6.835) {
                                            return 9.79;
                                        }
                                    }
                                    else if (data.tsDayOfMonth <= 16) {
                                        if (data.m > 3) {
                                            return 1.37111;
                                        }
                                        else if (data.m <= 3) {
                                            return 5.61062;
                                        }
                                    }
                                }
                                else if (data.fechaYear <= 2014) {
                                    if (data.pesoKg == null) {
                                        return 1.12121;
                                    }
                                    else if (data.pesoKg > 1006.9) {
                                        return 0.7418;
                                    }
                                    else if (data.pesoKg <= 1006.9) {
                                        if (data.m > 4) {
                                            return 6.1475;
                                        }
                                        else if (data.m <= 4) {
                                            return 0.477;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.h <= 1) {
                        if (data.m > 9) {
                            return 9.75353;
                        }
                        else if (data.m <= 9) {
                            if (data.velMinMS == null) {
                                return 5.90828;
                            }
                            else if (data.velMinMS > 6.785) {
                                if (data.m > 7) {
                                    return 7.7724;
                                }
                                else if (data.m <= 7) {
                                    if (data.fechaYear > 2014) {
                                        return 6.65471;
                                    }
                                    else if (data.fechaYear <= 2014) {
                                        return 3.58667;
                                    }
                                }
                            }
                            else if (data.velMinMS <= 6.785) {
                                return 0.42286;
                            }
                        }
                    }
                }
                else if (data.m <= 2) {
                    if (data.fechaYear > 2014) {
                        if (data.m > 1) {
                            if (data.intervaloVel == null) {
                                return 6.3664;
                            }
                            else if (data.intervaloVel > 0.25) {
                                return 8.92074;
                            }
                            else if (data.intervaloVel <= 0.25) {
                                if (data.intervaloTiempo > 7.2) {
                                    if (data.tsDayOfMonth == null) {
                                        return 3.70242;
                                    }
                                    else if (data.tsDayOfMonth > 21) {
                                        return 6.105;
                                    }
                                    else if (data.tsDayOfMonth <= 21) {
                                        if (data.pesoKg == null) {
                                            return 2.65783;
                                        }
                                        else if (data.pesoKg > 1018.45) {
                                            return 4.39833;
                                        }
                                        else if (data.pesoKg <= 1018.45) {
                                            return 0.75909;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 7.2) {
                                    return 6.73784;
                                }
                            }
                        }
                        else if (data.m <= 1) {
                            if (data.tempSueloC == null) {
                                return 0.64085;
                            }
                            else if (data.tempSueloC > 69) {
                                return 0.48717;
                            }
                            else if (data.tempSueloC <= 69) {
                                return 7.71;
                            }
                        }
                    }
                    else if (data.fechaYear <= 2014) {
                        if (data.h > 1) {
                            if (data.fechaMonth == null) {
                                return 9.30315;
                            }
                            else if (data.fechaMonth > 1) {
                                if (data.tsDayOfMonth == null) {
                                    return 7.44197;
                                }
                                else if (data.tsDayOfMonth > 8) {
                                    return 1.77083;
                                }
                                else if (data.tsDayOfMonth <= 8) {
                                    if (data.carburanteL == null) {
                                        return 8.50531;
                                    }
                                    else if (data.carburanteL > 25.45) {
                                        if (data.m > 1) {
                                            return 2.98143;
                                        }
                                        else if (data.m <= 1) {
                                            return 6.86786;
                                        }
                                    }
                                    else if (data.carburanteL <= 25.45) {
                                        if (data.tempSueloC == null) {
                                            return 9.93767;
                                        }
                                        else if (data.tempSueloC > 96.35) {
                                            return 1.49;
                                        }
                                        else if (data.tempSueloC <= 96.35) {
                                            return 10.13881;
                                        }
                                    }
                                }
                            }
                            else if (data.fechaMonth <= 1) {
                                if (data.intervaloTiempo > 6.975) {
                                    return 13.47846;
                                }
                                else if (data.intervaloTiempo <= 6.975) {
                                    return 10.49726;
                                }
                            }
                        }
                        else if (data.h <= 1) {
                            if (data.m > 1) {
                                if (data.intervaloTiempo > 9.95) {
                                    if (data.presinNeumticosPa == null) {
                                        return 6.102;
                                    }
                                    else if (data.presinNeumticosPa > -0.6) {
                                        return 3.3825;
                                    }
                                    else if (data.presinNeumticosPa <= -0.6) {
                                        return 16.98;
                                    }
                                }
                                else if (data.intervaloTiempo <= 9.95) {
                                    return 15.492;
                                }
                            }
                            else if (data.m <= 1) {
                                if (data.h > 0) {
                                    return 13.51263;
                                }
                                else if (data.h <= 0) {
                                    return 16.557;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else if (data.fechaYear <= 2013) {
        if (data.h == null) {
            return 16.54269;
        }
        else if (data.h > 6) {
            if (data.h > 16) {
                if (data.h > 22) {
                    if (data.presinNeumticosPa == null) {
                        return 13.97304;
                    }
                    else if (data.presinNeumticosPa > 9.47444) {
                        if (data.m == null) {
                            return 12.6341;
                        }
                        else if (data.m > 6) {
                            if (data.fechaYear > 2011) {
                                if (data.intervaloTiempo == null) {
                                    return 11.90451;
                                }
                                else if (data.intervaloTiempo > 34.975) {
                                    return 2.83;
                                }
                                else if (data.intervaloTiempo <= 34.975) {
                                    if (data.m > 7) {
                                        return 11.59444;
                                    }
                                    else if (data.m <= 7) {
                                        return 12.93523;
                                    }
                                }
                            }
                            else if (data.fechaYear <= 2011) {
                                return 15.18182;
                            }
                        }
                        else if (data.m <= 6) {
                            return 14.30389;
                        }
                    }
                    else if (data.presinNeumticosPa <= 9.47444) {
                        if (data.intervaloTiempo == null) {
                            return 14.70542;
                        }
                        else if (data.intervaloTiempo > 40.3) {
                            return 27.83;
                        }
                        else if (data.intervaloTiempo <= 40.3) {
                            if (data.velMinMS == null) {
                                return 14.67372;
                            }
                            else if (data.velMinMS > 7.105) {
                                if (data.m == null) {
                                    return 12.62037;
                                }
                                else if (data.m > 2) {
                                    return 13.51591;
                                }
                                else if (data.m <= 2) {
                                    return 8.68;
                                }
                            }
                            else if (data.velMinMS <= 7.105) {
                                if (data.m == null) {
                                    return 14.81698;
                                }
                                else if (data.m > 3) {
                                    if (data.fechaYear > 2011) {
                                        if (data.m > 11) {
                                            if (data.tsDayOfMonth == null) {
                                                return 15.21419;
                                            }
                                            else if (data.tsDayOfMonth > 21) {
                                                return 16.75167;
                                            }
                                            else if (data.tsDayOfMonth <= 21) {
                                                return 14.1072;
                                            }
                                        }
                                        else if (data.m <= 11) {
                                            return 13.74342;
                                        }
                                    }
                                    else if (data.fechaYear <= 2011) {
                                        return 15.73088;
                                    }
                                }
                                else if (data.m <= 3) {
                                    if (data.intervaloTiempo > 1.83333) {
                                        return 15.38243;
                                    }
                                    else if (data.intervaloTiempo <= 1.83333) {
                                        return 21.76;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.h <= 22) {
                    if (data.presinNeumticosPa == null) {
                        return 16.45624;
                    }
                    else if (data.presinNeumticosPa > 14.52949) {
                        if (data.m == null) {
                            return 15.11892;
                        }
                        else if (data.m > 6) {
                            if (data.m > 8) {
                                if (data.fechaYear > 2011) {
                                    if (data.h > 21) {
                                        return 13.19813;
                                    }
                                    else if (data.h <= 21) {
                                        if (data.h > 19) {
                                            if (data.sem == null) {
                                                return 16.21833;
                                            }
                                            else if (data.sem > 5) {
                                                return 14.1335;
                                            }
                                            else if (data.sem <= 5) {
                                                return 16.814;
                                            }
                                        }
                                        else if (data.h <= 19) {
                                            return 14.8571;
                                        }
                                    }
                                }
                                else if (data.fechaYear <= 2011) {
                                    return 17.13679;
                                }
                            }
                            else if (data.m <= 8) {
                                if (data.tsDayOfMonth == null) {
                                    return 13.55195;
                                }
                                else if (data.tsDayOfMonth > 7) {
                                    if (data.intervaloTiempo == null) {
                                        return 13.03822;
                                    }
                                    else if (data.intervaloTiempo > 19.45) {
                                        if (data.fechaYear > 2012) {
                                            return 2.92857;
                                        }
                                        else if (data.fechaYear <= 2012) {
                                            return 15.66667;
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 19.45) {
                                        if (data.velMinMS == null) {
                                            return 13.18146;
                                        }
                                        else if (data.velMinMS > 6.935) {
                                            if (data.fechaMonth == null) {
                                                return 12.7;
                                            }
                                            else if (data.fechaMonth > 7) {
                                                if (data.h > 21) {
                                                    if (data.intervaloTiempo > 12.35) {
                                                        if (data.tsDayOfMonth > 19) {
                                                            return 2.72333;
                                                        }
                                                        else if (data.tsDayOfMonth <= 19) {
                                                            return 12.665;
                                                        }
                                                    }
                                                    else if (data.intervaloTiempo <= 12.35) {
                                                        return 11.78063;
                                                    }
                                                }
                                                else if (data.h <= 21) {
                                                    if (data.tempSueloC == null) {
                                                        return 12.41232;
                                                    }
                                                    else if (data.tempSueloC > 25.46667) {
                                                        return 12.71768;
                                                    }
                                                    else if (data.tempSueloC <= 25.46667) {
                                                        if (data.tsDayOfMonth > 19) {
                                                            if (data.velMinMS > 6.985) {
                                                                return 12.665;
                                                            }
                                                            else if (data.velMinMS <= 6.985) {
                                                                return 3.72;
                                                            }
                                                        }
                                                        else if (data.tsDayOfMonth <= 19) {
                                                            return 12.47875;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.fechaMonth <= 7) {
                                                return 13.21827;
                                            }
                                        }
                                        else if (data.velMinMS <= 6.935) {
                                            if (data.sem == null) {
                                                return 13.8487;
                                            }
                                            else if (data.sem > 5) {
                                                if (data.h > 18) {
                                                    return 12.396;
                                                }
                                                else if (data.h <= 18) {
                                                    return 14.1668;
                                                }
                                            }
                                            else if (data.sem <= 5) {
                                                return 14.27017;
                                            }
                                        }
                                    }
                                }
                                else if (data.tsDayOfMonth <= 7) {
                                    if (data.fechaMonth == null) {
                                        return 15.66817;
                                    }
                                    else if (data.fechaMonth > 7) {
                                        return 14.75429;
                                    }
                                    else if (data.fechaMonth <= 7) {
                                        return 16.24104;
                                    }
                                }
                            }
                        }
                        else if (data.m <= 6) {
                            if (data.h > 19) {
                                if (data.sem == null) {
                                    return 17.98978;
                                }
                                else if (data.sem > 5) {
                                    return 16.24743;
                                }
                                else if (data.sem <= 5) {
                                    if (data.h > 21) {
                                        return 16.749;
                                    }
                                    else if (data.h <= 21) {
                                        return 19.02349;
                                    }
                                }
                            }
                            else if (data.h <= 19) {
                                return 16.63368;
                            }
                        }
                    }
                    else if (data.presinNeumticosPa <= 14.52949) {
                        if (data.velMinMS == null) {
                            return 17.18112;
                        }
                        else if (data.velMinMS > 7.14962) {
                            if (data.intervaloTiempo == null) {
                                return 9.073;
                            }
                            else if (data.intervaloTiempo > 2.3) {
                                return 15.41667;
                            }
                            else if (data.intervaloTiempo <= 2.3) {
                                return 8.36815;
                            }
                        }
                        else if (data.velMinMS <= 7.14962) {
                            if (data.velMinMS > 6.84201) {
                                if (data.m == null) {
                                    return 17.10855;
                                }
                                else if (data.m > 3) {
                                    if (data.fechaYear > 2011) {
                                        if (data.m > 6) {
                                            if (data.m > 10) {
                                                if (data.intervaloTiempo == null) {
                                                    return 16.53626;
                                                }
                                                else if (data.intervaloTiempo > 9.33871) {
                                                    if (data.h > 20) {
                                                        if (data.sem == null) {
                                                            return 17.86608;
                                                        }
                                                        else if (data.sem > 5) {
                                                            return 16;
                                                        }
                                                        else if (data.sem <= 5) {
                                                            return 18.30344;
                                                        }
                                                    }
                                                    else if (data.h <= 20) {
                                                        return 16.63069;
                                                    }
                                                }
                                                else if (data.intervaloTiempo <= 9.33871) {
                                                    if (data.fechaMonth == null) {
                                                        return 16.20729;
                                                    }
                                                    else if (data.fechaMonth > 11) {
                                                        if (data.tsDayOfMonth == null) {
                                                            return 17.0622;
                                                        }
                                                        else if (data.tsDayOfMonth > 21) {
                                                            return 17.9973;
                                                        }
                                                        else if (data.tsDayOfMonth <= 21) {
                                                            return 16.42148;
                                                        }
                                                    }
                                                    else if (data.fechaMonth <= 11) {
                                                        return 15.88976;
                                                    }
                                                }
                                            }
                                            else if (data.m <= 10) {
                                                if (data.h > 21) {
                                                    return 13.74347;
                                                }
                                                else if (data.h <= 21) {
                                                    if (data.sem == null) {
                                                        return 15.57127;
                                                    }
                                                    else if (data.sem > 5) {
                                                        return 14.60814;
                                                    }
                                                    else if (data.sem <= 5) {
                                                        return 16.02637;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.m <= 6) {
                                            if (data.h > 21) {
                                                return 15.70153;
                                            }
                                            else if (data.h <= 21) {
                                                if (data.h > 19) {
                                                    if (data.sem == null) {
                                                        return 18.30892;
                                                    }
                                                    else if (data.sem > 5) {
                                                        return 16.92381;
                                                    }
                                                    else if (data.sem <= 5) {
                                                        return 18.90866;
                                                    }
                                                }
                                                else if (data.h <= 19) {
                                                    return 16.71442;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.fechaYear <= 2011) {
                                        if (data.h > 20) {
                                            return 18.62297;
                                        }
                                        else if (data.h <= 20) {
                                            if (data.h > 18) {
                                                return 16.65495;
                                            }
                                            else if (data.h <= 18) {
                                                return 17.97523;
                                            }
                                        }
                                    }
                                }
                                else if (data.m <= 3) {
                                    if (data.velMedMS == null) {
                                        return 17.86423;
                                    }
                                    else if (data.velMedMS > 7.135) {
                                        return 9;
                                    }
                                    else if (data.velMedMS <= 7.135) {
                                        if (data.intervaloVel == null) {
                                            return 17.90894;
                                        }
                                        else if (data.intervaloVel > 0.05) {
                                            if (data.h > 20) {
                                                if (data.sem == null) {
                                                    return 18.52172;
                                                }
                                                else if (data.sem > 5) {
                                                    return 17.34833;
                                                }
                                                else if (data.sem <= 5) {
                                                    return 19.01913;
                                                }
                                            }
                                            else if (data.h <= 20) {
                                                if (data.h > 18) {
                                                    return 16.95633;
                                                }
                                                else if (data.h <= 18) {
                                                    return 18.05425;
                                                }
                                            }
                                        }
                                        else if (data.intervaloVel <= 0.05) {
                                            return 22.06538;
                                        }
                                    }
                                }
                            }
                            else if (data.velMinMS <= 6.84201) {
                                if (data.tsDayOfMonth == null) {
                                    return 18.40397;
                                }
                                else if (data.tsDayOfMonth > 30) {
                                    if (data.m == null) {
                                        return 21.92294;
                                    }
                                    else if (data.m > 11) {
                                        return 23.73917;
                                    }
                                    else if (data.m <= 11) {
                                        return 17.564;
                                    }
                                }
                                else if (data.tsDayOfMonth <= 30) {
                                    if (data.pesoKg == null) {
                                        return 18.21161;
                                    }
                                    else if (data.pesoKg > 999.54) {
                                        if (data.tsDayOfMonth > 19) {
                                            if (data.pesoKg > 1035.48333) {
                                                return 22.4175;
                                            }
                                            else if (data.pesoKg <= 1035.48333) {
                                                return 18.59231;
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 19) {
                                            if (data.tsDayOfMonth > 11) {
                                                return 17.2063;
                                            }
                                            else if (data.tsDayOfMonth <= 11) {
                                                return 18.38157;
                                            }
                                        }
                                    }
                                    else if (data.pesoKg <= 999.54) {
                                        return 20.958;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (data.h <= 16) {
                if (data.velMinMS == null) {
                    return 21.41348;
                }
                else if (data.velMinMS > 7.0673) {
                    if (data.intervaloVel == null) {
                        return 14.03699;
                    }
                    else if (data.intervaloVel > 0.35) {
                        if (data.sem == null) {
                            return 16.88849;
                        }
                        else if (data.sem > 1) {
                            if (data.sem > 4) {
                                if (data.carburanteL == null) {
                                    return 14.99257;
                                }
                                else if (data.carburanteL > 9.5) {
                                    if (data.retrasoDeArranqueS == null) {
                                        return 13.31381;
                                    }
                                    else if (data.retrasoDeArranqueS > 3.3) {
                                        return 19.03;
                                    }
                                    else if (data.retrasoDeArranqueS <= 3.3) {
                                        if (data.pesoKg == null) {
                                            return 12.36111;
                                        }
                                        else if (data.pesoKg > 1017.5) {
                                            return 14.85375;
                                        }
                                        else if (data.pesoKg <= 1017.5) {
                                            return 10.367;
                                        }
                                    }
                                }
                                else if (data.carburanteL <= 9.5) {
                                    if (data.intervaloVel > 0.45) {
                                        return 19.44222;
                                    }
                                    else if (data.intervaloVel <= 0.45) {
                                        return 14.034;
                                    }
                                }
                            }
                            else if (data.sem <= 4) {
                                if (data.velMinMS > 7.155) {
                                    if (data.tempSueloC == null) {
                                        return 15.99231;
                                    }
                                    else if (data.tempSueloC > 81.5) {
                                        if (data.intervaloTiempo == null) {
                                            return 16.6025;
                                        }
                                        else if (data.intervaloTiempo > 18.2) {
                                            return 15.549;
                                        }
                                        else if (data.intervaloTiempo <= 18.2) {
                                            return 21.87;
                                        }
                                    }
                                    else if (data.tempSueloC <= 81.5) {
                                        return 8.67;
                                    }
                                }
                                else if (data.velMinMS <= 7.155) {
                                    return 20.46177;
                                }
                            }
                        }
                        else if (data.sem <= 1) {
                            if (data.tempSueloC == null) {
                                return 14.57339;
                            }
                            else if (data.tempSueloC > 94.6375) {
                                if (data.presinNeumticosPa == null) {
                                    return 11.51056;
                                }
                                else if (data.presinNeumticosPa > 2) {
                                    if (data.m == null) {
                                        return 13.10818;
                                    }
                                    else if (data.m > 7) {
                                        return 11.11333;
                                    }
                                    else if (data.m <= 7) {
                                        return 15.502;
                                    }
                                }
                                else if (data.presinNeumticosPa <= 2) {
                                    return 9;
                                }
                            }
                            else if (data.tempSueloC <= 94.6375) {
                                if (data.m == null) {
                                    return 15.82636;
                                }
                                else if (data.m > 9) {
                                    return 12.451;
                                }
                                else if (data.m <= 9) {
                                    if (data.retrasoDeArranqueS == null) {
                                        return 16.81912;
                                    }
                                    else if (data.retrasoDeArranqueS > 0.5) {
                                        return 24.33;
                                    }
                                    else if (data.retrasoDeArranqueS <= 0.5) {
                                        return 16.59152;
                                    }
                                }
                            }
                        }
                    }
                    else if (data.intervaloVel <= 0.35) {
                        if (data.velMinMS > 7.135) {
                            if (data.intervaloTiempo == null) {
                                return 9.33723;
                            }
                            else if (data.intervaloTiempo > 21) {
                                return 12.97333;
                            }
                            else if (data.intervaloTiempo <= 21) {
                                if (data.velMinMS > 7.245) {
                                    return 16.56;
                                }
                                else if (data.velMinMS <= 7.245) {
                                    return 8.57791;
                                }
                            }
                        }
                        else if (data.velMinMS <= 7.135) {
                            if (data.h > 7) {
                                if (data.sem == null) {
                                    return 16.68804;
                                }
                                else if (data.sem > 1) {
                                    if (data.presinNeumticosPa == null) {
                                        return 19.82824;
                                    }
                                    else if (data.presinNeumticosPa > 6.95) {
                                        return 17.33167;
                                    }
                                    else if (data.presinNeumticosPa <= 6.95) {
                                        return 21.19;
                                    }
                                }
                                else if (data.sem <= 1) {
                                    if (data.tsDayOfMonth == null) {
                                        return 15.11794;
                                    }
                                    else if (data.tsDayOfMonth > 7) {
                                        if (data.tsDayOfMonth > 26) {
                                            return 17.75;
                                        }
                                        else if (data.tsDayOfMonth <= 26) {
                                            return 13.76545;
                                        }
                                    }
                                    else if (data.tsDayOfMonth <= 7) {
                                        if (data.h > 10) {
                                            return 19.05667;
                                        }
                                        else if (data.h <= 10) {
                                            return 12.915;
                                        }
                                    }
                                }
                            }
                            else if (data.h <= 7) {
                                if (data.intervaloTiempo == null) {
                                    return 9.72314;
                                }
                                else if (data.intervaloTiempo > 23.35) {
                                    return 11.81333;
                                }
                                else if (data.intervaloTiempo <= 23.35) {
                                    return 8.99962;
                                }
                            }
                        }
                    }
                }
                else if (data.velMinMS <= 7.0673) {
                    if (data.presinNeumticosPa == null) {
                        return 21.84115;
                    }
                    else if (data.presinNeumticosPa > 15.4646) {
                        if (data.presinNeumticosPa > 24.1699) {
                            if (data.velMaxMS == null) {
                                return 16.81435;
                            }
                            else if (data.velMaxMS > 6.89545) {
                                if (data.intervaloTiempo == null) {
                                    return 15.20756;
                                }
                                else if (data.intervaloTiempo > 18.775) {
                                    return 3.94444;
                                }
                                else if (data.intervaloTiempo <= 18.775) {
                                    if (data.velMaxMS > 6.995) {
                                        if (data.velMedMS == null) {
                                            return 14.06352;
                                        }
                                        else if (data.velMedMS > 6.955) {
                                            if (data.fechaYear > 2012) {
                                                if (data.intervaloTiempo > 16.35) {
                                                    return 5;
                                                }
                                                else if (data.intervaloTiempo <= 16.35) {
                                                    return 13.34419;
                                                }
                                            }
                                            else if (data.fechaYear <= 2012) {
                                                return 15.4327;
                                            }
                                        }
                                        else if (data.velMedMS <= 6.955) {
                                            return 4.415;
                                        }
                                    }
                                    else if (data.velMaxMS <= 6.995) {
                                        if (data.tsDayOfMonth == null) {
                                            return 16.28165;
                                        }
                                        else if (data.tsDayOfMonth > 7) {
                                            if (data.presinNeumticosPa > 31.85) {
                                                if (data.fechaYear > 2012) {
                                                    if (data.fechaDayOfWeek == null) {
                                                        return 7.89;
                                                    }
                                                    else if (data.fechaDayOfWeek > 2) {
                                                        return 4.335;
                                                    }
                                                    else if (data.fechaDayOfWeek <= 2) {
                                                        return 15;
                                                    }
                                                }
                                                else if (data.fechaYear <= 2012) {
                                                    return 15.185;
                                                }
                                            }
                                            else if (data.presinNeumticosPa <= 31.85) {
                                                if (data.sem == null) {
                                                    return 16.25888;
                                                }
                                                else if (data.sem > 5) {
                                                    return 15.19378;
                                                }
                                                else if (data.sem <= 5) {
                                                    return 16.63066;
                                                }
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 7) {
                                            if (data.tempSueloC == null) {
                                                return 19.09571;
                                            }
                                            else if (data.tempSueloC > 33.65) {
                                                if (data.tempSueloC > 37.8) {
                                                    return 19.25;
                                                }
                                                else if (data.tempSueloC <= 37.8) {
                                                    return 24.44333;
                                                }
                                            }
                                            else if (data.tempSueloC <= 33.65) {
                                                return 15.702;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.velMaxMS <= 6.89545) {
                                if (data.velMinMS > 6.805) {
                                    if (data.intervaloTiempo == null) {
                                        return 17.00643;
                                    }
                                    else if (data.intervaloTiempo > 23.7) {
                                        return 5;
                                    }
                                    else if (data.intervaloTiempo <= 23.7) {
                                        return 17.22473;
                                    }
                                }
                                else if (data.velMinMS <= 6.805) {
                                    if (data.m == null) {
                                        return 19.51048;
                                    }
                                    else if (data.m > 6) {
                                        if (data.m > 9) {
                                            return 24.44333;
                                        }
                                        else if (data.m <= 9) {
                                            if (data.sem == null) {
                                                return 18.86045;
                                            }
                                            else if (data.sem > 3) {
                                                if (data.intervaloTiempo == null) {
                                                    return 18.45218;
                                                }
                                                else if (data.intervaloTiempo > 13.16667) {
                                                    return 21.125;
                                                }
                                                else if (data.intervaloTiempo <= 13.16667) {
                                                    if (data.velMinMS > 6.625) {
                                                        if (data.tsDayOfMonth == null) {
                                                            return 17.96405;
                                                        }
                                                        else if (data.tsDayOfMonth > 7) {
                                                            return 17.45638;
                                                        }
                                                        else if (data.tsDayOfMonth <= 7) {
                                                            return 19.80437;
                                                        }
                                                    }
                                                    else if (data.velMinMS <= 6.625) {
                                                        return 21.4;
                                                    }
                                                }
                                            }
                                            else if (data.sem <= 3) {
                                                if (data.pesoKg == null) {
                                                    return 20.2812;
                                                }
                                                else if (data.pesoKg > 1015.65) {
                                                    return 19.04533;
                                                }
                                                else if (data.pesoKg <= 1015.65) {
                                                    return 22.135;
                                                }
                                            }
                                        }
                                    }
                                    else if (data.m <= 6) {
                                        return 21.444;
                                    }
                                }
                            }
                        }
                        else if (data.presinNeumticosPa <= 24.1699) {
                            if (data.velMedMS == null) {
                                return 19.80207;
                            }
                            else if (data.velMedMS > 6.89805) {
                                if (data.m == null) {
                                    return 18.43956;
                                }
                                else if (data.m > 6) {
                                    if (data.h > 11) {
                                        if (data.fechaYear > 2011) {
                                            if (data.tsDayOfMonth == null) {
                                                return 16.30505;
                                            }
                                            else if (data.tsDayOfMonth > 7) {
                                                if (data.velMaxMS == null) {
                                                    return 15.97355;
                                                }
                                                else if (data.velMaxMS > 7.015) {
                                                    if (data.carburanteL == null) {
                                                        return 14.5183;
                                                    }
                                                    else if (data.carburanteL > 2.7) {
                                                        if (data.presinNeumticosPa > 21.45) {
                                                            if (data.fechaDayOfWeek == null) {
                                                                return 12.74533;
                                                            }
                                                            else if (data.fechaDayOfWeek > 2) {
                                                                return 13.35786;
                                                            }
                                                            else if (data.fechaDayOfWeek <= 2) {
                                                                return 4.17;
                                                            }
                                                        }
                                                        else if (data.presinNeumticosPa <= 21.45) {
                                                            return 14.92267;
                                                        }
                                                    }
                                                    else if (data.carburanteL <= 2.7) {
                                                        return 21.75;
                                                    }
                                                }
                                                else if (data.velMaxMS <= 7.015) {
                                                    if (data.intervaloTiempo == null) {
                                                        return 16.45521;
                                                    }
                                                    else if (data.intervaloTiempo > 9.31071) {
                                                        if (data.sem == null) {
                                                            return 17.85765;
                                                        }
                                                        else if (data.sem > 6) {
                                                            return 16.04455;
                                                        }
                                                        else if (data.sem <= 6) {
                                                            return 18.72478;
                                                        }
                                                    }
                                                    else if (data.intervaloTiempo <= 9.31071) {
                                                        if (data.m > 8) {
                                                            return 16.64912;
                                                        }
                                                        else if (data.m <= 8) {
                                                            return 14.9335;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.tsDayOfMonth <= 7) {
                                                return 19.02913;
                                            }
                                        }
                                        else if (data.fechaYear <= 2011) {
                                            return 19.78912;
                                        }
                                    }
                                    else if (data.h <= 11) {
                                        if (data.tsDayOfMonth == null) {
                                            return 19.81147;
                                        }
                                        else if (data.tsDayOfMonth > 7) {
                                            if (data.h > 7) {
                                                return 19.87362;
                                            }
                                            else if (data.h <= 7) {
                                                return 15.97333;
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 7) {
                                            return 24.6675;
                                        }
                                    }
                                }
                                else if (data.m <= 6) {
                                    if (data.h > 15) {
                                        if (data.m > 3) {
                                            return 17.52486;
                                        }
                                        else if (data.m <= 3) {
                                            return 20.41;
                                        }
                                    }
                                    else if (data.h <= 15) {
                                        if (data.intervaloTiempo == null) {
                                            return 20.74343;
                                        }
                                        else if (data.intervaloTiempo > 9.20625) {
                                            return 21.7472;
                                        }
                                        else if (data.intervaloTiempo <= 9.20625) {
                                            if (data.h > 11) {
                                                if (data.m > 4) {
                                                    return 19.25538;
                                                }
                                                else if (data.m <= 4) {
                                                    return 20.9637;
                                                }
                                            }
                                            else if (data.h <= 11) {
                                                return 22.26071;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.velMedMS <= 6.89805) {
                                if (data.h > 10) {
                                    if (data.m == null) {
                                        return 20.14453;
                                    }
                                    else if (data.m > 6) {
                                        if (data.fechaYear > 2011) {
                                            if (data.velMinMS > 6.775) {
                                                if (data.intervaloTiempo == null) {
                                                    return 18.37341;
                                                }
                                                else if (data.intervaloTiempo > 5.50714) {
                                                    if (data.intervaloTiempo > 15.91667) {
                                                        return 24;
                                                    }
                                                    else if (data.intervaloTiempo <= 15.91667) {
                                                        if (data.sem == null) {
                                                            return 18.68641;
                                                        }
                                                        else if (data.sem > 4) {
                                                            return 18.04646;
                                                        }
                                                        else if (data.sem <= 4) {
                                                            return 19.31838;
                                                        }
                                                    }
                                                }
                                                else if (data.intervaloTiempo <= 5.50714) {
                                                    return 16.76733;
                                                }
                                            }
                                            else if (data.velMinMS <= 6.775) {
                                                if (data.h > 13) {
                                                    if (data.intervaloVel == null) {
                                                        return 20.98986;
                                                    }
                                                    else if (data.intervaloVel > 0.15) {
                                                        return 20.89616;
                                                    }
                                                    else if (data.intervaloVel <= 0.15) {
                                                        return 27.83;
                                                    }
                                                }
                                                else if (data.h <= 13) {
                                                    if (data.intervaloTiempo == null) {
                                                        return 19.29084;
                                                    }
                                                    else if (data.intervaloTiempo > 11.18333) {
                                                        return 20.53931;
                                                    }
                                                    else if (data.intervaloTiempo <= 11.18333) {
                                                        return 18.42881;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.fechaYear <= 2011) {
                                            if (data.tempSueloC == null) {
                                                return 22.87116;
                                            }
                                            else if (data.tempSueloC > 24.7) {
                                                if (data.tempSueloC > 39.65) {
                                                    return 24.08214;
                                                }
                                                else if (data.tempSueloC <= 39.65) {
                                                    if (data.h > 14) {
                                                        return 23.22111;
                                                    }
                                                    else if (data.h <= 14) {
                                                        return 20.385;
                                                    }
                                                }
                                            }
                                            else if (data.tempSueloC <= 24.7) {
                                                return 27.79;
                                            }
                                        }
                                    }
                                    else if (data.m <= 6) {
                                        if (data.h > 15) {
                                            if (data.intervaloTiempo == null) {
                                                return 18.9872;
                                            }
                                            else if (data.intervaloTiempo > 8.65) {
                                                return 22.4575;
                                            }
                                            else if (data.intervaloTiempo <= 8.65) {
                                                return 18.32619;
                                            }
                                        }
                                        else if (data.h <= 15) {
                                            if (data.h > 13) {
                                                if (data.sem == null) {
                                                    return 22.92907;
                                                }
                                                else if (data.sem > 5) {
                                                    return 21.4072;
                                                }
                                                else if (data.sem <= 5) {
                                                    return 23.69;
                                                }
                                            }
                                            else if (data.h <= 13) {
                                                if (data.intervaloTiempo == null) {
                                                    return 21.09384;
                                                }
                                                else if (data.intervaloTiempo > 5.7375) {
                                                    if (data.tempSueloC == null) {
                                                        return 21.99708;
                                                    }
                                                    else if (data.tempSueloC > 65.5) {
                                                        return 24.45286;
                                                    }
                                                    else if (data.tempSueloC <= 65.5) {
                                                        if (data.tsDayOfMonth == null) {
                                                            return 21.5778;
                                                        }
                                                        else if (data.tsDayOfMonth > 28) {
                                                            return 24.666;
                                                        }
                                                        else if (data.tsDayOfMonth <= 28) {
                                                            return 21.14889;
                                                        }
                                                    }
                                                }
                                                else if (data.intervaloTiempo <= 5.7375) {
                                                    return 19.3596;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.h <= 10) {
                                    if (data.intervaloTiempo == null) {
                                        return 22.24229;
                                    }
                                    else if (data.intervaloTiempo > 22.75) {
                                        return 5.55667;
                                    }
                                    else if (data.intervaloTiempo <= 22.75) {
                                        if (data.m == null) {
                                            return 22.4951;
                                        }
                                        else if (data.m > 6) {
                                            if (data.tsDayOfMonth == null) {
                                                return 22.02082;
                                            }
                                            else if (data.tsDayOfMonth > 7) {
                                                return 21.64811;
                                            }
                                            else if (data.tsDayOfMonth <= 7) {
                                                return 23.99481;
                                            }
                                        }
                                        else if (data.m <= 6) {
                                            return 25.37464;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.presinNeumticosPa <= 15.4646) {
                        if (data.h > 11) {
                            if (data.m == null) {
                                return 21.60038;
                            }
                            else if (data.m > 3) {
                                if (data.velMinMS > 6.83541) {
                                    if (data.fechaYear > 2011) {
                                        if (data.intervaloTiempo == null) {
                                            return 19.63615;
                                        }
                                        else if (data.intervaloTiempo > 9.60708) {
                                            if (data.m > 5) {
                                                return 20.52764;
                                            }
                                            else if (data.m <= 5) {
                                                if (data.h > 15) {
                                                    return 17;
                                                }
                                                else if (data.h <= 15) {
                                                    return 22.26561;
                                                }
                                            }
                                        }
                                        else if (data.intervaloTiempo <= 9.60708) {
                                            if (data.presinNeumticosPa > 13.23667) {
                                                if (data.m > 8) {
                                                    return 16.89591;
                                                }
                                                else if (data.m <= 8) {
                                                    return 19.15194;
                                                }
                                            }
                                            else if (data.presinNeumticosPa <= 13.23667) {
                                                if (data.h > 15) {
                                                    return 18.01659;
                                                }
                                                else if (data.h <= 15) {
                                                    if (data.h > 13) {
                                                        if (data.m > 5) {
                                                            return 19.81609;
                                                        }
                                                        else if (data.m <= 5) {
                                                            if (data.velMaxMS == null) {
                                                                return 21.69068;
                                                            }
                                                            else if (data.velMaxMS > 7.035) {
                                                                return 19.283;
                                                            }
                                                            else if (data.velMaxMS <= 7.035) {
                                                                return 22.39882;
                                                            }
                                                        }
                                                    }
                                                    else if (data.h <= 13) {
                                                        if (data.intervaloTiempo > 6.12708) {
                                                            return 19.78861;
                                                        }
                                                        else if (data.intervaloTiempo <= 6.12708) {
                                                            return 18.54417;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.fechaYear <= 2011) {
                                        if (data.intervaloTiempo == null) {
                                            return 21.86759;
                                        }
                                        else if (data.intervaloTiempo > 4.66111) {
                                            if (data.velMinMS > 6.905) {
                                                return 21.63352;
                                            }
                                            else if (data.velMinMS <= 6.905) {
                                                if (data.h > 14) {
                                                    return 24.1996;
                                                }
                                                else if (data.h <= 14) {
                                                    return 22.38775;
                                                }
                                            }
                                        }
                                        else if (data.intervaloTiempo <= 4.66111) {
                                            if (data.h > 13) {
                                                return 22.18182;
                                            }
                                            else if (data.h <= 13) {
                                                return 19.00043;
                                            }
                                        }
                                    }
                                }
                                else if (data.velMinMS <= 6.83541) {
                                    if (data.fechaYear > 2011) {
                                        if (data.velMinMS > 6.725) {
                                            if (data.sem == null) {
                                                return 21.12301;
                                            }
                                            else if (data.sem > 5) {
                                                if (data.velMinMS > 6.775) {
                                                    return 19.61933;
                                                }
                                                else if (data.velMinMS <= 6.775) {
                                                    return 21.02098;
                                                }
                                            }
                                            else if (data.sem <= 5) {
                                                if (data.fechaYear > 2012) {
                                                    if (data.fechaMonth == null) {
                                                        return 20.96967;
                                                    }
                                                    else if (data.fechaMonth > 5) {
                                                        return 20.54235;
                                                    }
                                                    else if (data.fechaMonth <= 5) {
                                                        return 22.18042;
                                                    }
                                                }
                                                else if (data.fechaYear <= 2012) {
                                                    if (data.m > 11) {
                                                        if (data.fechaDayOfWeek == null) {
                                                            return 23.48282;
                                                        }
                                                        else if (data.fechaDayOfWeek > 1) {
                                                            return 22.60143;
                                                        }
                                                        else if (data.fechaDayOfWeek <= 1) {
                                                            return 25.72636;
                                                        }
                                                    }
                                                    else if (data.m <= 11) {
                                                        return 21.46593;
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.velMinMS <= 6.725) {
                                            if (data.h > 12) {
                                                return 22.55825;
                                            }
                                            else if (data.h <= 12) {
                                                if (data.fechaMonth == null) {
                                                    return 25.74844;
                                                }
                                                else if (data.fechaMonth > 11) {
                                                    if (data.intervaloTiempo == null) {
                                                        return 27.59529;
                                                    }
                                                    else if (data.intervaloTiempo > 6.75) {
                                                        return 26.64462;
                                                    }
                                                    else if (data.intervaloTiempo <= 6.75) {
                                                        return 30.685;
                                                    }
                                                }
                                                else if (data.fechaMonth <= 11) {
                                                    if (data.presinNeumticosPa > 11.85) {
                                                        return 19.88667;
                                                    }
                                                    else if (data.presinNeumticosPa <= 11.85) {
                                                        return 24.5975;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.fechaYear <= 2011) {
                                        if (data.sem == null) {
                                            return 23.95615;
                                        }
                                        else if (data.sem > 2) {
                                            if (data.fechaMonth == null) {
                                                return 23.5302;
                                            }
                                            else if (data.fechaMonth > 11) {
                                                if (data.h > 12) {
                                                    return 24.33364;
                                                }
                                                else if (data.h <= 12) {
                                                    return 27.732;
                                                }
                                            }
                                            else if (data.fechaMonth <= 11) {
                                                if (data.pesoKg == null) {
                                                    return 23.00743;
                                                }
                                                else if (data.pesoKg > 1014.7875) {
                                                    if (data.h > 14) {
                                                        return 23.45067;
                                                    }
                                                    else if (data.h <= 14) {
                                                        return 21.584;
                                                    }
                                                }
                                                else if (data.pesoKg <= 1014.7875) {
                                                    return 25.10786;
                                                }
                                            }
                                        }
                                        else if (data.sem <= 2) {
                                            if (data.pesoKg == null) {
                                                return 29.33375;
                                            }
                                            else if (data.pesoKg > 1030.5) {
                                                return 33.05667;
                                            }
                                            else if (data.pesoKg <= 1030.5) {
                                                return 27.1;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 3) {
                                if (data.velMinMS > 6.925) {
                                    if (data.intervaloTiempo == null) {
                                        return 21.61968;
                                    }
                                    else if (data.intervaloTiempo > 9.28977) {
                                        return 22.63369;
                                    }
                                    else if (data.intervaloTiempo <= 9.28977) {
                                        if (data.h > 12) {
                                            if (data.h > 13) {
                                                if (data.fechaDayOfWeek == null) {
                                                    return 21.63706;
                                                }
                                                else if (data.fechaDayOfWeek > 3) {
                                                    return 20.84045;
                                                }
                                                else if (data.fechaDayOfWeek <= 3) {
                                                    return 22.49195;
                                                }
                                            }
                                            else if (data.h <= 13) {
                                                return 19.85534;
                                            }
                                        }
                                        else if (data.h <= 12) {
                                            if (data.sem == null) {
                                                return 22.10638;
                                            }
                                            else if (data.sem > 2) {
                                                return 21.42455;
                                            }
                                            else if (data.sem <= 2) {
                                                return 23.71357;
                                            }
                                        }
                                    }
                                }
                                else if (data.velMinMS <= 6.925) {
                                    if (data.h > 12) {
                                        if (data.h > 14) {
                                            if (data.sem == null) {
                                                return 23.69608;
                                            }
                                            else if (data.sem > 6) {
                                                return 22.39389;
                                            }
                                            else if (data.sem <= 6) {
                                                if (data.h > 15) {
                                                    return 23.28258;
                                                }
                                                else if (data.h <= 15) {
                                                    return 24.68945;
                                                }
                                            }
                                        }
                                        else if (data.h <= 14) {
                                            if (data.sem == null) {
                                                return 21.90216;
                                            }
                                            else if (data.sem > 1) {
                                                if (data.velMinMS > 6.805) {
                                                    return 21.44378;
                                                }
                                                else if (data.velMinMS <= 6.805) {
                                                    return 23.783;
                                                }
                                            }
                                            else if (data.sem <= 1) {
                                                return 25.16625;
                                            }
                                        }
                                    }
                                    else if (data.h <= 12) {
                                        if (data.sem == null) {
                                            return 25.70082;
                                        }
                                        else if (data.sem > 3) {
                                            if (data.velMinMS > 6.875) {
                                                return 22.49692;
                                            }
                                            else if (data.velMinMS <= 6.875) {
                                                if (data.presinNeumticosPa > 10.8) {
                                                    return 22.415;
                                                }
                                                else if (data.presinNeumticosPa <= 10.8) {
                                                    return 26.38792;
                                                }
                                            }
                                        }
                                        else if (data.sem <= 3) {
                                            return 27.616;
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.h <= 11) {
                            if (data.intervaloTiempo == null) {
                                return 23.90843;
                            }
                            else if (data.intervaloTiempo > 17.64913) {
                                if (data.h > 8) {
                                    if (data.velMaxMS == null) {
                                        return 24.50164;
                                    }
                                    else if (data.velMaxMS > 6.84) {
                                        if (data.sem == null) {
                                            return 23.97694;
                                        }
                                        else if (data.sem > 6) {
                                            return 26.19588;
                                        }
                                        else if (data.sem <= 6) {
                                            if (data.pesoKg == null) {
                                                return 23.13867;
                                            }
                                            else if (data.pesoKg > 1035.8) {
                                                return 30;
                                            }
                                            else if (data.pesoKg <= 1035.8) {
                                                return 22.98273;
                                            }
                                        }
                                    }
                                    else if (data.velMaxMS <= 6.84) {
                                        return 31.008;
                                    }
                                }
                                else if (data.h <= 8) {
                                    if (data.intervaloVel == null) {
                                        return 19.04811;
                                    }
                                    else if (data.intervaloVel > 0.55) {
                                        if (data.m == null) {
                                            return 19.71306;
                                        }
                                        else if (data.m > 7) {
                                            if (data.fechaYear > 2011) {
                                                if (data.velMinMS > 7.025) {
                                                    return 13.918;
                                                }
                                                else if (data.velMinMS <= 7.025) {
                                                    if (data.velMaxMS == null) {
                                                        return 18.4916;
                                                    }
                                                    else if (data.velMaxMS > 6.74) {
                                                        if (data.intervaloVel > 1.35) {
                                                            return 19.69429;
                                                        }
                                                        else if (data.intervaloVel <= 1.35) {
                                                            if (data.intervaloTiempo > 21.65) {
                                                                if (data.velMinMS > 6.725) {
                                                                    if (data.intervaloTiempo > 28.725) {
                                                                        return 18.22455;
                                                                    }
                                                                    else if (data.intervaloTiempo <= 28.725) {
                                                                        if (data.pesoKg == null) {
                                                                            return 16.22966;
                                                                        }
                                                                        else if (data.pesoKg > 1026.05) {
                                                                            return 18.845;
                                                                        }
                                                                        else if (data.pesoKg <= 1026.05) {
                                                                            return 15.54739;
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.velMinMS <= 6.725) {
                                                                    return 7;
                                                                }
                                                            }
                                                            else if (data.intervaloTiempo <= 21.65) {
                                                                return 20.3525;
                                                            }
                                                        }
                                                    }
                                                    else if (data.velMaxMS <= 6.74) {
                                                        return 4.33;
                                                    }
                                                }
                                            }
                                            else if (data.fechaYear <= 2011) {
                                                if (data.h > 7) {
                                                    return 19.166;
                                                }
                                                else if (data.h <= 7) {
                                                    return 22.05111;
                                                }
                                            }
                                        }
                                        else if (data.m <= 7) {
                                            if (data.velMedMS == null) {
                                                return 20.99398;
                                            }
                                            else if (data.velMedMS > 6.8) {
                                                if (data.intervaloTiempo > 18.8125) {
                                                    return 20.46817;
                                                }
                                                else if (data.intervaloTiempo <= 18.8125) {
                                                    if (data.tsDayOfMonth == null) {
                                                        return 24.6675;
                                                    }
                                                    else if (data.tsDayOfMonth > 9) {
                                                        return 26.94667;
                                                    }
                                                    else if (data.tsDayOfMonth <= 9) {
                                                        return 17.83;
                                                    }
                                                }
                                            }
                                            else if (data.velMedMS <= 6.8) {
                                                return 26.695;
                                            }
                                        }
                                    }
                                    else if (data.intervaloVel <= 0.55) {
                                        if (data.carburanteL == null) {
                                            return 16.14277;
                                        }
                                        else if (data.carburanteL > 6.75) {
                                            if (data.fechaMonth == null) {
                                                return 15.19286;
                                            }
                                            else if (data.fechaMonth > 10) {
                                                if (data.h > 7) {
                                                    return 15.02875;
                                                }
                                                else if (data.h <= 7) {
                                                    return 11.32455;
                                                }
                                            }
                                            else if (data.fechaMonth <= 10) {
                                                if (data.intervaloVel > 0.25) {
                                                    return 17.35808;
                                                }
                                                else if (data.intervaloVel <= 0.25) {
                                                    return 12.085;
                                                }
                                            }
                                        }
                                        else if (data.carburanteL <= 6.75) {
                                            if (data.h > 7) {
                                                if (data.velMedMS == null) {
                                                    return 21.76143;
                                                }
                                                else if (data.velMedMS > 7.065) {
                                                    return 15.415;
                                                }
                                                else if (data.velMedMS <= 7.065) {
                                                    return 24.3;
                                                }
                                            }
                                            else if (data.h <= 7) {
                                                return 16.94444;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.intervaloTiempo <= 17.64913) {
                                if (data.presinNeumticosPa > 9.19803) {
                                    if (data.intervaloTiempo > 1.41875) {
                                        if (data.fechaYear > 2011) {
                                            if (data.m == null) {
                                                return 23.1501;
                                            }
                                            else if (data.m > 6) {
                                                if (data.velMaxMS == null) {
                                                    return 22.31086;
                                                }
                                                else if (data.velMaxMS > 6.95402) {
                                                    if (data.fechaYear > 2012) {
                                                        return 18.49952;
                                                    }
                                                    else if (data.fechaYear <= 2012) {
                                                        return 20.90622;
                                                    }
                                                }
                                                else if (data.velMaxMS <= 6.95402) {
                                                    if (data.tsDayOfMonth == null) {
                                                        return 22.64591;
                                                    }
                                                    else if (data.tsDayOfMonth > 7) {
                                                        if (data.m > 8) {
                                                            if (data.h > 10) {
                                                                if (data.velMedMS == null) {
                                                                    return 21.56481;
                                                                }
                                                                else if (data.velMedMS > 6.68) {
                                                                    return 21.2334;
                                                                }
                                                                else if (data.velMedMS <= 6.68) {
                                                                    return 25.7075;
                                                                }
                                                            }
                                                            else if (data.h <= 10) {
                                                                return 23.19507;
                                                            }
                                                        }
                                                        else if (data.m <= 8) {
                                                            if (data.tempSueloC == null) {
                                                                return 21.1396;
                                                            }
                                                            else if (data.tempSueloC > 46.1) {
                                                                if (data.h > 7) {
                                                                    if (data.fechaMonth == null) {
                                                                        return 21.73235;
                                                                    }
                                                                    else if (data.fechaMonth > 7) {
                                                                        if (data.carburanteL == null) {
                                                                            return 20.74614;
                                                                        }
                                                                        else if (data.carburanteL > 5.15) {
                                                                            return 21.07475;
                                                                        }
                                                                        else if (data.carburanteL <= 5.15) {
                                                                            if (data.velMinMS > 6.66) {
                                                                                return 20.78;
                                                                            }
                                                                            else if (data.velMinMS <= 6.66) {
                                                                                return 7.5;
                                                                            }
                                                                        }
                                                                    }
                                                                    else if (data.fechaMonth <= 7) {
                                                                        if (data.intervaloTiempo > 8.35) {
                                                                            return 24.0575;
                                                                        }
                                                                        else if (data.intervaloTiempo <= 8.35) {
                                                                            return 21.54941;
                                                                        }
                                                                    }
                                                                }
                                                                else if (data.h <= 7) {
                                                                    return 19.22529;
                                                                }
                                                            }
                                                            else if (data.tempSueloC <= 46.1) {
                                                                return 5.67;
                                                            }
                                                        }
                                                    }
                                                    else if (data.tsDayOfMonth <= 7) {
                                                        if (data.intervaloVel == null) {
                                                            return 25.28278;
                                                        }
                                                        else if (data.intervaloVel > 0.85) {
                                                            if (data.velMaxMS > 6.685) {
                                                                return 32;
                                                            }
                                                            else if (data.velMaxMS <= 6.685) {
                                                                return 25.666;
                                                            }
                                                        }
                                                        else if (data.intervaloVel <= 0.85) {
                                                            return 24.21667;
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.m <= 6) {
                                                if (data.h > 10) {
                                                    return 22.87597;
                                                }
                                                else if (data.h <= 10) {
                                                    if (data.intervaloTiempo > 16.5) {
                                                        return 20.53;
                                                    }
                                                    else if (data.intervaloTiempo <= 16.5) {
                                                        if (data.h > 9) {
                                                            if (data.fechaDayOfWeek == null) {
                                                                return 24.75153;
                                                            }
                                                            else if (data.fechaDayOfWeek > 5) {
                                                                return 26.70214;
                                                            }
                                                            else if (data.fechaDayOfWeek <= 5) {
                                                                return 24.14467;
                                                            }
                                                        }
                                                        else if (data.h <= 9) {
                                                            return 25.91281;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.fechaYear <= 2011) {
                                            if (data.fechaMonth == null) {
                                                return 26.50762;
                                            }
                                            else if (data.fechaMonth > 10) {
                                                return 28.58923;
                                            }
                                            else if (data.fechaMonth <= 10) {
                                                return 25.9664;
                                            }
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 1.41875) {
                                        return 15.87769;
                                    }
                                }
                                else if (data.presinNeumticosPa <= 9.19803) {
                                    if (data.h > 8) {
                                        if (data.fechaDayOfWeek == null) {
                                            return 26.05355;
                                        }
                                        else if (data.fechaDayOfWeek > 5) {
                                            if (data.velMinMS > 6.9328) {
                                                return 25.77196;
                                            }
                                            else if (data.velMinMS <= 6.9328) {
                                                if (data.presinNeumticosPa > 6.83125) {
                                                    if (data.tsDayOfMonth == null) {
                                                        return 26.60897;
                                                    }
                                                    else if (data.tsDayOfMonth > 4) {
                                                        return 26.81232;
                                                    }
                                                    else if (data.tsDayOfMonth <= 4) {
                                                        return 20.915;
                                                    }
                                                }
                                                else if (data.presinNeumticosPa <= 6.83125) {
                                                    if (data.fechaMonth == null) {
                                                        return 28.22664;
                                                    }
                                                    else if (data.fechaMonth > 11) {
                                                        if (data.tsDayOfMonth == null) {
                                                            return 29.39533;
                                                        }
                                                        else if (data.tsDayOfMonth > 23) {
                                                            return 30.74467;
                                                        }
                                                        else if (data.tsDayOfMonth <= 23) {
                                                            return 28.046;
                                                        }
                                                    }
                                                    else if (data.fechaMonth <= 11) {
                                                        if (data.m == null) {
                                                            return 27.91637;
                                                        }
                                                        else if (data.m > 3) {
                                                            return 27.07186;
                                                        }
                                                        else if (data.m <= 3) {
                                                            return 28.83907;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else if (data.fechaDayOfWeek <= 5) {
                                            if (data.pesoKg == null) {
                                                return 25.59836;
                                            }
                                            else if (data.pesoKg > 1033.31852) {
                                                if (data.velMaxMS == null) {
                                                    return 28.44463;
                                                }
                                                else if (data.velMaxMS > 6.91) {
                                                    if (data.intervaloVel == null) {
                                                        return 27.28346;
                                                    }
                                                    else if (data.intervaloVel > 0.55) {
                                                        return 29.15;
                                                    }
                                                    else if (data.intervaloVel <= 0.55) {
                                                        return 26.11688;
                                                    }
                                                }
                                                else if (data.velMaxMS <= 6.91) {
                                                    return 30.45733;
                                                }
                                            }
                                            else if (data.pesoKg <= 1033.31852) {
                                                if (data.h > 10) {
                                                    if (data.velMinMS > 6.7455) {
                                                        if (data.m == null) {
                                                            return 23.85737;
                                                        }
                                                        else if (data.m > 3) {
                                                            if (data.fechaYear > 2011) {
                                                                return 22.4708;
                                                            }
                                                            else if (data.fechaYear <= 2011) {
                                                                return 24.4263;
                                                            }
                                                        }
                                                        else if (data.m <= 3) {
                                                            if (data.sem == null) {
                                                                return 25.07151;
                                                            }
                                                            else if (data.sem > 1) {
                                                                return 24.76294;
                                                            }
                                                            else if (data.sem <= 1) {
                                                                return 29.268;
                                                            }
                                                        }
                                                    }
                                                    else if (data.velMinMS <= 6.7455) {
                                                        if (data.fechaDayOfWeek > 3) {
                                                            if (data.fechaYear > 2012) {
                                                                return 22.86;
                                                            }
                                                            else if (data.fechaYear <= 2012) {
                                                                return 28.02833;
                                                            }
                                                        }
                                                        else if (data.fechaDayOfWeek <= 3) {
                                                            if (data.intervaloTiempo > 7.2) {
                                                                return 26.77429;
                                                            }
                                                            else if (data.intervaloTiempo <= 7.2) {
                                                                return 30.6325;
                                                            }
                                                        }
                                                    }
                                                }
                                                else if (data.h <= 10) {
                                                    if (data.sem == null) {
                                                        return 25.89786;
                                                    }
                                                    else if (data.sem > 2) {
                                                        if (data.velMinMS > 7.015) {
                                                            return 23.91667;
                                                        }
                                                        else if (data.velMinMS <= 7.015) {
                                                            if (data.m == null) {
                                                                return 25.72533;
                                                            }
                                                            else if (data.m > 3) {
                                                                if (data.m > 11) {
                                                                    if (data.tsDayOfMonth == null) {
                                                                        return 26.24818;
                                                                    }
                                                                    else if (data.tsDayOfMonth > 22) {
                                                                        return 28.88;
                                                                    }
                                                                    else if (data.tsDayOfMonth <= 22) {
                                                                        return 25.53962;
                                                                    }
                                                                }
                                                                else if (data.m <= 11) {
                                                                    return 25.15351;
                                                                }
                                                            }
                                                            else if (data.m <= 3) {
                                                                return 26.26061;
                                                            }
                                                        }
                                                    }
                                                    else if (data.sem <= 2) {
                                                        if (data.intervaloTiempo > 7.47083) {
                                                            return 28.1575;
                                                        }
                                                        else if (data.intervaloTiempo <= 7.47083) {
                                                            if (data.velMedMS == null) {
                                                                return 26.18524;
                                                            }
                                                            else if (data.velMedMS > 6.6875) {
                                                                return 26.05625;
                                                            }
                                                            else if (data.velMedMS <= 6.6875) {
                                                                return 31.345;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else if (data.h <= 8) {
                                        if (data.m == null) {
                                            return 23.99684;
                                        }
                                        else if (data.m > 7) {
                                            if (data.h > 7) {
                                                if (data.sem == null) {
                                                    return 23.55677;
                                                }
                                                else if (data.sem > 1) {
                                                    if (data.fechaYear > 2011) {
                                                        return 23.19511;
                                                    }
                                                    else if (data.fechaYear <= 2011) {
                                                        return 25.03222;
                                                    }
                                                }
                                                else if (data.sem <= 1) {
                                                    return 18.415;
                                                }
                                            }
                                            else if (data.h <= 7) {
                                                if (data.m > 10) {
                                                    if (data.intervaloVel == null) {
                                                        return 10.134;
                                                    }
                                                    else if (data.intervaloVel > 0.05) {
                                                        return 9.10778;
                                                    }
                                                    else if (data.intervaloVel <= 0.05) {
                                                        return 19.37;
                                                    }
                                                }
                                                else if (data.m <= 10) {
                                                    return 21.72346;
                                                }
                                            }
                                        }
                                        else if (data.m <= 7) {
                                            if (data.m > 2) {
                                                if (data.intervaloVel == null) {
                                                    return 25.44388;
                                                }
                                                else if (data.intervaloVel > 0.05) {
                                                    if (data.intervaloTiempo > 13.43333) {
                                                        if (data.carburanteL == null) {
                                                            return 23.6585;
                                                        }
                                                        else if (data.carburanteL > 3.5) {
                                                            return 23.28105;
                                                        }
                                                        else if (data.carburanteL <= 3.5) {
                                                            return 30.83;
                                                        }
                                                    }
                                                    else if (data.intervaloTiempo <= 13.43333) {
                                                        return 25.74914;
                                                    }
                                                }
                                                else if (data.intervaloVel <= 0.05) {
                                                    return 16.74;
                                                }
                                            }
                                            else if (data.m <= 2) {
                                                if (data.sem == null) {
                                                    return 23.47545;
                                                }
                                                else if (data.sem > 6) {
                                                    return 9.17;
                                                }
                                                else if (data.sem <= 6) {
                                                    return 23.74037;
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
        else if (data.h <= 6) {
            if (data.intervaloVel == null) {
                return 10.04656;
            }
            else if (data.intervaloVel > 0.65) {
                if (data.h > 2) {
                    if (data.intervaloTiempo == null) {
                        return 18.49246;
                    }
                    else if (data.intervaloTiempo > 24.45645) {
                        if (data.velMaxMS == null) {
                            return 20.37555;
                        }
                        else if (data.velMaxMS > 6.955) {
                            if (data.fechaYear > 2012) {
                                if (data.m == null) {
                                    return 17.28514;
                                }
                                else if (data.m > 6) {
                                    if (data.velMedMS == null) {
                                        return 15.21429;
                                    }
                                    else if (data.velMedMS > 7.065) {
                                        return 9.14286;
                                    }
                                    else if (data.velMedMS <= 7.065) {
                                        if (data.intervaloTiempo > 70.85) {
                                            if (data.tempSueloC == null) {
                                                return 8.266;
                                            }
                                            else if (data.tempSueloC > 85.65) {
                                                return 11.66667;
                                            }
                                            else if (data.tempSueloC <= 85.65) {
                                                return 3.165;
                                            }
                                        }
                                        else if (data.intervaloTiempo <= 70.85) {
                                            if (data.h > 3) {
                                                if (data.intervaloTiempo > 40.65) {
                                                    return 22.44333;
                                                }
                                                else if (data.intervaloTiempo <= 40.65) {
                                                    if (data.intervaloVel > 1.15) {
                                                        return 18.37464;
                                                    }
                                                    else if (data.intervaloVel <= 1.15) {
                                                        return 13.83333;
                                                    }
                                                }
                                            }
                                            else if (data.h <= 3) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 13.52059;
                                                }
                                                else if (data.presinNeumticosPa > 15.15) {
                                                    if (data.fechaMonth == null) {
                                                        return 9.234;
                                                    }
                                                    else if (data.fechaMonth > 7) {
                                                        return 5.33333;
                                                    }
                                                    else if (data.fechaMonth <= 7) {
                                                        return 15.085;
                                                    }
                                                }
                                                else if (data.presinNeumticosPa <= 15.15) {
                                                    return 15.30667;
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (data.m <= 6) {
                                    if (data.velMinMS == null) {
                                        return 20.00312;
                                    }
                                    else if (data.velMinMS > 7.045) {
                                        if (data.retrasoDeArranqueS == null) {
                                            return 16.2775;
                                        }
                                        else if (data.retrasoDeArranqueS > 0.05) {
                                            return 12.54;
                                        }
                                        else if (data.retrasoDeArranqueS <= 0.05) {
                                            if (data.m > 4) {
                                                return 15;
                                            }
                                            else if (data.m <= 4) {
                                                return 21.2925;
                                            }
                                        }
                                    }
                                    else if (data.velMinMS <= 7.045) {
                                        if (data.intervaloVel > 0.75) {
                                            if (data.h > 3) {
                                                return 23.23714;
                                            }
                                            else if (data.h <= 3) {
                                                return 19.18083;
                                            }
                                        }
                                        else if (data.intervaloVel <= 0.75) {
                                            return 15.55667;
                                        }
                                    }
                                }
                            }
                            else if (data.fechaYear <= 2012) {
                                if (data.m == null) {
                                    return 20.27603;
                                }
                                else if (data.m > 10) {
                                    return 9.27667;
                                }
                                else if (data.m <= 10) {
                                    if (data.intervaloTiempo > 63.45) {
                                        if (data.m > 7) {
                                            return 16.38733;
                                        }
                                        else if (data.m <= 7) {
                                            return 20.44556;
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 63.45) {
                                        if (data.intervaloTiempo > 56.625) {
                                            return 27.29;
                                        }
                                        else if (data.intervaloTiempo <= 56.625) {
                                            if (data.intervaloTiempo > 28.61) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 21.1699;
                                                }
                                                else if (data.presinNeumticosPa > 12.85) {
                                                    if (data.velMedMS == null) {
                                                        return 23.75471;
                                                    }
                                                    else if (data.velMedMS > 6.895) {
                                                        return 22.71067;
                                                    }
                                                    else if (data.velMedMS <= 6.895) {
                                                        return 31.585;
                                                    }
                                                }
                                                else if (data.presinNeumticosPa <= 12.85) {
                                                    if (data.fechaMonth == null) {
                                                        return 20.65895;
                                                    }
                                                    else if (data.fechaMonth > 7) {
                                                        if (data.intervaloTiempo > 30.4) {
                                                            return 20.0737;
                                                        }
                                                        else if (data.intervaloTiempo <= 30.4) {
                                                            return 15.835;
                                                        }
                                                    }
                                                    else if (data.fechaMonth <= 7) {
                                                        if (data.intervaloVel > 1.15) {
                                                            if (data.carburanteL == null) {
                                                                return 24.3;
                                                            }
                                                            else if (data.carburanteL > 5.8) {
                                                                if (data.presinNeumticosPa > 11.65) {
                                                                    return 21.83;
                                                                }
                                                                else if (data.presinNeumticosPa <= 11.65) {
                                                                    return 29.77667;
                                                                }
                                                            }
                                                            else if (data.carburanteL <= 5.8) {
                                                                return 21.97333;
                                                            }
                                                        }
                                                        else if (data.intervaloVel <= 1.15) {
                                                            if (data.carburanteL == null) {
                                                                return 20.85279;
                                                            }
                                                            else if (data.carburanteL > 3.5) {
                                                                if (data.presinNeumticosPa > 12.35) {
                                                                    return 13.83;
                                                                }
                                                                else if (data.presinNeumticosPa <= 12.35) {
                                                                    return 21.48711;
                                                                }
                                                            }
                                                            else if (data.carburanteL <= 3.5) {
                                                                return 16.5825;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else if (data.intervaloTiempo <= 28.61) {
                                                if (data.h > 4) {
                                                    return 18.60545;
                                                }
                                                else if (data.h <= 4) {
                                                    return 8.33;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.velMaxMS <= 6.955) {
                            if (data.h > 4) {
                                if (data.tempSueloC == null) {
                                    return 20.11128;
                                }
                                else if (data.tempSueloC > 47.5) {
                                    if (data.intervaloTiempo > 31.6) {
                                        if (data.retrasoDeArranqueS == null) {
                                            return 22.55316;
                                        }
                                        else if (data.retrasoDeArranqueS > 0.15) {
                                            return 15.67;
                                        }
                                        else if (data.retrasoDeArranqueS <= 0.15) {
                                            return 22.93556;
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 31.6) {
                                        return 18.56824;
                                    }
                                }
                                else if (data.tempSueloC <= 47.5) {
                                    return 13.39;
                                }
                            }
                            else if (data.h <= 4) {
                                if (data.intervaloTiempo > 49.05) {
                                    if (data.m == null) {
                                        return 19.91;
                                    }
                                    else if (data.m > 8) {
                                        if (data.intervaloTiempo > 68.3) {
                                            return 13.67;
                                        }
                                        else if (data.intervaloTiempo <= 68.3) {
                                            return 23.59429;
                                        }
                                    }
                                    else if (data.m <= 8) {
                                        if (data.tsDayOfMonth == null) {
                                            return 16;
                                        }
                                        else if (data.tsDayOfMonth > 21) {
                                            return 12.83333;
                                        }
                                        else if (data.tsDayOfMonth <= 21) {
                                            return 20.75;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 49.05) {
                                    if (data.h > 3) {
                                        if (data.tsDayOfMonth == null) {
                                            return 27.69736;
                                        }
                                        else if (data.tsDayOfMonth > 7) {
                                            if (data.intervaloVel > 0.85) {
                                                if (data.fechaMonth == null) {
                                                    return 28.84;
                                                }
                                                else if (data.fechaMonth > 8) {
                                                    if (data.tsDayOfMonth > 11) {
                                                        return 23.7475;
                                                    }
                                                    else if (data.tsDayOfMonth <= 11) {
                                                        return 29.064;
                                                    }
                                                }
                                                else if (data.fechaMonth <= 8) {
                                                    return 29.39;
                                                }
                                            }
                                            else if (data.intervaloVel <= 0.85) {
                                                return 20.17;
                                            }
                                        }
                                        else if (data.tsDayOfMonth <= 7) {
                                            if (data.pesoKg == null) {
                                                return 22.66571;
                                            }
                                            else if (data.pesoKg > 1023.7) {
                                                return 8.33;
                                            }
                                            else if (data.pesoKg <= 1023.7) {
                                                return 25.055;
                                            }
                                        }
                                    }
                                    else if (data.h <= 3) {
                                        return 18.35714;
                                    }
                                }
                            }
                        }
                    }
                    else if (data.intervaloTiempo <= 24.45645) {
                        if (data.velMedMS == null) {
                            return 14.54438;
                        }
                        else if (data.velMedMS > 7.02667) {
                            if (data.presinNeumticosPa == null) {
                                return 7.34116;
                            }
                            else if (data.presinNeumticosPa > 2.85) {
                                if (data.intervaloTiempo > 13.05) {
                                    return 8.23167;
                                }
                                else if (data.intervaloTiempo <= 13.05) {
                                    return 5.60591;
                                }
                            }
                            else if (data.presinNeumticosPa <= 2.85) {
                                return 14.72333;
                            }
                        }
                        else if (data.velMedMS <= 7.02667) {
                            if (data.m == null) {
                                return 16.87323;
                            }
                            else if (data.m > 6) {
                                if (data.fechaYear > 2012) {
                                    if (data.velMedMS > 6.935) {
                                        if (data.presinNeumticosPa == null) {
                                            return 11.68813;
                                        }
                                        else if (data.presinNeumticosPa > 13.15) {
                                            return 15.28;
                                        }
                                        else if (data.presinNeumticosPa <= 13.15) {
                                            return 9.533;
                                        }
                                    }
                                    else if (data.velMedMS <= 6.935) {
                                        if (data.intervaloTiempo > 9.8) {
                                            if (data.presinNeumticosPa == null) {
                                                return 15.80381;
                                            }
                                            else if (data.presinNeumticosPa > 6.85) {
                                                if (data.velMaxMS == null) {
                                                    return 15.92968;
                                                }
                                                else if (data.velMaxMS > 6.73) {
                                                    return 15.80836;
                                                }
                                                else if (data.velMaxMS <= 6.73) {
                                                    return 23.33;
                                                }
                                            }
                                            else if (data.presinNeumticosPa <= 6.85) {
                                                return 8;
                                            }
                                        }
                                        else if (data.intervaloTiempo <= 9.8) {
                                            return 7.67;
                                        }
                                    }
                                }
                                else if (data.fechaYear <= 2012) {
                                    if (data.tsDayOfMonth == null) {
                                        return 18.38815;
                                    }
                                    else if (data.tsDayOfMonth > 7) {
                                        if (data.velMinMS == null) {
                                            return 16.19211;
                                        }
                                        else if (data.velMinMS > 6.865) {
                                            return 14.315;
                                        }
                                        else if (data.velMinMS <= 6.865) {
                                            if (data.h > 4) {
                                                return 17.39625;
                                            }
                                            else if (data.h <= 4) {
                                                return 25.33;
                                            }
                                        }
                                    }
                                    else if (data.tsDayOfMonth <= 7) {
                                        if (data.h > 5) {
                                            return 17;
                                        }
                                        else if (data.h <= 5) {
                                            return 25.805;
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 6) {
                                if (data.velMaxMS == null) {
                                    return 21.43615;
                                }
                                else if (data.velMaxMS > 6.815) {
                                    if (data.intervaloVel > 0.9) {
                                        return 22;
                                    }
                                    else if (data.intervaloVel <= 0.9) {
                                        if (data.velMedMS > 6.995) {
                                            return 9;
                                        }
                                        else if (data.velMedMS <= 6.995) {
                                            return 17.636;
                                        }
                                    }
                                }
                                else if (data.velMaxMS <= 6.815) {
                                    return 32.08;
                                }
                            }
                        }
                    }
                }
                else if (data.h <= 2) {
                    if (data.presinNeumticosPa == null) {
                        return 9.72;
                    }
                    else if (data.presinNeumticosPa > 7.7) {
                        if (data.velMaxMS == null) {
                            return 8.77539;
                        }
                        else if (data.velMaxMS > 7.135) {
                            if (data.intervaloTiempo == null) {
                                return 7.09132;
                            }
                            else if (data.intervaloTiempo > 52.45) {
                                return 1.5;
                            }
                            else if (data.intervaloTiempo <= 52.45) {
                                if (data.intervaloTiempo > 27.675) {
                                    return 10.70333;
                                }
                                else if (data.intervaloTiempo <= 27.675) {
                                    return 6.83775;
                                }
                            }
                        }
                        else if (data.velMaxMS <= 7.135) {
                            if (data.intervaloTiempo == null) {
                                return 10.215;
                            }
                            else if (data.intervaloTiempo > 25.15) {
                                if (data.fechaMonth == null) {
                                    return 11.30825;
                                }
                                else if (data.fechaMonth > 8) {
                                    if (data.tsDayOfMonth == null) {
                                        return 13.98846;
                                    }
                                    else if (data.tsDayOfMonth > 12) {
                                        if (data.fechaYear > 2012) {
                                            return 16.945;
                                        }
                                        else if (data.fechaYear <= 2012) {
                                            return 11.25;
                                        }
                                    }
                                    else if (data.tsDayOfMonth <= 12) {
                                        return 11.536;
                                    }
                                }
                                else if (data.fechaMonth <= 8) {
                                    if (data.intervaloTiempo > 85.9) {
                                        return 2.61;
                                    }
                                    else if (data.intervaloTiempo <= 85.9) {
                                        return 10.94375;
                                    }
                                }
                            }
                            else if (data.intervaloTiempo <= 25.15) {
                                return 8.22727;
                            }
                        }
                    }
                    else if (data.presinNeumticosPa <= 7.7) {
                        if (data.h > 0) {
                            return 9.76083;
                        }
                        else if (data.h <= 0) {
                            return 13.87923;
                        }
                    }
                }
            }
            else if (data.intervaloVel <= 0.65) {
                if (data.intervaloTiempo == null) {
                    return 8.8815;
                }
                else if (data.intervaloTiempo > 10.20582) {
                    if (data.intervaloVel > 0.35) {
                        if (data.velMedMS == null) {
                            return 11.28519;
                        }
                        else if (data.velMedMS > 7.06611) {
                            if (data.m == null) {
                                return 10.33017;
                            }
                            else if (data.m > 6) {
                                if (data.velMedMS > 7.125) {
                                    if (data.intervaloTiempo > 25.7925) {
                                        return 9.70695;
                                    }
                                    else if (data.intervaloTiempo <= 25.7925) {
                                        if (data.m > 11) {
                                            return 9.9085;
                                        }
                                        else if (data.m <= 11) {
                                            return 8.02548;
                                        }
                                    }
                                }
                                else if (data.velMedMS <= 7.125) {
                                    if (data.presinNeumticosPa == null) {
                                        return 10.29062;
                                    }
                                    else if (data.presinNeumticosPa > 7.17083) {
                                        if (data.intervaloTiempo > 25.35) {
                                            return 11.175;
                                        }
                                        else if (data.intervaloTiempo <= 25.35) {
                                            if (data.m > 10) {
                                                return 12.33667;
                                            }
                                            else if (data.m <= 10) {
                                                return 8.1734;
                                            }
                                        }
                                    }
                                    else if (data.presinNeumticosPa <= 7.17083) {
                                        if (data.h > 0) {
                                            if (data.m > 10) {
                                                return 9.752;
                                            }
                                            else if (data.m <= 10) {
                                                return 13.80667;
                                            }
                                        }
                                        else if (data.h <= 0) {
                                            return 12.63724;
                                        }
                                    }
                                }
                            }
                            else if (data.m <= 6) {
                                if (data.intervaloTiempo > 28.38125) {
                                    if (data.h > 5) {
                                        if (data.velMedMS > 7.215) {
                                            return 9.67;
                                        }
                                        else if (data.velMedMS <= 7.215) {
                                            return 17.95286;
                                        }
                                    }
                                    else if (data.h <= 5) {
                                        if (data.intervaloTiempo > 71.3) {
                                            return 18.165;
                                        }
                                        else if (data.intervaloTiempo <= 71.3) {
                                            return 12.27387;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 28.38125) {
                                    if (data.h > 0) {
                                        if (data.fechaYear > 2012) {
                                            if (data.intervaloVel > 0.55) {
                                                if (data.m > 3) {
                                                    return 14.89625;
                                                }
                                                else if (data.m <= 3) {
                                                    return 10.6;
                                                }
                                            }
                                            else if (data.intervaloVel <= 0.55) {
                                                return 10.4228;
                                            }
                                        }
                                        else if (data.fechaYear <= 2012) {
                                            return 8.65463;
                                        }
                                    }
                                    else if (data.h <= 0) {
                                        if (data.m > 3) {
                                            return 10.072;
                                        }
                                        else if (data.m <= 3) {
                                            return 14.06719;
                                        }
                                    }
                                }
                            }
                        }
                        else if (data.velMedMS <= 7.06611) {
                            if (data.h > 3) {
                                if (data.intervaloTiempo > 35.275) {
                                    if (data.m == null) {
                                        return 18.64893;
                                    }
                                    else if (data.m > 7) {
                                        if (data.fechaYear > 2012) {
                                            return 2.67;
                                        }
                                        else if (data.fechaYear <= 2012) {
                                            if (data.velMinMS == null) {
                                                return 16.24308;
                                            }
                                            else if (data.velMinMS > 6.91) {
                                                return 14.883;
                                            }
                                            else if (data.velMinMS <= 6.91) {
                                                return 20.77667;
                                            }
                                        }
                                    }
                                    else if (data.m <= 7) {
                                        if (data.m > 6) {
                                            return 23.68182;
                                        }
                                        else if (data.m <= 6) {
                                            return 15.94667;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 35.275) {
                                    if (data.sem == null) {
                                        return 13.37274;
                                    }
                                    else if (data.sem > 6) {
                                        return 10.09667;
                                    }
                                    else if (data.sem <= 6) {
                                        if (data.m == null) {
                                            return 13.84639;
                                        }
                                        else if (data.m > 10) {
                                            return 8.176;
                                        }
                                        else if (data.m <= 10) {
                                            if (data.h > 5) {
                                                if (data.presinNeumticosPa == null) {
                                                    return 15.74704;
                                                }
                                                else if (data.presinNeumticosPa > 8.85) {
                                                    return 14.92048;
                                                }
                                                else if (data.presinNeumticosPa <= 8.85) {
                                                    return 18.64;
                                                }
                                            }
                                            else if (data.h <= 5) {
                                                if (data.m > 5) {
                                                    if (data.h > 4) {
                                                        if (data.velMaxMS == null) {
                                                            return 13.10556;
                                                        }
                                                        else if (data.velMaxMS > 7.005) {
                                                            return 11.778;
                                                        }
                                                        else if (data.velMaxMS <= 7.005) {
                                                            return 14.765;
                                                        }
                                                    }
                                                    else if (data.h <= 4) {
                                                        return 15.81;
                                                    }
                                                }
                                                else if (data.m <= 5) {
                                                    return 10.801;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            else if (data.h <= 3) {
                                if (data.intervaloTiempo > 82.2) {
                                    if (data.carburanteL == null) {
                                        return 18.7925;
                                    }
                                    else if (data.carburanteL > 11.35) {
                                        return 12.67;
                                    }
                                    else if (data.carburanteL <= 11.35) {
                                        return 20.83333;
                                    }
                                }
                                else if (data.intervaloTiempo <= 82.2) {
                                    if (data.presinNeumticosPa == null) {
                                        return 11.55429;
                                    }
                                    else if (data.presinNeumticosPa > 12.21045) {
                                        if (data.intervaloTiempo > 22.825) {
                                            return 11.28486;
                                        }
                                        else if (data.intervaloTiempo <= 22.825) {
                                            return 8.74303;
                                        }
                                    }
                                    else if (data.presinNeumticosPa <= 12.21045) {
                                        if (data.h > 0) {
                                            if (data.intervaloTiempo > 26.125) {
                                                if (data.h > 2) {
                                                    return 15.04125;
                                                }
                                                else if (data.h <= 2) {
                                                    return 11.05;
                                                }
                                            }
                                            else if (data.intervaloTiempo <= 26.125) {
                                                if (data.pesoKg == null) {
                                                    return 10.10379;
                                                }
                                                else if (data.pesoKg > 1002) {
                                                    return 9.925;
                                                }
                                                else if (data.pesoKg <= 1002) {
                                                    return 15.11;
                                                }
                                            }
                                        }
                                        else if (data.h <= 0) {
                                            if (data.presinNeumticosPa > 7.76) {
                                                return 11.76095;
                                            }
                                            else if (data.presinNeumticosPa <= 7.76) {
                                                return 13.46679;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else if (data.intervaloVel <= 0.35) {
                        if (data.velMedMS == null) {
                            return 9.34982;
                        }
                        else if (data.velMedMS > 7.10511) {
                            if (data.m == null) {
                                return 8.73662;
                            }
                            else if (data.m > 6) {
                                if (data.intervaloTiempo > 15.02113) {
                                    if (data.intervaloTiempo > 49.5) {
                                        return 11.37111;
                                    }
                                    else if (data.intervaloTiempo <= 49.5) {
                                        if (data.fechaYear > 2011) {
                                            return 7.93116;
                                        }
                                        else if (data.fechaYear <= 2011) {
                                            return 9.45436;
                                        }
                                    }
                                }
                                else if (data.intervaloTiempo <= 15.02113) {
                                    if (data.tsDayOfMonth == null) {
                                        return 7.0894;
                                    }
                                    else if (data.tsDayOfMonth > 7) {
                                        return 6.89118;
                                    }
                                    else if (data.tsDayOfMonth <= 7) {
                                        return 10.72333;
                                    }
                                }
                            }
                            else if (data.m <= 6) {
                                if (data.fechaYear > 2012) {
                                    if (data.intervaloTiempo > 14.49864) {
                                        return 10.70582;
                                    }
                                    else if (data.intervaloTiempo <= 14.49864) {
                                        return 9.07022;
                                    }
                                }
                                else if (data.fechaYear <= 2012) {
                                    if (data.m > 5) {
                                        return 10.426;
                                    }
                                    else if (data.m <= 5) {
                                        return 8.69241;
                                    }
                                }
                            }
                        }
                        else if (data.velMedMS <= 7.10511) {
                            if (data.intervaloTiempo > 44.6) {
                                if (data.velMedMS > 6.94) {
                                    return 12.76826;
                                }
                                else if (data.velMedMS <= 6.94) {
                                    return 16.54714;
                                }
                            }
                            else if (data.intervaloTiempo <= 44.6) {
                                if (data.h > 0) {
                                    if (data.intervaloTiempo > 13.81076) {
                                        if (data.sem == null) {
                                            return 9.80552;
                                        }
                                        else if (data.sem > 4) {
                                            if (data.fechaYear > 2012) {
                                                if (data.velMaxMS == null) {
                                                    return 10.52447;
                                                }
                                                else if (data.velMaxMS > 6.935) {
                                                    if (data.m == null) {
                                                        return 10.08583;
                                                    }
                                                    else if (data.m > 6) {
                                                        return 8.66214;
                                                    }
                                                    else if (data.m <= 6) {
                                                        return 10.99182;
                                                    }
                                                }
                                                else if (data.velMaxMS <= 6.935) {
                                                    return 18.42;
                                                }
                                            }
                                            else if (data.fechaYear <= 2012) {
                                                return 9.2556;
                                            }
                                        }
                                        else if (data.sem <= 4) {
                                            if (data.intervaloTiempo > 23.475) {
                                                return 11.77143;
                                            }
                                            else if (data.intervaloTiempo <= 23.475) {
                                                return 9.66953;
                                            }
                                        }
                                    }
                                    else if (data.intervaloTiempo <= 13.81076) {
                                        if (data.sem == null) {
                                            return 8.5465;
                                        }
                                        else if (data.sem > 2) {
                                            if (data.velMedMS > 6.975) {
                                                return 7.54803;
                                            }
                                            else if (data.velMedMS <= 6.975) {
                                                return 9.72571;
                                            }
                                        }
                                        else if (data.sem <= 2) {
                                            return 10.3224;
                                        }
                                    }
                                }
                                else if (data.h <= 0) {
                                    if (data.presinNeumticosPa == null) {
                                        return 11.02757;
                                    }
                                    else if (data.presinNeumticosPa > 9.5175) {
                                        if (data.fechaYear > 2011) {
                                            if (data.m == null) {
                                                return 8.8654;
                                            }
                                            else if (data.m > 6) {
                                                return 8.31174;
                                            }
                                            else if (data.m <= 6) {
                                                return 10.36353;
                                            }
                                        }
                                        else if (data.fechaYear <= 2011) {
                                            return 13.268;
                                        }
                                    }
                                    else if (data.presinNeumticosPa <= 9.5175) {
                                        if (data.fechaYear > 2011) {
                                            if (data.m == null) {
                                                return 12.03875;
                                            }
                                            else if (data.m > 3) {
                                                if (data.m > 10) {
                                                    return 12.59;
                                                }
                                                else if (data.m <= 10) {
                                                    return 10.10417;
                                                }
                                            }
                                            else if (data.m <= 3) {
                                                return 13.43069;
                                            }
                                        }
                                        else if (data.fechaYear <= 2011) {
                                            return 14.0425;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else if (data.intervaloTiempo <= 10.20582) {
                    if (data.intervaloTiempo > 0.425) {
                        if (data.h > 0) {
                            if (data.velMedMS == null) {
                                return 6.61341;
                            }
                            else if (data.velMedMS > 6.88375) {
                                if (data.m == null) {
                                    return 6.55437;
                                }
                                else if (data.m > 6) {
                                    if (data.fechaYear > 2011) {
                                        if (data.fechaMonth == null) {
                                            return 5.86241;
                                        }
                                        else if (data.fechaMonth > 11) {
                                            if (data.tempSueloC == null) {
                                                return 6.44536;
                                            }
                                            else if (data.tempSueloC > 60.35) {
                                                return 6.37784;
                                            }
                                            else if (data.tempSueloC <= 60.35) {
                                                return 15.83;
                                            }
                                        }
                                        else if (data.fechaMonth <= 11) {
                                            if (data.h > 5) {
                                                if (data.velMedMS > 7.025) {
                                                    return 6.13682;
                                                }
                                                else if (data.velMedMS <= 7.025) {
                                                    return 13.72333;
                                                }
                                            }
                                            else if (data.h <= 5) {
                                                return 5.62113;
                                            }
                                        }
                                    }
                                    else if (data.fechaYear <= 2011) {
                                        if (data.velMedMS > 6.965) {
                                            if (data.tsDayOfMonth == null) {
                                                return 6.69922;
                                            }
                                            else if (data.tsDayOfMonth > 11) {
                                                return 6.33018;
                                            }
                                            else if (data.tsDayOfMonth <= 11) {
                                                return 7.751;
                                            }
                                        }
                                        else if (data.velMedMS <= 6.965) {
                                            if (data.h > 3) {
                                                return 8;
                                            }
                                            else if (data.h <= 3) {
                                                return 13.166;
                                            }
                                        }
                                    }
                                }
                                else if (data.m <= 6) {
                                    if (data.fechaYear > 2012) {
                                        if (data.intervaloTiempo > 7.12463) {
                                            return 8.37205;
                                        }
                                        else if (data.intervaloTiempo <= 7.12463) {
                                            return 7.25135;
                                        }
                                    }
                                    else if (data.fechaYear <= 2012) {
                                        return 6.43165;
                                    }
                                }
                            }
                            else if (data.velMedMS <= 6.88375) {
                                if (data.pesoKg == null) {
                                    return 13.42077;
                                }
                                else if (data.pesoKg > 1019) {
                                    return 8.695;
                                }
                                else if (data.pesoKg <= 1019) {
                                    return 17.47143;
                                }
                            }
                        }
                        else if (data.h <= 0) {
                            if (data.presinNeumticosPa == null) {
                                return 12.46873;
                            }
                            else if (data.presinNeumticosPa > 9.85) {
                                if (data.velMinMS == null) {
                                    return 9.07692;
                                }
                                else if (data.velMinMS > 7.035) {
                                    return 7.4175;
                                }
                                else if (data.velMinMS <= 7.035) {
                                    return 11.732;
                                }
                            }
                            else if (data.presinNeumticosPa <= 9.85) {
                                if (data.velMedMS == null) {
                                    return 13.13682;
                                }
                                else if (data.velMedMS > 6.985) {
                                    return 12.46936;
                                }
                                else if (data.velMedMS <= 6.985) {
                                    if (data.velMaxMS == null) {
                                        return 14.78789;
                                    }
                                    else if (data.velMaxMS > 6.995) {
                                        return 27.33;
                                    }
                                    else if (data.velMaxMS <= 6.995) {
                                        return 14.09111;
                                    }
                                }
                            }
                        }
                    }
                    else if (data.intervaloTiempo <= 0.425) {
                        if (data.velMinMS == null) {
                            return 14.26032;
                        }
                        else if (data.velMinMS > 7.085) {
                            return 8.28069;
                        }
                        else if (data.velMinMS <= 7.085) {
                            if (data.presinNeumticosPa == null) {
                                return 19.36059;
                            }
                            else if (data.presinNeumticosPa > 3) {
                                return 16.5075;
                            }
                            else if (data.presinNeumticosPa <= 3) {
                                return 21.89667;
                            }
                        }
                    }
                }
            }
        }
    }
    return null;
}