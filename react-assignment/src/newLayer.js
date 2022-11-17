import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { createObject } from "./main.js"
import { createPhaseCard } from "./createPhaseCard.js"
import { createTechniqueCard } from "./createTechniqueCard.js"

const data = require("./enterprise-attack.json");
const jsonData = data.objects
const newObj = createObject(jsonData)

function NewLayer() {
    return (
      <body>
        <div className= "NewLayer">
            <div className="PhaseNameCards">
            {createPhaseCard(newObj, 0)}
            {createPhaseCard(newObj, 1)}
            {createPhaseCard(newObj, 2)}
            {createPhaseCard(newObj, 3)}
            {createPhaseCard(newObj, 4)}
            {createPhaseCard(newObj, 5)}
            {createPhaseCard(newObj, 6)}
            {createPhaseCard(newObj, 7)}
            {createPhaseCard(newObj, 8)}
            {createPhaseCard(newObj, 9)}
            {createPhaseCard(newObj, 10)}
            {createPhaseCard(newObj, 11)}
            {createPhaseCard(newObj, 12)}
            {createPhaseCard(newObj, 13)}
            </div>
        </div>
        <div className="OuterTechniqueCardContainer">
            <div className="InnerTechniqueCardContainer1">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "defense-evasion")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer2">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "privilege-escalation")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer3">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "execution")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer4">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "persistence")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer5">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "command-and-control")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer6">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "collection")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer7">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "lateral-movement")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer8">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "credential-access")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer9">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "discovery")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer10">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "resource-development")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer11">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "reconnaissance")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer12">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "impact")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer13">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "initial-access")}
                </div>
            </div>
            <div className="InnerTechniqueCardContainer14">
                <div className="InnerTechniqueCardRow">
                    {createTechniqueCard(newObj, "exfiltration")}
                </div>
            </div>
        </div>
      </body>
    );
}

export default NewLayer;