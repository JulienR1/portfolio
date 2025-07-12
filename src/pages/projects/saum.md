---
title: "SAUM"
layout: "/src/layouts/Project.astro"
repo: "https://github.com/SAMuCaptE/documentation"
---

SAUM is a student research project aiming to **monitor the impact of climate change on Canadian northern lakes** by obtaining relevant physicochemical data all year long.
It is led by the [Laboratoire Nanotechnologies et Nanosystèmes](https://www.usherbrooke.ca/ln2/) and associated with [Université de Sherbrooke](https://usherbrooke.ca).

## Project motivation

The following pictures showcase some targeted lakes that are currently being monitored by manually gathering data in the summer.
Everything is done in the summer because it is the only safe period to access these regions.

<div class="horizontal">
    <img src="/projects/saum/terrain.jpg" alt="terrain" />
    <img src="/projects/saum/manual_mission.jpg" alt="mission example" />
</div>
<em>Scientists need to gather data manually in the summer</em>

SAUM aims to leave an **underwater sensor station to gather data all year long**.
This allows for **more data points** and a better understanding of the lake **behaviors during winter**.
It needs to resilient, energy efficient and reliable.

## Requirements

The main requirements as defined by the team are:

- Gather the water's temperature, pH and electrical conductivity;
- Withstand the formation and destruction of the ice layer;
- Be portable;
- Be easy of use;
- Gather 1 year worth of data points;
- Be reusable.

Some other requirements were highlighted and designed for but these were non-negociable.

## Solution

The proposed solution consists of an underwater station housing a custom PCB powering and controlling external sensors.
This underwater station transmits data periodically to another station on the bank as backups and eventually to sync everything back home via satellites.
Each component is independent and is built to last a year.

The following diagram summarizes the solution.

![High level diagram of the solution](/projects/saum/highlevel-en.png)
_Simplified solution diagram_

The stations are better detailed by the following CADs.

<div class="horizontal cad">
    <img src="/projects/saum/loch-cad.png" alt="Loch CAD" />
    <img src="/projects/saum/ness-cad.png" alt="Ness CAD" />
</div>
<em>Proposed solution CAD</em>

Finally, these casings essentially contain three components: the PCB, batteries and storage.
They communicate to various peripherals over UART lines.
Both stations can be configured with a laptop using an external program (called Atlanta).

From a electronics and software standpoint, the different components are architectured as follows:

![schema](/projects/saum/schema-en.svg)
_High level electronics and software schema_

## Loch

Loch is the program executed on the underwater station.
Its goal is to read data from lakes and keep the results safe for a year.
It is built to be as reliable and energy efficient as possible.

As a summary, its main loop is as follows.

<img src="/projects/saum/flow-en.jpg" alt="Loch flow diagram" style="padding-bottom: 1em;"/>
<em>Simplified Loch loop cycle</em>

## Pigeon

Pigeon is a custom binary protocol transmitted over UART to communicate between stations and with Atlanta.
Each transmission has the following structure.
It is implemented in C and in Go.

![Pigeon transmission structure](/projects/saum/pigeon-en.jpg)
_Pigeon transmission structure_

## Atlanta

Atlanta is an external piece of software made to interact with the embedded devices.
It acts as a UI to facilitate the **configuration** and **data retrieval** steps.
However, every function is also available in the terminal to automate processes.

The main requirements are:

- Detect a station when connected (through USB);
- Read and write a station's configuration;
- Read the stored datapoints from a station;
- Validate a station's integrity.

Atlanta can be showcased by its mock-ups.

![Atlanta's selected station menu](/projects/saum/atlanta-menu.png)
_Selected station showcase menu_

![Atlanta's sensor configuration process](/projects/saum/atlanta-sensor-configuration.png)
_Configurating a sensor for an upcoming mission_

<div class="horizontal">
    <img src="/projects/saum/atlanta-config-wizard.png"/>
    <img src="/projects/saum/atlanta-config-wizard-2.png"/>
</div>
<em>Using the wizard to configure and validate the station's integrity</em>

## Tests

To validate the intended behavior, many tests were completed during various production stages.
As an example, the main program could be tested using a development kit (while the PCB was being manufactured) and actual sensors.
Afterwards, it was an easy task to swap the devkit for the real deal.
Here are some logs that allowed to validate the measurement timings, the values and the data storage in real time.

![Long run tests logs showcase](/projects/saum/long-run-test.png)
_Logs from a multiple day test run_

Some tests were also made to validate the deployment and retrieval process in local controlled environments.

![Deployment process in controlled environment](/projects/saum/test-bassin.png)
_Testing the deployment process_

## Churchill mission

During summer 2024, the first prototype was deployed for 2 weeks in Churchill, MB as a first test.

<video src="/projects/saum/mission_site.mp4" controls></video>
_Churchill mission site_

<style>
    img {
        border: none;
    }

    .horizontal img {
        margin: 0;
        max-width: min(100%, 400px);
        border: none;
        padding: 0;
    }

    .cad img {
        max-height: 30vh;
    }

    video {
        max-height: 40vh;
    }
</style>
