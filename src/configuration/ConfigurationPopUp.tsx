import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Switch } from "antd";

type OptionsType = {
  disableEmojiAutocomplete: boolean;
  sprintGoalAsTitle: boolean;
  forceDisplayCopyLink: boolean;
};

const defaultOptions: OptionsType = {
  disableEmojiAutocomplete: false,
  sprintGoalAsTitle: false,
  forceDisplayCopyLink: false,
};

const Popup = () => {
  const [options, setOptions] = useState<OptionsType>(defaultOptions);

  const fetchOptions = async (): Promise<OptionsType> => {
    const items = await chrome.storage.sync.get(defaultOptions);
    return { ...defaultOptions, ...items };
  };

  useEffect(() => {
    fetchOptions().then((result: OptionsType) => setOptions(result));
  }, []);

  const saveOptions = (optionName: string, value: boolean) => {
    const updatedOptions: OptionsType = { ...options, [optionName]: value };

    chrome.storage.sync.set(updatedOptions).then(() => {
      setOptions(updatedOptions);
    });
  };

  const switchOnLabel: string = "On";
  const switchOffLabel: string = "Off";

  return (
    <div id="configuration-pop-up">
      <div className="p-1">
        <h1 className="text-center mt-0">
          <span className="d-block">Joking Jira</span>
          <img src="./icon-128.png" alt="Joking Jira" title="Joking Jira" />
        </h1>

        <div className="d-flex justify-content-between">
          <label htmlFor="disableEmojiAutocomplete" className="d-block me-1">
            <h5>Prevent emojis autocomplete</h5>
            <p className="my-0">
              Automatically add a space after any colon typed in order to
              prevent emojis autocomplete to disturb typing
            </p>
          </label>
          <Switch
            id="disableEmojiAutocomplete"
            checkedChildren={switchOnLabel}
            unCheckedChildren={switchOffLabel}
            checked={options.disableEmojiAutocomplete}
            onChange={(value: boolean) =>
              saveOptions("disableEmojiAutocomplete", value)
            }
          />
        </div>

        <hr />

        <div className="d-flex justify-content-between">
          <label htmlFor="sprintGoalAsTitle" className="d-block me-1">
            <h5>Sprint goal as title</h5>
            <p className="my-0">
              Add a title attribute to sprint goal so it can be displayed
              properly on hover
            </p>
          </label>
          <Switch
            id="sprintGoalAsTitle"
            checkedChildren={switchOnLabel}
            unCheckedChildren={switchOffLabel}
            checked={options.sprintGoalAsTitle}
            onChange={(value: boolean) =>
              saveOptions("sprintGoalAsTitle", value)
            }
          />
        </div>

        <hr />

        <div className="d-flex justify-content-between">
          <label htmlFor="forceDisplayCopyLink" className="d-block me-1">
            <h5>Force display copy issue link</h5>
            <p className="my-0">
              Add custom CSS to make copy issue link button always visible in
              issue breadcrumbs
            </p>
          </label>
          <Switch
            id="forceDisplayCopyLink"
            checkedChildren={switchOnLabel}
            unCheckedChildren={switchOffLabel}
            checked={options.forceDisplayCopyLink}
            onChange={(value: boolean) =>
              saveOptions("forceDisplayCopyLink", value)
            }
          />
        </div>

        <p className="text-center text-secondary mb-0 mt-2">
          Made with <span className="fs-1">♥️</span> from frustration
        </p>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
