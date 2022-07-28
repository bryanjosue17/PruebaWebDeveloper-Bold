import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Typography, Paper, Grid } from "@mui/material";
import GyT from "../assets/body/BancoGYT.svg";
import PeriRoosevelt from "../assets/body/PeriRoosevelt.svg";
import PaseoAndaria from "../assets/body/PaseoAndaria.svg";
import BarefootCay from "../assets/body/BarefootCay.svg";
import CincoB from "../assets/body/5B.svg";
import Aktua from "../assets/body/Aktua.svg";
import BFC from "../assets/body/BFC.svg";
import Parma from "../assets/body/Parma.svg";
import ByB from "../assets/body/BYB.svg";
import Popsis from "../assets/body/Popsis.svg";
import Clios from "../assets/body/Clios.svg";
import BlackAndDecker from "../assets/body/BlackAndDecker.svg";
import Remington from "../assets/body/Remington.svg";
import NewfieldConsulting from "../assets/body/NewfieldConsulting.svg";
import LFTQM from "../assets/body/LFTQM.svg";
import ElPeriodico from "../assets/body/EP.svg";
import GNM from "../assets/body/GNM.svg";
import Teleton from "../assets/body/Teleton.svg";
import SPN from "../assets/body/SPN.svg";

const Body = () => {
  return (
    <div style={{ background: "#222120", padding: 50 }}>
      <Typography variant="h3" style={{ color: "white", marginBottom: 50 }}>
        Bold Agencia de marketing.
      </Typography>

      <Typography variant="h6" style={{ color: "white", marginBottom: 50 }}>
        Somos una agencia de marketing ubicados en Guatemala con mucha
        relevancia en la región y experiencia. El análisis, la creatividad y la
        estrategia son nuestro pilar. Creamos la conexión emotiva que hace
        crecer tu marca. Construimos ideas sostenibles que generan valor en el
        futuro.
      </Typography>

      <Grid container spacing={1} style={{ marginBottom: 50 }}>
        <Grid item xs={12} md={4}>
          <Paper
            style={{ backgroundColor: "#3B3434", padding: 15, height: 175 }}
          >
            <Typography variant="h3" style={{ color: "white" }}>
              Ideas
            </Typography>

            <Typography variant="h6" style={{ color: "white" }}>
              Revolucionamos nuestra forma de pensar e idear para la nueva
              generación de servicios.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            style={{ backgroundColor: "#3B3434", padding: 15, height: 175 }}
          >
            <Typography variant="h3" style={{ color: "white" }}>
              Ejecución
            </Typography>

            <Typography variant="h6" style={{ color: "white" }}>
              Desarrollamos los proyectos que llevan al progreso de una mejor
              vida y un mejor futuro.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            style={{ backgroundColor: "#3B3434", padding: 15, height: 175 }}
          >
            <Typography variant="h3" style={{ color: "white" }}>
              Excelencia
            </Typography>

            <Typography variant="h6" style={{ color: "white" }}>
              Ofrecemos servicios de clase mundial, originalidad y eficiencia en
              construcción de marca y soluciones.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h3" style={{ color: "white", marginBottom: 50 }}>
        Desde encontrar tu identidad hasta comunicarla
      </Typography>

      <Typography variant="h6" style={{ color: "white", marginBottom: 50 }}>
        Nuestro enfoque es proveer la integración de todas las áreas donde tu
        imagen pueda ser memorable. Un compromiso de excelencia.
      </Typography>

      <Grid container spacing={1} style={{ marginBottom: 50 }}>
        <Grid item xs={12} md={6}>
          <div style={{ padding: 15, height: 550 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Branding
            </Typography>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                margin: "3%",
              }}
            >
              <img
                src={require("../assets/body/Branding.jpg")}
                alt="Branding"
                style={{
                  width: "500px",
                  height: "300px",
                }}
              ></img>
            </div>

            <Typography variant="body1" style={{ color: "white" }}>
              Construimos marcas buscando equilibrio, su esencia más pura y
              plasmando ideas que sigan la función del producto o servicio.
              Somos expertos en la generación de identidad corporativa y
              administración de la marca con un alto nivel de satisfacción por
              parte de nuestros clientes.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={{ padding: 15, height: 550 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Marketing Digital
            </Typography>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                margin: "3%",
              }}
            >
              <img
                src={require("../assets/body/MercadeoDigital.jpg")}
                alt="MercadeoDigital"
                style={{
                  width: "500px",
                  height: "300px",
                }}
              ></img>
            </div>
            <Typography variant="body1" style={{ color: "white" }}>
              Aprovechamos las diferentes herramientas digitales de la era
              moderna, para dar a conocer productos y servicios de nuestros
              clientes y así generar la mayor cantidad posible de conversiones.
              Combinamos labores multidisciplinarias de nuestro equipo de
              profesionales para generar propuestas de valor que ayuden a las
              marcas a crecer a través de los diferentes canales del marketing
              digital como: desarrollo web, pauta en redes sociales, email
              marketing, analítica digital y CRM. Nuestras estrategias están
              enfocadas a dar resultados a través del análisis de datos y la
              toma de decisiones en función de los mismos.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={{ padding: 15, height: 550 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Publicidad
            </Typography>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                margin: "3%",
              }}
            >
              <img
                src={require("../assets/body/Produccion.jpg")}
                alt="Publicidad"
                style={{
                  width: "500px",
                  height: "300px",
                }}
              ></img>
            </div>
            <Typography variant="body1" style={{ color: "white" }}>
              Generamos estrategias de marketing ATL haciendo uso de medios de
              publicidad tradicionales tales como, medios masivos de
              comunicación, radio, televisión, vallas, mupis y prensa que
              complementan las estrategias.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={{ padding: 15, height: 550 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Eventos
            </Typography>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                margin: "3%",
              }}
            >
              <img
                src={require("../assets/body/Eventos.jpg")}
                alt="Eventos"
                style={{
                  width: "500px",
                  height: "300px",
                }}
              ></img>
            </div>
            <Typography variant="body1" style={{ color: "white" }}>
              Entendemos la necesidad de contar con una logística y labor
              creativa detrás de los eventos de una organización. Trabajamos
              desde la conceptualización de los eventos hasta la ejecución de
              los mismos, entre los que podemos encontrar: lanzamientos de
              marca, lanzamientos de productos, asambleas así como BTL.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={{ padding: 15, height: 550 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Marketing
            </Typography>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                margin: "3%",
              }}
            >
              <img
                src={require("../assets/body/Mercadeo.jpg")}
                alt="Mercadeo"
                style={{
                  width: "500px",
                  height: "300px",
                }}
              ></img>
            </div>
            <Typography variant="body1" style={{ color: "white" }}>
              Nos ajustamos a las últimas dentendias de marketing tradicional,
              buscamos un enfoque adecuado a las necesidades de nuestros
              clientes y sus objetivos, para con ello ayudarles a alcanzar sus
              metas comerciales.
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={{ padding: 15, height: 550 }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Produccion
            </Typography>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                margin: "3%",
              }}
            >
              <img
                src={require("../assets/body/Produccion.jpg")}
                alt="Produccion"
                style={{
                  width: "500px",
                  height: "300px",
                }}
              ></img>
            </div>
            <Typography variant="body1" style={{ color: "white" }}>
              Trabajamos todo el proceso de producción y animación, desde la
              conceptualización de los mensajes, diseño del guión, edición de
              video y fotografía así como generación de animaciones digitales
              para publicidad digital, eventos, identidad corporativa o
              cualquier fin que contribuya al crecimiento, desarrollo y los
              objetivos de las marcas.
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Typography variant="h3" style={{ color: "white", marginBottom: 50 }}>
        Nuestras colaboraciones
      </Typography>

      <Typography variant="h6" style={{ color: "white", marginBottom: 50 }}>
        Nos asociamos con marcas en todas las etapas de crecimiento, en varias
        partes de Latinoamérica. Juntos trabajamos para generar ideas audaces y
        darles vida.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <img src={GyT} style={{ height: 200, width: 200 }} alt="GyT"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={PeriRoosevelt}
            style={{ height: 200, width: 200 }}
            alt="PeriRoosevelt"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={PaseoAndaria}
            style={{ height: 200, width: 200 }}
            alt="PaseoAndaria"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={BarefootCay}
            style={{ height: 200, width: 200 }}
            alt="BarefootCay"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={CincoB} style={{ height: 200, width: 200 }} alt="CincoB"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={Aktua} style={{ height: 200, width: 200 }} alt="Aktua"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={BFC} style={{ height: 200, width: 200 }} alt="BFC"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={Parma} style={{ height: 200, width: 200 }} alt="Parma"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={Popsis} style={{ height: 200, width: 200 }} alt="Popsis"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={Clios} style={{ height: 200, width: 200 }} alt="Clios"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={BlackAndDecker}
            style={{ height: 200, width: 200 }}
            alt="BlackAndDecker"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={Remington}
            style={{ height: 200, width: 200 }}
            alt="Remington"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={NewfieldConsulting}
            style={{ height: 200, width: 200 }}
            alt="NewfieldConsulting"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={LFTQM} style={{ height: 200, width: 200 }} alt="LFTQM"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={ElPeriodico}
            style={{ height: 200, width: 200 }}
            alt="ElPeriodico"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={GNM} style={{ height: 200, width: 200 }} alt="GNM"></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={Teleton}
            style={{ height: 200, width: 200 }}
            alt="Teleton"
          ></img>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <img src={SPN} style={{ height: 200, width: 200 }} alt="SPN"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
