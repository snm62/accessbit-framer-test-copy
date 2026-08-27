import React, { useState, useRef, useEffect } from "react";
import "../styles/customization.css";
import iro from "@jaames/iro"; // Import iro.js

const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);

const mobile = new URL("../assets/mobile.svg", import.meta.url).href;
const monitor = new URL("../assets/monitor.svg", import.meta.url).href;
const icon1 = new URL("../assets/Accessibility.webp", import.meta.url).href;

/** Mirrors the TRUSTED_STRIPE_URLS pattern in PublishScreen — only these protocols are allowed for user-supplied URLs. */
const ALLOWED_LINK_PROTOCOLS = new Set<string>(["https:", "http:"]);

const isValidStatementLink = (url: string): boolean => {
  if (!url) return true;
  try {
    return ALLOWED_LINK_PROTOCOLS.has(new URL(url).protocol);
  } catch {
    return false;
  }
};

type CustomizationData = {
  selectedIcon: string;
  triggerButtonColor: string;
  triggerButtonShape: string;
  triggerHorizontalPosition: string;
  triggerVerticalPosition: string;
  triggerButtonSize: string;
};

type CustomizationScreenProps = {
  onBack: () => void;
  onNext: (customizationData: any) => void;
  existingCustomizationData?: any;
  isLoadingExistingData?: boolean;
};
const CustomizationScreen: React.FC<CustomizationScreenProps> = ({ onBack, onNext, existingCustomizationData, isLoadingExistingData = false }) => {
  const [isDesktopView, setIsDesktopView] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Customization state
  const [accessibilityStatementLink, setAccessibilityStatementLink] = useState("");
  const [linkError, setLinkError] = useState<string | null>(null);
  const [triggerVerticalPosition, setTriggerVerticalPosition] = useState("Bottom");
  const [triggerButtonSize, setTriggerButtonSize] = useState("Medium");
  const [triggerButtonShape, setTriggerButtonShape] = useState("Circle");
  const [triggerHorizontalOffset, setTriggerHorizontalOffset] = useState("0px");
  const [hideTriggerButton, setHideTriggerButton] = useState("No");
  const [triggerVerticalOffset, setTriggerVerticalOffset] = useState("0px");
  const [triggerHorizontalPosition, setTriggerHorizontalPosition] = useState("Left");
  const [btnColor, setBtnColor] = useState("#007bff");
  const [showOnMobile, setShowOnMobile] = useState("Show");
  const [mobileTriggerHorizontalPosition, setMobileTriggerHorizontalPosition] = useState("Left");
  const [mobileTriggerVerticalPosition, setMobileTriggerVerticalPosition] = useState("Bottom");
  const [mobileTriggerSize, setMobileTriggerSize] = useState("Medium");
  const [mobileTriggerShape, setMobileTriggerShape] = useState("Rounded");
  const [mobileTriggerHorizontalOffset, setMobileTriggerHorizontalOffset] = useState("0");
  const [mobileTriggerVerticalOffset, setMobileTriggerVerticalOffset] = useState("0");
  const [selectedIcon, setSelectedIcon] = useState("accessibility");
  const [selectedIconName, setSelectedIconName] = useState("Accessibility");

  // colorpicker
  const [btnOpen, setBtnOpen] = useState(false);
  // Text-input mirror of btnColor for the "type a hex" field inside the
  // color picker dropdown. Kept as a separate piece of state so the user
  // can type intermediate values (e.g. "#ff" while aiming for "#ff0000")
  // without the wheel overwriting their input until they've typed a
  // complete 7-char hex.
  const [hexInput, setHexInput] = useState("#007bff");
  const btnPickerInstance = useRef<any>(null);
  const btnDropdownRef = useRef<HTMLDivElement | null>(null);
  const btnPickerRef = useRef<HTMLDivElement | null>(null);


  // Load existing customization data when component mounts
  useEffect(() => {
  
    if (existingCustomizationData) {
      setAccessibilityStatementLink(existingCustomizationData.accessibilityStatementLink || "");
      setTriggerVerticalPosition(existingCustomizationData.triggerVerticalPosition || "Bottom");
      setTriggerButtonSize(existingCustomizationData.triggerButtonSize || "Medium");
      setTriggerButtonShape(existingCustomizationData.triggerButtonShape || "Circle");
      setTriggerHorizontalOffset(existingCustomizationData.triggerHorizontalOffset || "0px");
      setHideTriggerButton(existingCustomizationData.hideTriggerButton || "No");
      setTriggerVerticalOffset(existingCustomizationData.triggerVerticalOffset || "0px");
      setTriggerHorizontalPosition(existingCustomizationData.triggerHorizontalPosition || "Left");
      setBtnColor(existingCustomizationData.triggerButtonColor || "#007bff");
      setShowOnMobile(existingCustomizationData.showOnMobile || "Show");
      setMobileTriggerHorizontalPosition(existingCustomizationData.mobileTriggerHorizontalPosition || "Left");
      setMobileTriggerVerticalPosition(existingCustomizationData.mobileTriggerVerticalPosition || "Bottom");
      setMobileTriggerSize(existingCustomizationData.mobileTriggerSize || "Medium");
      setMobileTriggerShape(existingCustomizationData.mobileTriggerShape || "Rounded");
      setMobileTriggerHorizontalOffset(existingCustomizationData.mobileTriggerHorizontalOffset || "0");
      setMobileTriggerVerticalOffset(existingCustomizationData.mobileTriggerVerticalOffset || "0");
      setSelectedIcon(existingCustomizationData.selectedIcon || "accessibility");
      setSelectedIconName(existingCustomizationData.selectedIconName || "Accessibility");
    }
  }, [existingCustomizationData]);

 

  useEffect(() => {
    if (!btnPickerInstance.current && btnPickerRef.current) {
      btnPickerInstance.current = iro.ColorPicker(btnPickerRef.current, { width: 100, color: btnColor, borderWidth: 2, borderColor: "#ccc" });
    }
    if (btnPickerInstance.current) {
      btnPickerInstance.current.off("color:change");
      btnPickerInstance.current.on("color:change", (newColor: any) => handleColorChange(newColor.hexString));
    }
    return () => {
      if (btnPickerInstance.current) {
        btnPickerInstance.current.off("color:change");
      }
    };
  }, [])
  useEffect(() => {
    // Sync picker color with state when dropdown opens
    if (btnOpen && btnPickerInstance.current) btnPickerInstance.current.color.set(btnColor);
  }, [btnOpen])

  
  useEffect(() => {
    setHexInput(btnColor);
  }, [btnColor]);

  
  const isCompleteHex = (v: string) => /^#[0-9a-fA-F]{6}$/.test(v);

  const handleHexInputChange = (rawValue: string) => {
    let next = rawValue.trim();
    // Auto-prepend "#" if the user didn't type it
    if (next && !next.startsWith("#")) next = "#" + next;
    // Hard cap at 7 characters (# + 6 hex digits)
    if (next.length > 7) next = next.substring(0, 7);
    // Always reflect what the user typed, even intermediate values
    setHexInput(next);

    // Push to the wheel + state only when the value is fully valid
    if (isCompleteHex(next)) {
      setBtnColor(next);
      if (btnPickerInstance.current) {
        try {
          btnPickerInstance.current.color.set(next);
        } catch {
          // iro may throw on unexpected input — safely ignore
        }
      }
    }
  };

  const handleHexInputBlur = () => {
    // If the user left an invalid value in the input, snap back to the
    // last committed color so the UI never shows a broken state.
    if (!isCompleteHex(hexInput)) {
      setHexInput(btnColor);
    }
  };

  const handleHexInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  useEffect(() => {
    // Handle click outside to close any open dropdowns or color pickers
    function handleGlobalClickOutside(event: MouseEvent) {
      // Close button color picker dropdown if clicked outside
      if (
        btnOpen &&
        btnDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target as Node) &&
        btnPickerRef.current &&
        !btnPickerRef.current.contains(event.target as Node)
      ) {
        setBtnOpen(false);
      }

      // Close any open custom dropdown if clicked outside
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          if (openDropdown === key) setOpenDropdown(null);
        }
      });
    }

    document.addEventListener("mousedown", handleGlobalClickOutside);
    return () => document.removeEventListener("mousedown", handleGlobalClickOutside);
  }, [btnOpen, openDropdown]);


  const dropdownRefs = {
    triggerHorizontalPosition: useRef<HTMLDivElement>(null),
    triggerVerticalPosition: useRef<HTMLDivElement>(null),
    triggerButtonSize: useRef<HTMLDivElement>(null),
    triggerButtonShape: useRef<HTMLDivElement>(null),
    triggerHorizontalOffset: useRef<HTMLDivElement>(null),
    hideTriggerButton: useRef<HTMLDivElement>(null),
    triggerVerticalOffset: useRef<HTMLDivElement>(null),
    showOnMobile: useRef<HTMLDivElement>(null),
    mobileTriggerHorizontalPosition: useRef<HTMLDivElement>(null),
    mobileTriggerVerticalPosition: useRef<HTMLDivElement>(null),
    mobileTriggerSize: useRef<HTMLDivElement>(null),
    mobileTriggerShape: useRef<HTMLDivElement>(null),
    mobileTriggerHorizontalOffset: useRef<HTMLDivElement>(null),
    mobileTriggerVerticalOffset: useRef<HTMLDivElement>(null),
  };

  // Dropdown options
  const positionOptions = [
    { label: "Left", value: "Left" },
    { label: "Right", value: "Right" },
  ];

  const verticalPositionOptions = [
    { label: "Top", value: "Top" },   
    { label: "Middle", value: "Middle" },
    { label: "Bottom", value: "Bottom" },
  ];

  const sizeOptions = [
    { label: "Small", value: "Small" },
    { label: "Medium", value: "Medium" },
    { label: "Large", value: "Large" },
  ];

  const shapeOptions = [
    { label: "Circle", value: "Circle" },
    { label: "Square", value: "Square" },
    { label: "Rounded", value: "Rounded" },
  ];

  const yesNoOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const showOptions = [
    { label: "Show", value: "Show" },
    { label: "Hide", value: "Hide" },
  ];

  const mobileVerticalPositionOptions = [
    { label: "Top", value: "Top" },
    { label: "Middle", value: "Middle" },
    { label: "Bottom", value: "Bottom" },
  ];

  const mobileShapeOptions = [
    { label: "Rounded", value: "Rounded" },
    { label: "Square", value: "Square" },
    { label: "Circle", value: "Circle" },
  ];

  const getLabel = (opts: any[], val: string) =>
    (opts.find((o) => o.value === val) || {}).label || val;

  // (Consolidated click-outside handling in the effect above)

  const handleNextPayment = async () => {
    if (!isValidStatementLink(accessibilityStatementLink)) {
      setLinkError("Please enter a valid URL starting with https:// or http://");
      return;
    }

    try {
      const customizationData = {
        // Map your state variables to the customization object
        triggerButtonColor: btnColor,
        triggerButtonShape: triggerButtonShape,
        triggerButtonSize: triggerButtonSize,
        triggerHorizontalPosition: triggerHorizontalPosition,
        triggerVerticalPosition: triggerVerticalPosition,
        triggerHorizontalOffset: triggerHorizontalOffset,
        triggerVerticalOffset: triggerVerticalOffset,
        hideTriggerButton: hideTriggerButton,
        selectedIcon: selectedIcon,
        selectedIconName: selectedIconName,
        showOnMobile: showOnMobile,
        mobileTriggerButtonColor: btnColor, // Use same color as desktop
        mobileTriggerShape: mobileTriggerShape,
        mobileTriggerSize: mobileTriggerSize,
        mobileTriggerHorizontalPosition: mobileTriggerHorizontalPosition,
        mobileTriggerVerticalPosition: mobileTriggerVerticalPosition,
        mobileTriggerHorizontalOffset: mobileTriggerHorizontalOffset,
        mobileTriggerVerticalOffset: mobileTriggerVerticalOffset,
        accessibilityStatementLink: accessibilityStatementLink
      };
      
      onNext(customizationData);
    } catch (error) {

      
    }
  };


  const handleColorChange = (color: string) => {
    setBtnColor(color);
  };

  const handleShapeChange = (shape: string) => {
    setTriggerButtonShape(shape);
  };

  const handlePositionChange = (position: string) => {
    setTriggerHorizontalPosition(position);
  };

  const handleVerticalPositionChange = (position: string) => {
    setTriggerVerticalPosition(position);
  };

  const renderDropdown = (
    type: string,
    label: string,
    value: string,
    options: any[],
    onPick: (val: string) => void
  ) => (
    <div className="form-group">
      <label>{label}</label>
      <div className={`custom-select ${openDropdown === type ? "open" : ""}`} ref={dropdownRefs[type as keyof typeof dropdownRefs]}>
        <div
          className="selected"
          onClick={() =>
            setOpenDropdown(openDropdown === type ? null : type)
          }
        >
          <span>{getLabel(options, value)}</span>
          <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {openDropdown === type && (
          <ul className="options">
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onPick(opt.value);
                  setOpenDropdown(null);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );


  return (
    <div className="customization-screen">
      
      {/* Header */}
      <div className="customization-header">
        <div className="app-name"></div>
        <div className="header-buttons">
          <button className="back-btn" onClick={onBack}>
            <img src={whitearrow} alt="" style={{ transform: 'rotate(180deg)', width: '14px', height: '15px', marginRight: '8px' }} />
            Back
          </button>
                <button className="next-btn" onClick={handleNextPayment}>
            Next
            <img src={whitearrow} alt="" style={{ width: '14px', height: '15px', marginLeft: '8px' }} />
          </button>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="step-navigation">
        <div className="step active">
          <span className="step-number">STEP 1</span>
          <span className="step-name">Customization</span>
        </div>
        <div className="step">
          <span className="step-number">STEP 2</span>
          <span className="step-name">Publish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Panel - Customization Options */}
        <div className="left-panel">
          <div className="panel-content">
            <div className="section">
              <h3>Customization AccessWidget Interface</h3>

              <div className="interface-grid">
                <div className="form-group">
                  <label>Accessibility Statement Link</label>
                  <input
                    type="text"
                    placeholder="https://example.com/accessibility"
                    value={accessibilityStatementLink}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAccessibilityStatementLink(val);
                      setLinkError(isValidStatementLink(val) ? null : "Please enter a valid URL starting with https:// or http://");
                    }}
                    onBlur={() => {
                      if (!isValidStatementLink(accessibilityStatementLink)) {
                        setLinkError("Please enter a valid URL starting with https:// or http://");
                      }
                    }}
                    style={linkError ? { borderColor: "#ef4444" } : undefined}
                  />
                  {linkError && (
                    <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{linkError}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="section">
              <h3>Customizing AccessWidget Trigger</h3>

              <div className="trigger-grid">
                <div className="form-group">
                  <div>
                    <label>Background Color</label>
                    <div className="color-picker-dropdown" ref={btnDropdownRef}>
                      <div className="color-picker-button">
                        <input
                          type="text"
                          className="color-picker-hex-input"
                          value={hexInput}
                          onChange={(e) => handleHexInputChange(e.target.value)}
                          onBlur={handleHexInputBlur}
                          onKeyDown={handleHexInputKeyDown}
                          spellCheck={false}
                          autoComplete="off"
                          aria-label="Hex color code"
                          placeholder="#rrggbb"
                          maxLength={7}
                        />
                        <button
                          type="button"
                          className="color-preview"
                          style={{ backgroundColor: btnColor }}
                          onClick={() => setBtnOpen(!btnOpen)}
                          aria-label={btnOpen ? "Close color wheel" : "Open color wheel"}
                        />
                      </div>
                      <div className={`color-picker-container ${btnOpen ? "visible" : "hidden"}`}>
                        <div ref={btnPickerRef}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Trigger Vertical Position</label>
                  <div className="custom-select-container">
                    {renderDropdown("triggerVerticalPosition", "", triggerVerticalPosition, verticalPositionOptions, handleVerticalPositionChange)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Trigger Button Size</label>
                  <div className="custom-select-container">
                    {renderDropdown("triggerButtonSize", "", triggerButtonSize, sizeOptions, setTriggerButtonSize)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Trigger Button Shape</label>
                  <div className="custom-select-container">
                    {renderDropdown("triggerButtonShape", "", triggerButtonShape, shapeOptions, handleShapeChange)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Hide Trigger Button</label>
                  <div className="custom-select-container">
                    {renderDropdown("hideTriggerButton", "", hideTriggerButton, yesNoOptions, setHideTriggerButton)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Trigger Horizontal Position</label>
                  <div className="custom-select-container">
                    {renderDropdown("triggerHorizontalPosition", "", triggerHorizontalPosition, positionOptions, handlePositionChange)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Trigger Horizontal Offset</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={triggerHorizontalOffset.replace('px', '')}
                    onChange={(e) => setTriggerHorizontalOffset(String(Math.min(50, Math.max(0, Number(e.target.value)))) + 'px')}
                    className="offset-input"
                  />
                </div>

                <div className="form-group">
                  <label>Trigger Vertical Offset</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={triggerVerticalOffset.replace('px', '')}
                    onChange={(e) => setTriggerVerticalOffset(String(Math.min(50, Math.max(0, Number(e.target.value)))) + 'px')}
                    className="offset-input"
                  />
                </div>
              </div>

            </div>

            <div className="section">
              <h3>Customizing AccessWidget for Mobile</h3>

              <div className="mobile-grid">
                <div className="form-group">
                  <label>Show On Mobile?</label>
                  <div className="custom-select-container">
                    {renderDropdown("showOnMobile", "", showOnMobile, showOptions, setShowOnMobile)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile Trigger Horizontal Position</label>
                  <div className="custom-select-container">
                    {renderDropdown("mobileTriggerHorizontalPosition", "", mobileTriggerHorizontalPosition, positionOptions, setMobileTriggerHorizontalPosition)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile Trigger Vertical Position</label>
                  <div className="custom-select-container">
                    {renderDropdown("mobileTriggerVerticalPosition", "", mobileTriggerVerticalPosition, mobileVerticalPositionOptions, setMobileTriggerVerticalPosition)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile Trigger Size</label>
                  <div className="custom-select-container">
                    {renderDropdown("mobileTriggerSize", "", mobileTriggerSize, sizeOptions, setMobileTriggerSize)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Trigger Mobile Shape</label>
                  <div className="custom-select-container">
                    {renderDropdown("mobileTriggerShape", "", mobileTriggerShape, mobileShapeOptions, setMobileTriggerShape)}
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile Trigger Horizontal Offset</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={mobileTriggerHorizontalOffset}
                    onChange={(e) => setMobileTriggerHorizontalOffset(String(Math.min(50, Math.max(0, Number(e.target.value)))))}
                    className="offset-input"
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Trigger Vertical Offset</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={mobileTriggerVerticalOffset}
                    onChange={(e) => setMobileTriggerVerticalOffset(String(Math.min(50, Math.max(0, Number(e.target.value)))))}
                    className="offset-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="right-panel">
          <div className="preview-header">
            <h3>Preview</h3>
            <div className="device-selector">
              <button
                className={`device-btn ${isDesktopView ? 'active' : ''}`}
                onClick={() => setIsDesktopView(true)}
              >
                <img src={monitor} alt="" />
              </button>
              <button
                className={`device-btn ${!isDesktopView ? 'active' : ''}`}
                onClick={() => setIsDesktopView(false)}
              >
                <img src={mobile} alt="" />
              </button>
            </div>
          </div>

          <div style={{ padding: "10px" }}>
            {isDesktopView ? (
              <div className="preview-window desktop-preview">
                <div className="browser-window">
                  <div className="browser-controls">
                    <div className="traffic-lights">
                      <div className="traffic-light red"></div>
                      <div className="traffic-light yellow"></div>
                      <div className="traffic-light green"></div>
                    </div>
                  </div>
                  <div className="browser-content">
                    {hideTriggerButton === 'No' && (
                      <div
                        className="accessibility-widget"
                        style={{
                          left: triggerHorizontalPosition === 'Left' ?
                            `calc(9px + ${parseInt(triggerHorizontalOffset)* 0.2}px)` :
                            triggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                          right: triggerHorizontalPosition === 'Right' ?
                            `calc(9px + ${parseInt(triggerHorizontalOffset)* 0.2}px)` : 'auto',
                          top: triggerVerticalPosition === 'Top' ?
                            `calc(9px + ${parseInt(triggerVerticalOffset) * 0.2}px)` : 'auto',
                          bottom: triggerVerticalPosition === 'Bottom' ?
                            `calc(9px + ${parseInt(triggerVerticalOffset) * 0.2}px)` : 'auto',
                          transform: triggerHorizontalPosition === 'Center' ?
                            (triggerVerticalPosition === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                            (triggerVerticalPosition === 'Middle' ? 'translateY(-13%)' : 'none')
                        }}
                      >
                        <div
                          className={`widget-trigger ${triggerButtonShape.toLowerCase()} ${triggerButtonSize.toLowerCase()}`}
                          style={{ backgroundColor: btnColor }}
                        >
                          <img
                            src={icon1}
                            alt="Accessibility Icon"
                            className="widget-icon"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="preview-window mobile-preview">
                <div className="mobile-browser-window">
                  <div className="mobile-browser-content">
                    {showOnMobile === 'Show' && (
                      <div
                        className="mobile-trigger-widget"
                        style={{
                          left: mobileTriggerHorizontalPosition === 'Left' ?
                            `calc(8px + ${Math.round(parseInt(mobileTriggerHorizontalOffset) * 0.4)}px)` :
                            mobileTriggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                          right: mobileTriggerHorizontalPosition === 'Right' ?
                            `calc(8px + ${Math.round(parseInt(mobileTriggerHorizontalOffset) * 0.4)}px)` : 'auto',
                          top: mobileTriggerVerticalPosition === 'Top' ?
                            `calc(10px + ${Math.round(parseInt(mobileTriggerVerticalOffset) * 0.4)}px)` :
                            mobileTriggerVerticalPosition === 'Middle' ? '50%' : 'auto',
                          bottom: mobileTriggerVerticalPosition === 'Bottom' ?
                            `calc(10px + ${Math.round(parseInt(mobileTriggerVerticalOffset) * 0.4)}px)` : 'auto',
                          transform: mobileTriggerHorizontalPosition === 'Center' ?
                            (mobileTriggerVerticalPosition === 'Middle' ? 'translateX(-50%)' : 'translateX(-50%)') :
                            (mobileTriggerVerticalPosition === 'Middle' ? 'translateY(-50%)' : 'none')
                        }}
                      >
                        <div
                          className={`mobile-widget-trigger ${mobileTriggerShape === 'Rounded' ? 'round' : mobileTriggerShape.toLowerCase()} ${mobileTriggerSize.toLowerCase()}`}
                          style={{ backgroundColor: btnColor }}
                        >
                          <img
                            src={icon1}
                            alt="Accessibility Icon"
                            className="mobile-widget-icon"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomizationScreen;
