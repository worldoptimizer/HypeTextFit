	
/*!
Hype TextFit 1.0.3
copyright (c) 2023 Max Ziebell. MIT-license
*/

/*
* Version-History
* 1.0.0 Initial release under MIT-license
* 1.0.1 Added line height handling and inital version of width height mode
* 1.0.2 Added min and max capability to height and width based fitting
* 1.0.3 Added automatic refresh if the CSS fonts API triggers load events
*/
if("HypeTextFit" in window === false) window['HypeTextFit'] = (function () {
	    
    function HypeDocumentLoad(hypeDocument, element, event) {
        hypeDocument.refreshTextfitObservers = function() {
            let currentSceneElement = document.getElementById(hypeDocument.currentSceneId());
            if (currentSceneElement) {
                HypeScenePrepareForDisplay(hypeDocument, currentSceneElement, null);
            }
        }

        hypeDocument.removeTextfitObservers = function() {
            let currentSceneElement = document.getElementById(hypeDocument.currentSceneId());
            if (currentSceneElement) {
                HypeSceneUnload(hypeDocument, currentSceneElement, null);
            }
        }
        
        hypeDocument.adjustTextSize = function(element) {
	        const DEFAULT_MIN_FONT = 8 /16;
            const DEFAULT_MAX_FONT = 100 /16;
            const DEFAULT_THRESHOLD_FONT = 1 /16;
            const DEFAULT_WIDTH_STEP = 2;
            const DEFAULT_UNIT = 'em';
	
			if (window.getComputedStyle(element).lineHeight !== 'normal' && !element.getAttribute('data-textfit-lineheight')) {
			    const baseFontSize = parseFloat(window.getComputedStyle(element).fontSize);
			    const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
			    const unitlessLineHeight = String(lineHeight / baseFontSize);
			    element.setAttribute('data-textfit-lineheight', unitlessLineHeight);
			    element.style.lineHeight = unitlessLineHeight;
			} else if (element.getAttribute('data-textfit-lineheight')) {
			    element.style.lineHeight = element.getAttribute('data-textfit-lineheight');
			}
	
	        const minAttribute = parseFloat(element.getAttribute('data-textfit-min'));
	        const maxAttribute = parseFloat(element.getAttribute('data-textfit-max'));
	        const thresholdAttribute = parseFloat(element.getAttribute('data-textfit-threshold'));
	        const fitAttribute = element.getAttribute('data-textfit') || 'lower';
	        const unitAttribute = element.getAttribute('data-textfit-unit') || DEFAULT_UNIT;
	
	        let minFont = (isNaN(minAttribute) ? DEFAULT_MIN_FONT : minAttribute);
	        let maxFont = (isNaN(maxAttribute) ? DEFAULT_MAX_FONT : maxAttribute);
	        let minSize = (isNaN(minAttribute) ? null : minAttribute);
	        let maxSize = (isNaN(maxAttribute) ? null : maxAttribute);
	        let threshold = (isNaN(thresholdAttribute) ? DEFAULT_THRESHOLD_FONT : thresholdAttribute);
	
	        window.requestAnimationFrame(() => {
	            let lower = minFont;
	            let upper = maxFont;
	            let mid;

                if (fitAttribute === "width" || fitAttribute === "height") {
				    const sizeAttribute = (fitAttribute === "width") ? 'width' : 'height';
				
				    var overflow = element.style.overflow;
				    element.style.overflow = 'hidden';
				
				    element.style[sizeAttribute] = 0;
				    hypeDocument.setElementProperty(element, sizeAttribute, 0);
				
				    const contentSize = (fitAttribute === "width") ? element.scrollWidth : element.scrollHeight;
				    hypeDocument.setElementProperty(element, sizeAttribute, contentSize);
				
				    if (fitAttribute === "width") {
				        while (element.scrollHeight > element.clientHeight) {
				            hypeDocument.setElementProperty(element, sizeAttribute, hypeDocument.getElementProperty(element, sizeAttribute) + DEFAULT_WIDTH_STEP);
				        }
				    }
				    
	
				    let sizeTemp = hypeDocument.getElementProperty(element, sizeAttribute, contentSize);
				    
				    if(!(minSize === null && maxSize === null)) {
					    if(minSize !== null) sizeTemp = Math.max(sizeTemp, minSize);
					    if(maxSize !== null) sizeTemp = Math.min(sizeTemp, maxSize);
					    hypeDocument.setElementProperty(element, sizeAttribute, sizeTemp);
					}
				
				    element.style.overflow = overflow;
				    
				} else {
	                while (upper - lower > threshold) {
	                    mid = (upper + lower) / 2;
	                    element.style.fontSize = mid + unitAttribute;
	
	                    if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
	                        upper = mid;
	                    } else {
	                        lower = mid;
	                    }
	                }
	
	                switch (fitAttribute) {
	                    case 'lower': element.style.fontSize = lower + unitAttribute; break;
	                    case 'upper': element.style.fontSize = upper + unitAttribute; break;
	                    case 'mid': element.style.fontSize = mid + unitAttribute; break;
	                }
	            }
        	});
  		}
  		
  		if ('fonts' in document) {
		    document.fonts.ready.then(function() {
		    	hypeDocument.refreshTextfitObservers();
		    });
		    
		    document.fonts.onloadingdone = function(event) {
		       hypeDocument.refreshTextfitObservers();
		    };
		}
    }

    function HypeScenePrepareForDisplay(hypeDocument, element, event) {
        let elementsToObserve = element.querySelectorAll('[data-textfit]');
        for (let el of elementsToObserve) {
	        hypeDocument.adjustTextSize(el);
            if (el._textObserver) continue;
            let observer = new MutationObserver(function (mutations) {
                hypeDocument.adjustTextSize(el);
            });
            observer.observe(el, { childList: true, subtree: true, characterData: true });
            el._textObserver = observer;
        }
    }

    function HypeSceneUnload(hypeDocument, element, event) {
        let elementsToObserve = element.querySelectorAll('[data-textfit]');
        for (let el of elementsToObserve) {
            if (el._textObserver) {
                el._textObserver.disconnect();
                delete el._textObserver;
            }
        } 
    }

    if ("HYPE_eventListeners" in window === false) { window.HYPE_eventListeners = Array(); }
    window.HYPE_eventListeners.push({ "type": "HypeDocumentLoad", "callback": HypeDocumentLoad });
    window.HYPE_eventListeners.push({type: "HypeScenePrepareForDisplay", callback: HypeScenePrepareForDisplay});
    window.HYPE_eventListeners.push({type: "HypeSceneUnload", callback: HypeSceneUnload});

    return {
        version: '1.0.3'
    };
})();
