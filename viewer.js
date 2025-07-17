import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';

await fetch('markers_panel.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('markers-panel-container').innerHTML = html;
    });

const nodes = [
    {
        id: 'node-1',
        panorama: 'panoramics/twilight_sunset.webp',
        longitude: '-150deg',
        //sphereCorrection: { pan: '-220deg' },
        markers: [
            {
                id: 'goto-node-2',
                position: { yaw: '70deg', pitch: '-5deg' },
                image: 'icons/target-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'El mar',
            },
            {
                id: 'panel-01',
                position: { yaw: '-150deg', pitch: '15deg' },
                image: 'icons/center-alt-text-bubble-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                anchor: 'bottom center',
                zoomLvl: 100,
                opacity: 0.75,
                tooltip: '<b>Informacion</b>',
                content: document.getElementById('lorem-content01').innerHTML,
                zIndex: 10,
            }
        ]
    },
    {
        id: 'node-2',
        panorama: 'panoramics/IMG_20250608_214752_360.webp',
        panoData: {
            fullWidth: 16384,
            fullHeight: 8192,
            croppedWidth: 8192,
            croppedHeight: 4096,
            croppedX: 4096,
            croppedY: 2048,
        },

        markers: [
            {
                id: 'goto-node-3',
                position: { yaw: '-70deg', pitch: '-36deg' },
                image: 'icons/target-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'A restaurant...',
            },
            {
                id: 'goto-node-1',
                position: { yaw: '80deg', pitch: '-12deg' },
                image: 'icons/back-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'To back',
            },
            {
                id: 'panel-02',
                position: { yaw: '0deg', pitch: '7deg' },
                image: 'icons/center-alt-text-bubble-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                anchor: 'bottom center',
                zoomLvl: 100,
                opacity: 0.75,
                tooltip: '<b>Informacion</b>',
                content: document.getElementById('lorem-content02').innerHTML,
                zIndex: 10,
            }
        ]
    },
    {
        id: 'node-3',
        panorama: 'panoramics/warm_restaurant.webp',

        //sphereCorrection: { pan: '-15deg' },

        markers: [
            {
                id: 'goto-node-4',
                position: { yaw: '-133deg', pitch: '0deg' },
                image: 'icons/target-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'to terrace',
            },
            {
                id: 'goto-node-2',
                position: { yaw: '-53deg', pitch: '10deg' },
                image: 'icons/back-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'To back',
            },
            {
                id: 'panel-03',
                position: { yaw: '128deg', pitch: '-2deg' },
                image: 'icons/center-alt-text-bubble-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                anchor: 'bottom center',
                zoomLvl: 100,
                opacity: 0.75,
                tooltip: '<b>Informacion</b>',
                content: document.getElementById('lorem-content03').innerHTML,
                zIndex: 10,
            }
        ]
    },
    {
        id: 'node-4',
        panorama: 'panoramics/allphoto-bangkok-GfXqtWmiuDI-unsplash.webp',
        panoData: {
            fullWidth: 16384,
            fullHeight: 8192,
            croppedWidth: 8192,
            croppedHeight: 4096,
            croppedX: 4096,
            croppedY: 2048,
        },
        //sphereCorrection: { pan: '115deg' },
        markers: [
            {
                id: 'goto-node-5',
                position: { yaw: '-3deg', pitch: '38deg' },
                image: 'icons/target-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'to Palermo',
            },
            {
                id: 'goto-node-3',
                position: { yaw: '31deg', pitch: '0deg' },
                image: 'icons/back-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'To back',
            },
            {
                id: 'panel-04',
                position: { yaw: '-75deg', pitch: '32deg' },
                image: 'icons/center-alt-text-bubble-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                anchor: 'bottom center',
                zoomLvl: 100,
                opacity: 0.75,
                tooltip: '<b>Informacion</b>',
                content: document.getElementById('lorem-content04').innerHTML,
                zIndex: 10,
            }
        ]
    },
    {
        id: 'node-5',
        panorama: 'panoramics/palermo_sidewalk.webp',
        //sphereCorrection: { pan: '-105deg' },
        markers: [
            {
                id: 'goto-node-6',
                position: { yaw: '40deg', pitch: '10deg' },
                image: 'icons/target-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'A Yokohama',
            },
            {
                id: 'goto-node-4',
                position: { yaw: '-140deg', pitch: '15deg' },
                image: 'icons/back-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'To back',
            },
            {
                id: 'panel-05',
                position: { yaw: '113deg', pitch: '25deg' },
                image: 'icons/center-alt-text-bubble-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                anchor: 'bottom center',
                zoomLvl: 100,
                opacity: 0.75,
                tooltip: '<b>Informacion</b>',
                content: document.getElementById('lorem-content05').innerHTML,
                zIndex: 10,
            }
        ]
    },
    {
        id: 'node-6',
        panorama: 'panoramics/yokohama180.webp',
        panoData: {
            fullWidth: 16384,
            fullHeight: 8192,
            croppedWidth: 8192,
            croppedHeight: 4096,
            croppedX: 4096,
            croppedY: 2048,
        },
        //sphereCorrection: { pan: '135deg' },
        markers: [
            {
                id: 'goto-node-1',
                position: { yaw: '-2deg', pitch: '10deg' },
                image: 'icons/target-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'To Heighborhood...',
            },
            {
                id: 'goto-node-5',
                position: { yaw: '-73deg', pitch: '-2deg' },
                image: 'icons/back-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                opacity: 0.75,
                tooltip: 'To back',
            },
            {
                id: 'panel-06',
                position: { yaw: '23deg', pitch: '28deg' },
                image: 'icons/center-alt-text-bubble-svgrepo-com.svg',
                size: { width: 48, height: 48 },
                anchor: 'bottom center',
                zoomLvl: 100,
                opacity: 0.75,
                tooltip: '<b>Informacion</b>',
                content: document.getElementById('lorem-content06').innerHTML,
                zIndex: 10,
            }
        ]
    }
];




const viewer = new Viewer({

    container: document.querySelector('#viewer'),
    defaultZoomLvl: 50,
    mousewheelCtrlKey: true,
    navbar: ['zoom', 'markersList', 'fullscreen'],

    plugins: [
        [VirtualTourPlugin, {
            positionMode: 'manual',
            renderMode: '3d',
            nodes: nodes,
            startNodeId: 'node-1',
        }],
        [MarkersPlugin, {}],

    ]
});
const vtPlugin = viewer.getPlugin(VirtualTourPlugin);
const galleryPlugin = viewer.getPlugin(GalleryPlugin);
const markersPlugin = viewer.getPlugin(MarkersPlugin);

vtPlugin.addEventListener('select-marker', ({ marker }) => {
    console.log('Marker seleccionado:', marker);
    if (marker.content) {
        markersPlugin.showPanel(marker.id);

    }
});

viewer.getPlugin(MarkersPlugin).addEventListener('select-marker', ({ marker }) => {
    if (marker.id === 'goto-node-1') {
        vtPlugin.setCurrentNode('node-1');
    }
    if (marker.id === 'goto-node-2') {
        vtPlugin.setCurrentNode('node-2');
    }
    if (marker.id === 'goto-node-3') {
        vtPlugin.setCurrentNode('node-3');
    }
    if (marker.id === 'goto-node-4') {
        vtPlugin.setCurrentNode('node-4');
    }
    if (marker.id === 'goto-node-5') {
        vtPlugin.setCurrentNode('node-5');
    }
    if (marker.id === 'goto-node-6') {
        vtPlugin.setCurrentNode('node-6');
    }
});




