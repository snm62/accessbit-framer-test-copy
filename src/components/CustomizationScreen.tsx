import React, { useState, useRef, useEffect } from "react";
import "../styles/customization.css";
import iro from "@jaames/iro";
import { platform } from "../platform";
import { normalizeStatementLink, sanitizeStatementLink } from "../util/statementLink";

const brandLogo = new URL("../assets/accessbit-logo.svg", import.meta.url).href;

const whitearrow = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M0.756 8.59012V6.62812H10.314L5.598 2.30812L6.948 0.940125L13.356 6.97012V8.23012L6.948 14.2601L5.58 12.8741L10.278 8.59012H0.756Z" fill="white"/>
</svg>`);

const icon1 = new URL("../assets/Accessibility.webp", import.meta.url).href;

const PREVIEW_OFFSET_SCALE = {
  desktop: 0.2,
  mobile: 80 / 390,
};

const scalePreviewOffset = (value: string, scale: number): number => {
  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed)) return 0;
  return Math.round(parsed * scale * 100) / 100;
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
  const [siteDomain, setSiteDomain] = useState('');

  // Load domain from Framer platform on mount
  useEffect(() => {
    platform.getPublishInfo().then((publishInfo: any) => {
      const productionUrl = publishInfo?.productionUrl || '';
      const extractDomain = (url: string) => url
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/\/$/, '')
        .split('/')[0];
      const customDomain = extractDomain(productionUrl);
      const isStaging = !customDomain || customDomain.includes('.framer.app') || customDomain.includes('.framer.com') || customDomain.includes('localhost') || customDomain.includes('127.0.0.1');
      if (!isStaging && customDomain) setSiteDomain(customDomain);
    }).catch(() => {});
  }, []);

  // Customization state
  const [accessibilityStatementLink, setAccessibilityStatementLink] = useState("");
  const [statementLinkError, setStatementLinkError] = useState<string | null>(null);
  const [triggerVerticalPosition, setTriggerVerticalPosition] = useState("Bottom");
  const [triggerButtonSize, setTriggerButtonSize] = useState("Medium");
  const [triggerButtonShape, setTriggerButtonShape] = useState("Circle");
  const [triggerHorizontalOffset, setTriggerHorizontalOffset] = useState("0px");
  const [hideTrigger, setHideTrigger] = useState(false);
  const [triggerVerticalOffset, setTriggerVerticalOffset] = useState("3px");
  const [triggerHorizontalPosition, setTriggerHorizontalPosition] = useState("Left");
  const [btnColor, setBtnColor] = useState("#007bff");
  const [showOnMobile, setShowOnMobile] = useState("Show");
  const [mobileTriggerHorizontalPosition, setMobileTriggerHorizontalPosition] = useState("Left");
  const [mobileTriggerVerticalPosition, setMobileTriggerVerticalPosition] = useState("Bottom");
  const [mobileTriggerSize, setMobileTriggerSize] = useState("Medium");
  const [mobileTriggerShape, setMobileTriggerShape] = useState("Rounded");
  const [mobileTriggerHorizontalOffset, setMobileTriggerHorizontalOffset] = useState("3");
  const [mobileTriggerVerticalOffset, setMobileTriggerVerticalOffset] = useState("3");
  const [selectedIcon, setSelectedIcon] = useState("accessibility");
  const [selectedIconName, setSelectedIconName] = useState("Accessibility");
  const [unsavedCount, setUnsavedCount] = useState(0);

  // color picker
  const [btnOpen, setBtnOpen] = useState(false);
  const [hexInput, setHexInput] = useState("#007bff");
  const btnPickerInstance = useRef<any>(null);
  const btnDropdownRef = useRef<HTMLDivElement | null>(null);
  const btnPickerRef = useRef<HTMLDivElement | null>(null);

  // Load existing customization data
  useEffect(() => {
    if (existingCustomizationData) {
      setAccessibilityStatementLink(sanitizeStatementLink(existingCustomizationData.accessibilityStatementLink));
      setStatementLinkError(null);
      setTriggerVerticalPosition(existingCustomizationData.triggerVerticalPosition || "Bottom");
      setTriggerButtonSize(existingCustomizationData.triggerButtonSize || "Medium");
      setTriggerButtonShape(existingCustomizationData.triggerButtonShape || "Circle");
      setTriggerHorizontalOffset(existingCustomizationData.triggerHorizontalOffset || "0px");
      setHideTrigger(existingCustomizationData.hideTriggerButton === "Yes");
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
      setUnsavedCount(0);
    }
  }, [existingCustomizationData]);

  useEffect(() => {
    if (!btnPickerInstance.current && btnPickerRef.current) {
      btnPickerInstance.current = iro.ColorPicker(btnPickerRef.current, { width: 100, color: btnColor, borderWidth: 2, borderColor: "#ccc" });
      btnPickerInstance.current.on("color:change", (newColor: any) => handleColorChange(newColor.hexString));
    }
  }, []);

  useEffect(() => {
    if (btnOpen && btnPickerInstance.current) btnPickerInstance.current.color.set(btnColor);
  }, [btnOpen]);

  useEffect(() => {
    setHexInput(btnColor);
  }, [btnColor]);

  const isCompleteHex = (v: string) => /^#[0-9a-fA-F]{6}$/.test(v);

  const handleHexInputChange = (rawValue: string) => {
    let next = rawValue.trim();
    if (next && !next.startsWith("#")) next = "#" + next;
    if (next.length > 7) next = next.substring(0, 7);
    setHexInput(next);
    if (isCompleteHex(next)) {
      setBtnColor(next);
      if (btnPickerInstance.current) {
        try { btnPickerInstance.current.color.set(next); } catch {}
      }
    }
  };

  const handleHexInputBlur = () => {
    if (!isCompleteHex(hexInput)) setHexInput(btnColor);
  };

  const handleHexInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") (e.target as HTMLInputElement).blur();
  };

  const dropdownRefs = {
    interfaceLanguage: useRef<HTMLDivElement>(null),
    interfacePosition: useRef<HTMLDivElement>(null),
    triggerHorizontalPosition: useRef<HTMLDivElement>(null),
    triggerVerticalPosition: useRef<HTMLDivElement>(null),
    triggerButtonSize: useRef<HTMLDivElement>(null),
    triggerButtonShape: useRef<HTMLDivElement>(null),
    triggerHorizontalOffset: useRef<HTMLDivElement>(null),
    triggerVerticalOffset: useRef<HTMLDivElement>(null),
    showOnMobile: useRef<HTMLDivElement>(null),
    mobileTriggerHorizontalPosition: useRef<HTMLDivElement>(null),
    mobileTriggerVerticalPosition: useRef<HTMLDivElement>(null),
    mobileTriggerSize: useRef<HTMLDivElement>(null),
    mobileTriggerShape: useRef<HTMLDivElement>(null),
    mobileTriggerHorizontalOffset: useRef<HTMLDivElement>(null),
    mobileTriggerVerticalOffset: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    function handleGlobalClickOutside(event: MouseEvent) {
      if (
        btnOpen &&
        btnDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target as Node) &&
        btnPickerRef.current &&
        !btnPickerRef.current.contains(event.target as Node)
      ) {
        setBtnOpen(false);
      }
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          if (openDropdown === key) setOpenDropdown(null);
        }
      });
    }
    document.addEventListener("mousedown", handleGlobalClickOutside);
    return () => document.removeEventListener("mousedown", handleGlobalClickOutside);
  }, [btnOpen, openDropdown]);

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

  const showOptions = [
    { label: "Show", value: "Show" },
    { label: "Hide", value: "Hide" },
  ];

  const mobileShapeOptions = [
    { label: "Rounded", value: "Rounded" },
    { label: "Square", value: "Square" },
    { label: "Circle", value: "Circle" },
  ];

  const handleColorChange = (color: string) => setBtnColor(color);

  const handleNextPayment = async () => {
    try {
      const linkResult = normalizeStatementLink(accessibilityStatementLink);
      if (!linkResult.ok) {
        setStatementLinkError(linkResult.reason ?? null);
        return;
      }
      setStatementLinkError(null);

      const customizationData = {
        triggerButtonColor: btnColor,
        triggerButtonShape: triggerButtonShape,
        triggerButtonSize: triggerButtonSize,
        triggerHorizontalPosition: triggerHorizontalPosition,
        triggerVerticalPosition: triggerVerticalPosition,
        triggerHorizontalOffset: triggerHorizontalOffset,
        triggerVerticalOffset: triggerVerticalOffset,
        hideTriggerButton: hideTrigger ? "Yes" : "No",
        selectedIcon: selectedIcon,
        selectedIconName: selectedIconName,
        showOnMobile: showOnMobile,
        mobileTriggerButtonColor: btnColor,
        mobileTriggerShape: mobileTriggerShape,
        mobileTriggerSize: mobileTriggerSize,
        mobileTriggerHorizontalPosition: mobileTriggerHorizontalPosition,
        mobileTriggerVerticalPosition: mobileTriggerVerticalPosition,
        mobileTriggerHorizontalOffset: mobileTriggerHorizontalOffset,
        mobileTriggerVerticalOffset: mobileTriggerVerticalOffset,
        accessibilityStatementLink: linkResult.value,
      };

      onNext(customizationData);
    } catch {}
  };

  return (
    <div className="customization-screen">

      {/* Header */}
      <div className="customization-header">
        <div className="header-left">
          <img src={brandLogo} alt="AccessBit" style={{ height: '21px', display: 'block' }} />
          {siteDomain && <div className="header-divider" />}
          {siteDomain && <div className="header-domain">{siteDomain}</div>}
        </div>
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
        <div className="step active" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
          <div className="step-circle">1</div>
          <span className="step-name">Customization</span>
        </div>
        <div className="step" onClick={handleNextPayment} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
          <div className="step-circle">2</div>
          <span className="step-name">Publish</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Left Panel */}
        <div className="left-panel">
          <div className="panel-header">
            <span className="panel-header-title">Widget configuration</span>
            <span className="panel-header-unsaved">{unsavedCount} unsaved</span>
          </div>
          <div className="panel-content">

            {/* INTERFACE section */}
            <div className="section">
              <h3>INTERFACE</h3>
              <div className="interface-grid">
                <div className="form-group statement-link-full">
                  <label>Accessibility Statement Link</label>
                  <input
                    type="url"
                    inputMode="url"
                    placeholder="https://example.com/accessibility"
                    value={accessibilityStatementLink}
                    aria-invalid={statementLinkError ? true : undefined}
                    aria-describedby={statementLinkError ? "statement-link-error" : undefined}
                    onChange={(e) => {
                      setAccessibilityStatementLink(e.target.value);
                      if (statementLinkError) setStatementLinkError(null);
                    }}
                    onBlur={(e) => {
                      const result = normalizeStatementLink(e.target.value);
                      if (result.ok) {
                        setAccessibilityStatementLink(result.value);
                        setStatementLinkError(null);
                      } else {
                        setStatementLinkError(result.reason ?? null);
                      }
                    }}
                  />
                  {statementLinkError && (
                    <span
                      id="statement-link-error"
                      role="alert"
                      style={{ color: '#d93025', fontSize: '12px', marginTop: '4px', display: 'block' }}
                    >
                      {statementLinkError}
                    </span>
                  )}
                  <div className="statement-helper-text">Opens from the widget's Statement button.</div>
                </div>
              </div>
            </div>

            {/* TRIGGER — DESKTOP section */}
            <div className="section">
              <h3>TRIGGER — DESKTOP</h3>
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
                  <label>Button size</label>
                  <select
                    className="form-native-select"
                    value={triggerButtonSize}
                    onChange={e => { setTriggerButtonSize(e.target.value); setUnsavedCount(c => c + 1); }}
                  >
                    {sizeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Button shape</label>
                  <select
                    className="form-native-select"
                    value={triggerButtonShape}
                    onChange={e => { setTriggerButtonShape(e.target.value); setUnsavedCount(c => c + 1); }}
                  >
                    {shapeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Anchor</label>
                  <div className="anchor-select-row">
                    <select
                      className="anchor-select"
                      value={triggerVerticalPosition}
                      onChange={e => { setTriggerVerticalPosition(e.target.value); setUnsavedCount(c => c + 1); }}
                    >
                      <option value="Top">Top</option>
                      <option value="Middle">Middle</option>
                      <option value="Bottom">Bottom</option>
                    </select>
                    <select
                      className="anchor-select"
                      value={triggerHorizontalPosition}
                      onChange={e => { setTriggerHorizontalPosition(e.target.value); setUnsavedCount(c => c + 1); }}
                    >
                      <option value="Left">Left</option>
                      <option value="Right">Right</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Horizontal offset</label>
                  <div className="offset-input-wrapper offset-stepper">
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={triggerHorizontalOffset.replace('px', '')}
                      onChange={(e) => { setTriggerHorizontalOffset(Math.min(50, Math.max(0, Number(e.target.value))).toString() + 'px'); setUnsavedCount(c => c + 1); }}
                      className="offset-input"
                    />
                    <span className="offset-px-suffix">px</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Vertical offset</label>
                  <div className="offset-input-wrapper offset-stepper">
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={triggerVerticalOffset.replace('px', '')}
                      onChange={(e) => { setTriggerVerticalOffset(Math.min(50, Math.max(0, Number(e.target.value))).toString() + 'px'); setUnsavedCount(c => c + 1); }}
                      className="offset-input"
                    />
                    <span className="offset-px-suffix">px</span>
                  </div>
                </div>
              </div>

              {/* Hide trigger toggle */}
              <div
                className="hide-trigger-row"
                onClick={() => { setHideTrigger(h => !h); setUnsavedCount(c => c + 1); }}
              >
                <div className="hide-trigger-text">
                  <div className="hide-trigger-label">Hide trigger button</div>
                  <div className="hide-trigger-sub"></div>
                </div>
                <div className={`toggle-switch${hideTrigger ? ' on' : ''}`}>
                  <div className="toggle-knob" />
                </div>
              </div>
            </div>

            {/* TRIGGER — MOBILE section */}
            <div className="section">
              <h3>TRIGGER — MOBILE</h3>
              <div className="mobile-grid">

                <div className="form-group">
                  <label>Show on mobile</label>
                  <select
                    className="form-native-select"
                    value={showOnMobile}
                    onChange={e => { setShowOnMobile(e.target.value); setUnsavedCount(c => c + 1); }}
                  >
                    {showOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Size</label>
                  <select
                    className="form-native-select"
                    value={mobileTriggerSize}
                    onChange={e => { setMobileTriggerSize(e.target.value); setUnsavedCount(c => c + 1); }}
                  >
                    {sizeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Shape</label>
                  <select
                    className="form-native-select"
                    value={mobileTriggerShape}
                    onChange={e => { setMobileTriggerShape(e.target.value); setUnsavedCount(c => c + 1); }}
                  >
                    {mobileShapeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label>Anchor</label>
                  <div className="anchor-select-row">
                    <select
                      className="anchor-select"
                      value={mobileTriggerVerticalPosition}
                      onChange={e => { setMobileTriggerVerticalPosition(e.target.value); setUnsavedCount(c => c + 1); }}
                    >
                      <option value="Top">Top</option>
                      <option value="Middle">Middle</option>
                      <option value="Bottom">Bottom</option>
                    </select>
                    <select
                      className="anchor-select"
                      value={mobileTriggerHorizontalPosition}
                      onChange={e => { setMobileTriggerHorizontalPosition(e.target.value); setUnsavedCount(c => c + 1); }}
                    >
                      <option value="Left">Left</option>
                      <option value="Right">Right</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Horizontal offset</label>
                  <div className="offset-input-wrapper offset-stepper">
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={mobileTriggerHorizontalOffset}
                      onChange={(e) => { setMobileTriggerHorizontalOffset(Math.min(50, Math.max(0, Number(e.target.value))).toString()); setUnsavedCount(c => c + 1); }}
                      className="offset-input"
                    />
                    <span className="offset-px-suffix">px</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>Vertical offset</label>
                  <div className="offset-input-wrapper offset-stepper">
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={mobileTriggerVerticalOffset}
                      onChange={(e) => { setMobileTriggerVerticalOffset(Math.min(50, Math.max(0, Number(e.target.value))).toString()); setUnsavedCount(c => c + 1); }}
                      className="offset-input"
                    />
                    <span className="offset-px-suffix">px</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="right-panel">
          <div className="panel-header">
            <span className="panel-header-title">Preview</span>
            <div style={{ display: 'flex', gap: '4px', background: '#08080f', border: '1px solid #1e1e40', borderRadius: '9px', padding: '3px' }}>
              <button
                onClick={() => setIsDesktopView(true)}
                style={{ border: 'none', cursor: 'pointer', borderRadius: '7px', padding: '6px 12px', font: "400 12px 'Archivo', sans-serif", background: isDesktopView ? '#3634cc' : 'transparent', color: isDesktopView ? '#fff' : '#9498b8' }}
              >Desktop</button>
              <button
                onClick={() => setIsDesktopView(false)}
                style={{ border: 'none', cursor: 'pointer', borderRadius: '7px', padding: '6px 12px', font: "400 12px 'Archivo', sans-serif", background: !isDesktopView ? '#3634cc' : 'transparent', color: !isDesktopView ? '#fff' : '#9498b8' }}
              >Mobile</button>
            </div>
          </div>

          {/* Preview chrome */}
          <div style={{ padding: '0 14px 10px' }}>
            <div className="preview-chrome">
              <div className="preview-bar">
                <div className="preview-dots">
                  <div className="preview-dot red" />
                  <div className="preview-dot yellow" />
                  <div className="preview-dot green" />
                </div>
                <div className="preview-addr-stub" />
              </div>

              <div className="preview-content-area">
                {isDesktopView ? (
                  <div className="preview-frame-desktop">
                    {!hideTrigger && (
                      <div
                        style={{
                          position: 'absolute',
                          left: triggerHorizontalPosition === 'Left'
                            ? `calc(9px + ${scalePreviewOffset(triggerHorizontalOffset, PREVIEW_OFFSET_SCALE.desktop)}px)`
                            : triggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                          right: triggerHorizontalPosition === 'Right'
                            ? `calc(9px + ${scalePreviewOffset(triggerHorizontalOffset, PREVIEW_OFFSET_SCALE.desktop)}px)`
                            : 'auto',
                          top: triggerVerticalPosition === 'Top'
                            ? `calc(9px + ${scalePreviewOffset(triggerVerticalOffset, PREVIEW_OFFSET_SCALE.desktop)}px)`
                            : triggerVerticalPosition === 'Middle' ? '50%' : 'auto',
                          bottom: triggerVerticalPosition === 'Bottom'
                            ? `calc(9px + ${scalePreviewOffset(triggerVerticalOffset, PREVIEW_OFFSET_SCALE.desktop)}px)`
                            : 'auto',
                          transform: triggerVerticalPosition === 'Middle' ? 'translateY(-50%)' : 'none',
                        }}
                      >
                        <div
                          className={`widget-trigger ${triggerButtonShape.toLowerCase()} ${triggerButtonSize.toLowerCase()}`}
                          style={{ backgroundColor: btnColor }}
                        >
                          <img src={icon1} alt="" className="widget-icon" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="preview-frame-mobile">
                    {showOnMobile === 'Show' && (
                      <div
                        style={{
                          position: 'absolute',
                          left: mobileTriggerHorizontalPosition === 'Left'
                            ? `calc(8px + ${scalePreviewOffset(mobileTriggerHorizontalOffset, PREVIEW_OFFSET_SCALE.mobile)}px)`
                            : mobileTriggerHorizontalPosition === 'Right' ? 'auto' : '50%',
                          right: mobileTriggerHorizontalPosition === 'Right'
                            ? `calc(8px + ${scalePreviewOffset(mobileTriggerHorizontalOffset, PREVIEW_OFFSET_SCALE.mobile)}px)`
                            : 'auto',
                          top: mobileTriggerVerticalPosition === 'Top'
                            ? `calc(10px + ${scalePreviewOffset(mobileTriggerVerticalOffset, PREVIEW_OFFSET_SCALE.mobile)}px)`
                            : mobileTriggerVerticalPosition === 'Middle' ? '50%' : 'auto',
                          bottom: mobileTriggerVerticalPosition === 'Bottom'
                            ? `calc(10px + ${scalePreviewOffset(mobileTriggerVerticalOffset, PREVIEW_OFFSET_SCALE.mobile)}px)`
                            : 'auto',
                          transform: mobileTriggerVerticalPosition === 'Middle' ? 'translateY(-50%)' : 'none',
                          zIndex: 5,
                        }}
                      >
                        <div
                          className={`mobile-widget-trigger ${mobileTriggerShape === 'Rounded' ? 'round' : mobileTriggerShape.toLowerCase()} ${mobileTriggerSize.toLowerCase()}`}
                          style={{ backgroundColor: btnColor, animation: 'abPulse 2.6s ease-in-out infinite' }}
                        >
                          <img src={icon1} alt="" className="mobile-widget-icon" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="preview-summary">
            <div className="preview-summary-row">
              <span className="summary-label">Position</span>
              <span className="summary-value">
                {isDesktopView
                  ? `${triggerVerticalPosition.toLowerCase()} · ${triggerHorizontalPosition.toLowerCase()}`
                  : `${mobileTriggerVerticalPosition.toLowerCase()} · ${mobileTriggerHorizontalPosition.toLowerCase()}`}
              </span>
            </div>
            <div className="preview-summary-row">
              <span className="summary-label">Offset</span>
              <span className="summary-value">
                {isDesktopView
                  ? `${triggerHorizontalOffset.replace('px', '')} × ${triggerVerticalOffset.replace('px', '')} px`
                  : `${mobileTriggerHorizontalOffset} × ${mobileTriggerVerticalOffset} px`}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomizationScreen;
